"use client";

import React, { useState, useEffect } from "react";
import AudioPlayer from "@/components/AudioPlayer";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

// Define types for the structure of the audio file data
interface AudioFileMetadata {
  art: string;
  title: string;
  date: string;
  desc: string | null;
  series: string | null;
  preacher: string;
}

interface AudioFile {
  fileName: string;
  url: string;
  metadata: AudioFileMetadata;
}

// Custom Pagination Component
const Pagination = ({
  total,
  currentPage,
  onPageChange,
  itemsPerPage,
}: {
  total: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
}) => {
  const totalPages = Math.ceil(total / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center mt-8 space-x-2">
      <button
        className={`px-4 py-2 ${
          currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
        } rounded-md`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`px-4 py-2 ${
            currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
          } rounded-md`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`px-4 py-2 ${
          currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"
        } rounded-md`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

const SermonList: React.FC = () => {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Pagination state
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchAudioFiles = async () => {
      try {
        const response = await fetch("/api/getAudioData");
        if (!response.ok) throw new Error("Network response was not ok");
        const data: AudioFile[] = await response.json();
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

  const formatDescription = (
    description: string | null
  ): JSX.Element | null => {
    if (!description) return null;

    const words = description.split(/\s+/);
    const truncatedDescription = words.slice(0, 29).join(" ");

    return (
      <span>
        {truncatedDescription}
        {words.length > 29 && "..."}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="bg-smokeWhite">
        <Header
          header="Sermons"
          page="All Sermons"
        />
        <p>Loading audio files...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-smokeWhite">
        <Header
          header="Sermons"
          page="All Sermons"
        />
        <p>Error loading audio files. Please check your connection.</p>
      </div>
    );
  }

  // Pagination logic: Get items for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedFiles = audioFiles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <main className="bg-smokeWhite">
      <Header
        header="Sermons"
        page="All Sermons"
      />

      <div className="sermon-player pb-10">
        {audioFiles.length === 0 ? (
          <p>No audio files available.</p>
        ) : (
          <div className="w-[96%] max-w-[1200px] mx-auto">
            {paginatedFiles.map((file, index) => (
              <Link
                key={index}
                className="flex max-sm:flex-col mt-10 bg-white"
                href={`/sermons/${encodeURIComponent(file.fileName)}`}
              >
                <div className="max-sm:h-[300px] max-sm:w-[100%] max-sm:self-center sm:w-[500px] sm:h-[350px]">
                  <Image
                    src={file.metadata.art}
                    alt=""
                    width={1000}
                    height={1280}
                    className="h-full w-full object-cover max-sm:object-contain"
                  />
                </div>

                <div className="relative w-full px-6 self-center py-3">
                  <p className="text-maroon text-sm font-medium">
                    {file.metadata.series}
                  </p>
                  <p className="font-sofia-bold text-3xl md:text-4xl my-3 text-darkmaroon">
                    {file.metadata.title}
                  </p>

                  <p className="my-3 text-lightGrey text-sm font-medium">
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

                  <span className="block border-t text-sm font-medium text-maroon max-sm:pb-3 pt-5">
                    <span className="text-lightGrey">Preacher :</span>{" "}
                    {file.metadata.preacher || "Pastor Collins Throne"}
                  </span>
                </div>
              </Link>
            ))}

            {/* Pagination */}
            <Pagination
              total={audioFiles.length}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              itemsPerPage={ITEMS_PER_PAGE}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default SermonList;
