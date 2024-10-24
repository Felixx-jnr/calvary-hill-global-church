// "use client";
// import React, { useRef, useState, useEffect } from "react";

// const AudioPlayer = ({ audioSrc, metadataUrl }) => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [isMuted, setIsMuted] = useState(false);
//   const [audioMetadata, setAudioMetadata] = useState({
//     title: "Unknown Title",
//     artist: "Unknown Artist",
//     album: "Unknown Album",
//     coverImage: "",
//   });

//   // Fetch metadata from the provided URL
//   useEffect(() => {
//     if (metadataUrl) {
//       fetch(metadataUrl)
//         .then((res) => res.json())
//         .then((data) => setAudioMetadata(data))
//         .catch((err) => console.error("Error fetching metadata:", err));
//     }
//   }, [metadataUrl]);

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   const handleLoadedMetadata = () => {
//     setDuration(audioRef.current.duration);
//   };

//   const handleSeek = (event) => {
//     const seekTime = (event.target.value / 100) * duration;
//     audioRef.current.currentTime = seekTime;
//   };

//   const handleVolumeChange = (event) => {
//     const volumeLevel = event.target.value / 100;
//     setVolume(volumeLevel);
//     audioRef.current.volume = volumeLevel;
//   };

//   const formatTime = (time) => {
//     const hours = Math.floor(time / 3600);
//     const minutes = Math.floor((time % 3600) / 60);
//     const seconds = Math.floor(time % 60);
//     return [
//       hours > 0 ? `${hours}` : null,
//       minutes > 0 ? `${minutes < 10 && hours ? "0" + minutes : minutes}` : "0",
//       seconds < 10 ? `0${seconds}` : seconds,
//     ]
//       .filter(Boolean)
//       .join(":");
//   };

//   return (
//     <div className="audio-player bg-gray-900 text-white p-4 rounded-lg max-w-md mx-auto">
//       <audio
//         ref={audioRef}
//         src="/Baptizo Track 1.mp3"
//         onTimeUpdate={handleTimeUpdate}
//         onLoadedMetadata={handleLoadedMetadata}
//       ></audio>

//       {/* Display audio metadata */}
//       <div className="audio-metadata mb-4">
//         <img
//           src={audioMetadata.coverImage}
//           alt="Cover Art"
//           className="mb-2"
//         />
//         <h3 className="text-lg font-bold">{audioMetadata.title}</h3>
//         <p className="text-sm">{audioMetadata.artist}</p>
//         <p className="text-xs">{audioMetadata.album}</p>
//       </div>

//       <div className="controls flex justify-between items-center mt-4">
//         <button
//           onClick={togglePlayPause}
//           className="bg-blue-600 p-2 rounded-md"
//         >
//           {isPlaying ? "Pause" : "Play"}
//         </button>

//         <span className="text-sm">{formatTime(currentTime)}</span>

//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={(currentTime / duration) * 100 || 0}
//           onChange={handleSeek}
//           className="w-full mx-4 audio-range"
//         />

//         <span className="text-sm">{formatTime(duration)}</span>
//       </div>

//       <div className="volume-control mt-4 flex items-center justify-between">
//         <button
//           onClick={() => setIsMuted(!isMuted)}
//           className="bg-gray-600 p-2 rounded-md"
//         >
//           {isMuted ? "Unmute" : "Mute"}
//         </button>

//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={volume * 100}
//           onChange={handleVolumeChange}
//           className="w-full mx-4"
//         />
//       </div>
//     </div>
//   );
// };

// export default AudioPlayer;
