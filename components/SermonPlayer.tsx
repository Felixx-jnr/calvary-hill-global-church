"use client";
import React, { useState, useEffect } from "react";

const SermonPlayer = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAudioFiles = async () => {
      try {
        const response = await fetch("/api/getAudioData");
        const data = await response.json();
        setAudioFiles(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching audio files:", error);
        setLoading(false);
      }
    };

    fetchAudioFiles();
  }, []);

  if (loading) {
    return <p>Loading audio files...</p>;
  }

  return (
    <div className="sermon-player">
      <h2 className="text-lg font-bold mb-4">Available Sermons</h2>
      {audioFiles.length === 0 ? (
        <p>No audio files available.</p>
      ) : (
        <ul>
          {audioFiles.map((file, index) => (
            <li
              key={index}
              className="mb-4"
            >
              <p>{file.fileName}</p>
              <audio controls>
                <source
                  src={file.url}
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SermonPlayer;
