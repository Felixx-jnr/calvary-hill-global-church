"use client";
import React, { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import Image from "next/image";

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

  // Enhanced function to format description text
  const formatDescription = (description) => {
    if (!description) return null;

    const words = description.split(/\s+/);
    const truncatedDescription = words.slice(0, 29).join(" ");

    return (
      <p className="mb-4">
        {truncatedDescription}
        {words.length > 29 && "..."}
      </p>
    );
  };

  if (loading) {
    return <p>Loading audio files...</p>;
  }

  return (
    <div className="sermon-player">
      <h2 className="text-lg font-bold mb-4">Available Sermons</h2>
      {audioFiles.length === 0 ? (
        <p>No audio files available.</p>
      ) : (
        <ul className="w-[96%] lg:w-[90%] mx-auto ">
          {audioFiles.map((file, index) => (
            <li
              key={index}
              className="flex max-sm:flex-col bg-white my-10 "
            >
              <div className="  max-sm:w-[60%] sm:w-[30%]">
                <Image
                  src={file.metadata.art}
                  alt=""
                  width={1000}
                  height={1280}
                  className="h-full w-full object-cover"
                ></Image>
              </div>

              <div className="  relative w-full px-6 self-center ">
                <p className=" text-maroon text-sm font-medium ">
                  Few Important Things To Know About Healing
                </p>
                <p className=" font-sofia-bold text-3xl md:text-4xl my-3 text-darkmaroon">
                  {file.metadata.title}
                </p>

                <p className=" my-3 text-lightGrey text-sm font-medium">
                  {file.metadata.date}
                </p>
                <div className="formatted-desc my-1 text-lightGrey text-sm md:text-base font-medium tracking-wide leading-snug font-serif">
                  {file.metadata.desc
                    ? formatDescription(file.metadata.desc)
                    : "No description available."}
                </div>

                <div className="mt-5 mb-5">
                  <AudioPlayer audioSrc={file.url} />
                </div>

                <span className=" block py-5 border-t text-sm font-medium text-maroon">
                  {" "}
                  <span className="text-lightGrey">Preacher :</span> Pastor
                  Collins Throne
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SermonPlayer;
