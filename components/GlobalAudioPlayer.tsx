"use client";

import { IoClose } from "react-icons/io5";
import { usePlayer } from "@/context/PlayerContext";
import AudioPlayer from "./AudioPlayer";

const GlobalAudioPlayer = () => {
  const { playingFile, closePlayer } = usePlayer();

  if (!playingFile) return null;

  return (
    <div className="right-0 bottom-0 z-50 fixed bg-darkGrey shadow-md px-2 py-2 xs:w-full sm:w-[90%] max-w-[540px]">
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-between items-center gap-2 mb-2">
          <p className="font-medium text-maroon text-sm line-clamp-1">
            Now Playing: <span> {playingFile.metadata.title} </span>
          </p>
          <button
            onClick={closePlayer}
            aria-label="Close player"
            className="flex-shrink-0 hover:bg-maroon/10 p-1 rounded-full text-maroon text-lg transition-colors"
          >
            <IoClose />
          </button>
        </div>
        <AudioPlayer
          audioSrc={playingFile.url}
          playGlobally={true}
          file={playingFile}
        />
      </div>
    </div>
  );
};

export default GlobalAudioPlayer;
