"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { HiVolumeUp } from "react-icons/hi";
import { ImVolumeMute } from "react-icons/im";
import { usePlayer } from "@/context/PlayerContext";

// Props
interface AudioPlayerProps {
  audioSrc: string;
  playGlobally?: boolean;
  file?: {
    fileName: string;
    url: string;
    metadata: {
      art: string;
      title: string;
      date: string;
      desc: string | null;
      series: string | null;
      preacher: string;
    };
  };
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioSrc,
  playGlobally = false,
  file,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const {
    setPlayingFile,
    restoredFileName,
    restoredPosition,
    restoredWasPlaying,
    savePosition,
    clearSaved,
  } = usePlayer();

  // True while this global player is showing the sermon carried over from a previous page load.
  const isRestoredFile =
    playGlobally && !!file && !!restoredFileName && file.fileName === restoredFileName;

  // Guards so the resume-seek runs once per src and stops once the user takes over.
  const userInteractedRef = useRef(false);
  const seekedSrcRef = useRef<string | null>(null);

  // Automatically play when used in global context
  useEffect(() => {
    const audioEl = audioRef.current;
    if (!playGlobally || !audioEl) return;

    // Respect the paused state a restored sermon was left in.
    if (isRestoredFile && !restoredWasPlaying) {
      setIsPlaying(false);
      return;
    }

    const playPromise = audioEl.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise
        .then(() => setIsPlaying(true))
        // Browser blocked autoplay (e.g. right after a refresh) — leave it paused for a tap.
        .catch(() => setIsPlaying(false));
    } else {
      setIsPlaying(true);
    }
  }, [audioSrc, playGlobally, isRestoredFile, restoredWasPlaying]);

  // useEffect to update the slider background for the range sliders
  useEffect(() => {
    const updateSliderBackground = (slider: HTMLInputElement) => {
      // Ensure slider.value is treated as a number
      const value =
        ((parseFloat(slider.value) - parseFloat(slider.min)) /
          (parseFloat(slider.max) - parseFloat(slider.min))) *
        100;
      slider.style.background = `linear-gradient(to right, #240C00 ${value}%, #ccc ${value}%)`;
    };

    const rangeSliders = document.querySelectorAll(".range-slider");

    rangeSliders.forEach((slider) => {
      updateSliderBackground(slider as HTMLInputElement); // Update on initial render
      slider.addEventListener("input", () =>
        updateSliderBackground(slider as HTMLInputElement)
      );
    });

    return () => {
      rangeSliders.forEach((slider) =>
        slider.removeEventListener("input", () =>
          updateSliderBackground(slider as HTMLInputElement)
        )
      );
    };
  }, [currentTime, volume]);

  const togglePlayPause = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    if (!playGlobally && file) {
      setPlayingFile(file);
      return;
    }

    userInteractedRef.current = true;

    if (audioEl.paused) {
      audioEl.play();
      setIsPlaying(true);
    } else {
      audioEl.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    setCurrentTime(audioEl.currentTime);
    if (playGlobally) savePosition(audioEl.currentTime, !audioEl.paused);
  };

  const handleLoadedMetadata = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    setDuration(audioEl.duration);

    // Resume the carried-over sermon where the previous page load left off.
    if (
      isRestoredFile &&
      !userInteractedRef.current &&
      restoredPosition > 0 &&
      restoredPosition < audioEl.duration - 1 &&
      seekedSrcRef.current !== audioSrc
    ) {
      audioEl.currentTime = restoredPosition;
      setCurrentTime(restoredPosition);
      seekedSrcRef.current = audioSrc;
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = (parseFloat(event.target.value) / 100) * duration;
    if (audioRef.current) audioRef.current.currentTime = seekTime;
    userInteractedRef.current = true;
    if (playGlobally) savePosition(seekTime, !audioRef.current?.paused, true);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (playGlobally) clearSaved();
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const volumeLevel = parseFloat(event.target.value) / 100;
    setVolume(volumeLevel);
    if (audioRef.current) audioRef.current.volume = volumeLevel;
    setIsMuted(volumeLevel === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    const formattedMinutes = `${minutes < 10 ? `0${minutes}` : minutes}`;
    const formattedSeconds = `${seconds < 10 ? `0${seconds}` : seconds}`;

    return hours > 0
      ? `${hours < 10 ? `0${hours}` : hours}:${formattedMinutes}:${formattedSeconds}`
      : `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="w-full audio-player">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPause={() => {
          setIsPlaying(false);
          if (playGlobally && audioRef.current)
            savePosition(audioRef.current.currentTime, false, true);
        }}
        onPlay={() => setIsPlaying(true)}
        onEnded={handleEnded}
      />
      <div className="flex justify-between items-center gap-2 sm:gap-4 cursor-default controls">
        <button
          onClick={togglePlayPause}
          className="p-1 md:p-3 border-2 border-darkmaroon hover:border-maroon rounded-full text-darkmaroon hover:text-maroon text-lg"
        >
          {isPlaying ? <IoIosPause /> : <IoIosPlay />}
        </button>

        <span className="font-sofia-regular text-darkmaroon text-sm sm:text-lg">
          {formatTime(currentTime)}
        </span>

        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          className="w-full range-slider"
        />

        <span className="max-xxs:hidden font-sofia-regular text-darkmaroon text-sm sm:text-lg">
          {formatTime(duration)}
        </span>

        <div className="max-xs:hidden volume-control">
          <button
            onClick={toggleMute}
            className="p-2 md:p-3 border-2 border-darkmaroon hover:border-maroon rounded-full text-darkmaroon hover:text-maroon text-lg"
          >
            {isMuted ? <ImVolumeMute /> : <HiVolumeUp />}
          </button>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={isMuted ? 0 : volume * 100}
          onChange={handleVolumeChange}
          className="max-xxs:hidden w-[30%] md:w-[25%] lg:w-[13%] range-slider"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
