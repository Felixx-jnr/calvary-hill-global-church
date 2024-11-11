"use client";
import React, { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import Image from "next/image";
import Link from "next/link";

const SermonPlayer = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAudioFiles = async () => {
      try {
        const response = await fetch("/api/getAudioData");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setAudioFiles(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching audio files:", error);
        setError(true);
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
      <p className="mb-">
        {truncatedDescription}
        {words.length > 29 && "..."}
      </p>
    );
  };

  if (loading) {
    return <p>Loading audio files...</p>;
  }

  if (error) {
    return <p>Error loading audio files. Please check your connection.</p>;
  }

  return (
    <div className="sermon-player pb-10">
      {audioFiles.length === 0 ? (
        <p>No audio files available.</p>
      ) : (
        <ul className="w-[96%] max-w-[1200px] mx-auto">
          {audioFiles.map((file, index) => (
            <Link
              key={index}
              className="flex max-sm:flex-col mt-10 bg-white"
              href={"/"}
            >
              <div className=" max-sm:h-[300px] max-sm:w-[100%] max-sm:self-center sm:w-[500px] sm:h-[350px] max-sm:">
                <Image
                  src={file.metadata.art}
                  alt=""
                  width={1000}
                  height={1280}
                  className="h-full w-full object-cover max-sm:object-contain"
                ></Image>
              </div>

              <div className="  relative w-full px-6 self-center py-3">
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

                <div
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                  }}
                  className="mt-5 mb-5"
                >
                  <AudioPlayer audioSrc={file.url} />
                </div>

                <span className=" block border-t text-sm font-medium text-maroon max-sm:pb-3 pt-5">
                  {" "}
                  <span className="text-lightGrey">Preacher :</span> Pastor
                  Collins Throne
                </span>
              </div>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SermonPlayer;
