"use client";

import { createContext, useContext, useState, ReactNode } from "react";

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
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [playingFile, setPlayingFile] = useState<AudioFile | null>(null);

  return (
    <PlayerContext.Provider value={{ playingFile, setPlayingFile }}>
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
