"use client";
import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import Image from "next/image";

// Define the types for the audio metadata and response data
interface AudioMetadata {
  art?: string;
  artist?: string;
  title?: string;
  preacher?: string;
}

interface AudioData {
  metadata: AudioMetadata;
  url: string;
}

const RandomAudioPlayer: React.FC = () => {
  const [audioData, setAudioData] = useState<AudioData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch a random audio file from the backend API
  const fetchRandomAudio = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/getRandomAudio");
      if (!response.ok) {
        throw new Error(`Failed to fetch audio file: ${response.statusText}`);
      }
      const data = (await response.json()) as AudioData; // Explicitly cast response as AudioData
      setAudioData(data);
    } catch (err) {
      // Use a type guard to handle errors safely
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch audio data on component mount
  useEffect(() => {
    fetchRandomAudio();
  }, []);

  // Handle loading and error states
  if (loading) {
    return <p className="mt-4 text-center">Loading audio...</p>;
  }

  if (error) {
    return (
      <p className="mt-4 text-red-500 text-center">
        Error: {error}. Please refresh the page.
      </p>
    );
  }

  if (!audioData) {
    return (
      <p className="mt-4 text-center">
        No audio data available. Please refresh the page.
      </p>
    );
  }

  return (
    <div className="max-sm:block flex bg-white">
      {/* Audio Cover Image */}
      <div className="max-sm:my-5 sm:w-[400px] md:w-[500px] max-sm:h-[200px]">
        <Image
          src={audioData.metadata?.art || "/default-art.jpg"} // Default fallback image
          alt="Audio Artwork"
          width={1000}
          height={1280}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Audio Metadata and Player */}
      <div className="relative md:ml-8 lg:ml-10 w-full">
        <div className="sm:top-1/2 sm:absolute p-4 w-full font-sofia-bold sm:-translate-y-1/2">
          <p className="inline-block bg-darkmaroon p-4 py-1 font-bold text-white text-xs text-center">
            NOW PLAYING
          </p>
          <h4 className="mt-4 text-darkmaroon text-xl leading-tight">
            {audioData.metadata?.preacher || "Pastor Collins Throne"}
          </h4>
          <h3 className="text-[28px] text-darkmaroon leading-none tracking-wide">
            {audioData.metadata?.title || "Untitled Audio"}
          </h3>

          <div className="flex justify-start gap-4 mt-6">
            {/* Audio Player */}
            <AudioPlayer
              audioSrc={audioData.url}
              file={{
                fileName: "random.mp3", // or however you want to label it
                url: audioData.url,
                metadata: {
                  art: audioData.metadata?.art || "/default-art.jpg",
                  title: audioData.metadata?.title || "Untitled",
                  date: new Date().toISOString(), // or null if not available
                  desc: null, // add real desc if you have it
                  series: null,
                  preacher: audioData.metadata?.preacher || "Unknown Preacher",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomAudioPlayer;
