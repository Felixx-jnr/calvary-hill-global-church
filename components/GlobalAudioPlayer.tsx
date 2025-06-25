"use client";

import { usePlayer } from "@/context/PlayerContext";
import AudioPlayer from "./AudioPlayer";

const GlobalAudioPlayer = () => {
  const { playingFile } = usePlayer();

  if (!playingFile) return null;

  return (
    <div className="right-0 bottom-0 z-50 fixed bg-darkGrey shadow-md px-2 py-2 xs:w-full sm:w-[90%] max-w-[540px]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-medium text-maroon text-sm line-clamp-1">
          Now Playing: <span> {playingFile.metadata.title} </span>
        </p>
        <AudioPlayer
          audioSrc={playingFile.url}
          playGlobally={true}
        />
      </div>
    </div>
  );
};

export default GlobalAudioPlayer;
