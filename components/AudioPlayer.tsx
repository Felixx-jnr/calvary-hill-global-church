"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { HiVolumeUp } from "react-icons/hi";
import { ImVolumeMute } from "react-icons/im";

// Define the type for the component props

const AudioPlayer: React.FC<audioProps> = ({ audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);

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
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = (parseFloat(event.target.value) / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const volumeLevel = parseFloat(event.target.value) / 100;
    setVolume(volumeLevel);
    if (audioRef.current) {
      audioRef.current.volume = volumeLevel;
    }
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
    <div className="audio-player w-full">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>

      <div className="controls flex justify-between items-center gap-2 sm:gap-4 cursor-default">
        <button
          onClick={togglePlayPause}
          className="border-2 border-darkmaroon hover:border-maroon p-1 md:p-3 rounded-full text-darkmaroon hover:text-maroon text-lg"
        >
          {isPlaying ? <IoIosPause /> : <IoIosPlay />}
        </button>

        <span className="text-sm sm:text-lg font-sofia-regular text-darkmaroon">
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

        <span className="max-xxs:hidden text-sm sm:text-lg font-sofia-regular text-darkmaroon">
          {formatTime(duration)}
        </span>

        <div className="volume-control max-xs:hidden">
          <button
            onClick={toggleMute}
            className="hover:border-maroon p-2 md:p-3 border rounded-full text-darkmaroon hover:text-maroon text-lg"
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
          className="w-[30%] md:w-[25%] lg:w-[13%] range-slider max-xxs:hidden"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
