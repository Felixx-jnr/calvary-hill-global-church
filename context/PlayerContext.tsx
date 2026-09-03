"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

interface AudioFileMetadata {
  art: string;
  title: string;
  date: string;
  desc: string | null;
  series: string | null;
  preacher: string;
}

interface AudioFile {
  fileName: string;
  url: string;
  metadata: AudioFileMetadata;
}

interface PlayerContextType {
  playingFile: AudioFile | null;
  setPlayingFile: (file: AudioFile) => void;
  /** fileName of the sermon carried over from a previous page load, or null. */
  restoredFileName: string | null;
  /** Seconds into the restored sermon to resume from. */
  restoredPosition: number;
  /** Whether the restored sermon was playing when the page was left. */
  restoredWasPlaying: boolean;
  /** Persist current playback progress so it survives a refresh. */
  savePosition: (seconds: number, isPlaying: boolean, immediate?: boolean) => void;
  /** Forget the persisted sermon (e.g. once it finishes). */
  clearSaved: () => void;
  /** Dismiss the global player entirely — stops playback and clears saved state. */
  closePlayer: () => void;
}

const STORAGE_KEY = "chgc-global-player";
// Presigned S3 URLs expire after 1h; refresh the stored one once it gets close.
const URL_TTL_MS = 55 * 60 * 1000;

interface StoredPlayerState {
  file: AudioFile;
  position: number;
  wasPlaying: boolean;
  urlIssuedAt: number;
}

const readStored = (): StoredPlayerState | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredPlayerState;
    if (!parsed?.file?.fileName || !parsed?.file?.url) return null;
    return parsed;
  } catch {
    return null;
  }
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  // Read once, synchronously, so the player bar is present on the first paint after a reload.
  const [restored] = useState(() => readStored());

  const [playingFile, setPlayingFileState] = useState<AudioFile | null>(
    restored?.file ?? null
  );
  const [restoredFileName, setRestoredFileName] = useState<string | null>(
    restored?.file.fileName ?? null
  );
  const restoredPosition = restored?.position ?? 0;
  const restoredWasPlaying = restored?.wasPlaying ?? false;

  const playingFileRef = useRef<AudioFile | null>(playingFile);
  const stateRef = useRef({
    position: restored?.position ?? 0,
    wasPlaying: restored?.wasPlaying ?? false,
    urlIssuedAt: restored?.urlIssuedAt ?? 0,
  });
  const lastWrite = useRef(0);

  const persist = useCallback((fileOverride?: AudioFile | null) => {
    if (typeof window === "undefined") return;
    const file =
      fileOverride !== undefined ? fileOverride : playingFileRef.current;
    try {
      if (!file) {
        window.localStorage.removeItem(STORAGE_KEY);
        return;
      }
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ file, ...stateRef.current })
      );
    } catch {
      /* storage unavailable — playback still works, just won't survive a refresh */
    }
  }, []);

  // If the restored presigned URL is near expiry, mint a fresh one before playback needs it.
  useEffect(() => {
    if (!restored) return;
    if (Date.now() - (restored.urlIssuedAt || 0) < URL_TTL_MS) return;

    let cancelled = false;
    fetch(
      `/api/getAudioDataByKey?key=${encodeURIComponent(restored.file.fileName)}`
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data?.url) return;
        stateRef.current.urlIssuedAt = Date.now();
        const next = { ...restored.file, url: data.url };
        playingFileRef.current = next;
        setPlayingFileState(next);
        persist(next);
      })
      .catch(() => {
        /* keep the stale URL; the user can re-select the sermon if it fails to load */
      });

    return () => {
      cancelled = true;
    };
  }, [restored, persist]);

  const setPlayingFile = useCallback(
    (file: AudioFile) => {
      stateRef.current = {
        position: 0,
        wasPlaying: true,
        urlIssuedAt: Date.now(),
      };
      lastWrite.current = Date.now();
      setRestoredFileName(null);
      setPlayingFileState(file);
      playingFileRef.current = file;
      persist(file);
    },
    [persist]
  );

  const savePosition = useCallback(
    (seconds: number, isPlaying: boolean, immediate = false) => {
      stateRef.current.position = seconds;
      stateRef.current.wasPlaying = isPlaying;
      const now = Date.now();
      if (!immediate && now - lastWrite.current < 2000) return;
      lastWrite.current = now;
      persist();
    },
    [persist]
  );

  const clearSaved = useCallback(() => {
    stateRef.current.position = 0;
    stateRef.current.wasPlaying = false;
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const closePlayer = useCallback(() => {
    stateRef.current = { position: 0, wasPlaying: false, urlIssuedAt: 0 };
    playingFileRef.current = null;
    setPlayingFileState(null);
    setRestoredFileName(null);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
    }
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        playingFile,
        setPlayingFile,
        restoredFileName,
        restoredPosition,
        restoredWasPlaying,
        savePosition,
        clearSaved,
        closePlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within PlayerProvider");
  }
  return context;
};
