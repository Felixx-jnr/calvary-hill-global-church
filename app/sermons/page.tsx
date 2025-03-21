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

  // Define the range of pages to display
  const pagesToShow = [];
  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i >= 1 && i <= totalPages) {
      pagesToShow.push(i);
    }
  }

  return (
    <div className="flex justify-center space-x-2 mt-8">
      {/* Previous Button */}
      <button
        className={` xs:text-sm text-xs px-2 py-1 xs:px-4 xs:py-2 ${currentPage === 1 ? "bg-gray-300" : "bg-maroon text-white"} rounded-md`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {pagesToShow.map((page) => (
        <React.Fragment key={page}>
          <button
            className={` xs:text-sm text-xs px-2 py-1 xs:px-4 xs:py-2 rounded-full ${
              currentPage === page ? " bg-maroon text-white" : "bg-gray-300"
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        </React.Fragment>
      ))}

      {/* Ellipsis before last page (if needed) */}
      {pagesToShow[pagesToShow.length - 1] < totalPages - 1 && (
        <span className="">...</span>
      )}

      {/* Last Page (if needed) */}
      {pagesToShow[pagesToShow.length - 1] < totalPages && (
        <button
          className="bg-gray-300 px-2 xs:px-4 py-1 xs:py-2 rounded-full text-xs xs:text-sm"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      )}

      {/* Next Button */}
      <button
        className={` xs:text-sm text-xs px-2 py-1 xs:px-4 xs:py-2 ${currentPage === totalPages ? "bg-gray-300" : "bg-maroon text-white"} rounded-md`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
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
        <Header header="Sermons" page="All Sermons" />
        <p>Loading audio files...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-smokeWhite">
        <Header header="Sermons" page="All Sermons" />
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
      <Header header="Sermons" page="All Sermons" />

      <div className="pb-10 sermon-player">
        {audioFiles.length === 0 ? (
          <p>No audio files available.</p>
        ) : (
          <div className="mx-auto w-[96%] max-w-[1200px]">
            {paginatedFiles.map((file, index) => (
              <Link
                key={index}
                className="flex max-sm:flex-col bg-white mt-10"
                href={`/sermons/${encodeURIComponent(file.fileName)}`}
              >
                <div className="max-sm:self-center max-sm:w-[100%] sm:w-[500px] max-sm:h-[300px] sm:h-[350px]">
                  <Image
                    src={file.metadata.art}
                    alt=""
                    width={1000}
                    height={1280}
                    className="w-full h-full object-cover max-sm:object-contain"
                  />
                </div>

                <div className="relative self-center px-6 py-3 w-full">
                  <p className="font-medium text-maroon text-sm">
                    {file.metadata.series}
                  </p>
                  <p className="my-3 font-sofia-bold text-darkmaroon text-3xl md:text-4xl">
                    {file.metadata.title}
                  </p>

                  <p className="my-3 font-medium text-lightGrey text-sm">
                    {file.metadata.date}
                  </p>
                  <div className="my-1 font-serif font-medium text-lightGrey text-sm md:text-base leading-snug tracking-wide formatted-desc">
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

                  <span className="block pt-5 max-sm:pb-3 border-t font-medium text-maroon text-sm">
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
