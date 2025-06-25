"use client";

import { usePlayer } from "@/context/PlayerContext";
import AudioPlayer from "./AudioPlayer";

const GlobalAudioPlayer = () => {
  const { playingFile } = usePlayer();

  if (!playingFile) return null;

  const formatTitle = (description: string | null): JSX.Element | null => {
    if (!description) return null;

    const words = description.split(/\s+/);
    const truncatedDescription = words.slice(0, 8).join(" ");

    return (
      <span className="mb-">
        {truncatedDescription}
        {words.length > 8 && "..."}
      </span>
    );
  };

  return (
    <div className="right-0 bottom-0 z-50 fixed bg-darkGrey shadow-md px-2 py-2 xs:w-full sm:w-[90%] max-w-[540px]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-medium text-sm text-maroon line-clamp-1 ">
          Now Playing: <span>  { playingFile.metadata.title} </span>
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
