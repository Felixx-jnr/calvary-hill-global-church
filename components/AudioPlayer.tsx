"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { HiVolumeUp } from "react-icons/hi";
import { ImVolumeMute } from "react-icons/im";

const AudioPlayer = ({ audioSrc }: audioProps) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // useEffect to update the slider background for the range sliders
  useEffect(() => {
    const updateSliderBackground = (slider) => {
      const value =
        ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
      slider.style.background = `linear-gradient(to right, #240C00 ${value}%, #ccc ${value}%)`;
    };

    const rangeSliders = document.querySelectorAll(".range-slider");

    rangeSliders.forEach((slider) => {
      updateSliderBackground(slider); // Update on initial render
      slider.addEventListener("input", () => updateSliderBackground(slider));
    });

    return () => {
      rangeSliders.forEach((slider) =>
        slider.removeEventListener("input", () =>
          updateSliderBackground(slider)
        )
      );
    };
  }, [currentTime, volume]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (event) => {
    const seekTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
  };

  const handleVolumeChange = (event) => {
    const volumeLevel = event.target.value / 100;
    setVolume(volumeLevel);
    audioRef.current.volume = volumeLevel;
    setIsMuted(volumeLevel === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  const formatTime = (time) => {
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

      <div className="controls flex justify-between items-center gap-2 sm:gap-4">
        <button
          onClick={togglePlayPause}
          className=" border-2 border-darkmaroon hover:border-maroon p-1 md:p-3 rounded-full text-darkmaroon hover:text-maroon text-lg"
        >
          {isPlaying ? <IoIosPause /> : <IoIosPlay />}
        </button>

        <span className=" text-sm sm:text-lg font-sofia-regular text-darkmaroon">
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

        <span className=" text-sm sm:text-lg font-sofia-regular text-darkmaroon">
          {formatTime(duration)}
        </span>

        <div className="volume-control">
          <button
            onClick={toggleMute}
            className=" hover:border-maroon p-1 md:p-3 border rounded-full text-darkmaroon hover:text-maroon text-lg"
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
          className=" w-[30%] md:w-[25%] lg:w-[13%] range-slider max-xxs:hidden"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
