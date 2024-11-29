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
    return <p className="text-center mt-4">Loading audio...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-4 text-red-500">
        Error: {error}. Please refresh the page.
      </p>
    );
  }

  if (!audioData) {
    return (
      <p className="text-center mt-4">
        No audio data available. Please refresh the page.
      </p>
    );
  }

  return (
    <div className="flex max-sm:block bg-white">
      {/* Audio Cover Image */}
      <div className="sm:w-[400px] md:w-[500px] max-sm:h-[200px] max-sm:my-5">
        <Image
          src={audioData.metadata?.art || "/default-art.jpg"} // Default fallback image
          alt="Audio Artwork"
          width={1000}
          height={1280}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Audio Metadata and Player */}
      <div className="md:ml-8 lg:ml-10 relative w-full">
        <div className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 w-full font-sofia-bold p-4">
          <p className="inline-block p-4 text-xs font-bold py-1 bg-darkmaroon text-white text-center">
            NOW PLAYING
          </p>
          <h4 className="text-xl mt-4 leading-tight text-darkmaroon">
            {audioData.metadata?.preacher || "Pastor Collins Throne"}
          </h4>
          <h3 className="text-[28px] leading-none tracking-wide text-darkmaroon">
            {audioData.metadata?.title || "Untitled Audio"}
          </h3>

          <div className="flex gap-4 mt-6 justify-start">
            {/* Audio Player */}
            <AudioPlayer audioSrc={audioData.url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomAudioPlayer;
