"use client";

import React, { useState, useEffect } from "react";
import AudioPlayer from "@/components/AudioPlayer";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SearchOverlay from "@/components/SearchOverlay";

// Types
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

// Pagination Component
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
  const pagesToShow = [];

  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i >= 1 && i <= totalPages) {
      pagesToShow.push(i);
    }
  }

  return (
    <div className="flex justify-center space-x-2 mt-8">
      <button
        className={`xs:text-sm text-xs px-2 py-1 xs:px-4 xs:py-2 ${
          currentPage === 1 ? "bg-gray-300" : "bg-maroon text-white"
        } rounded-md`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {pagesToShow.map((page) => (
        <button
          key={page}
          className={`xs:text-sm text-xs px-2 py-1 xs:px-4 xs:py-2 rounded-full ${
            currentPage === page ? "bg-maroon text-white" : "bg-gray-300"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {pagesToShow[pagesToShow.length - 1] < totalPages - 1 && (
        <span className="text-gray-500">...</span>
      )}

      {pagesToShow[pagesToShow.length - 1] < totalPages && (
        <button
          className="bg-gray-300 px-2 xs:px-4 py-1 xs:py-2 rounded-full text-xs xs:text-sm"
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      )}

      <button
        className={`xs:text-sm text-xs px-2 py-1 xs:px-4 xs:py-2 ${
          currentPage === totalPages ? "bg-gray-300" : "bg-maroon text-white"
        } rounded-md`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

const SermonList: React.FC = () => {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
  const [filteredFiles, setFilteredFiles] = useState<AudioFile[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    const fetchAudioFiles = async () => {
      try {
        const response = await fetch("/api/getAudioData");
        if (!response.ok) throw new Error("Network response was not ok");
        const data: AudioFile[] = await response.json();
        setAudioFiles(data);
        setFilteredFiles(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching audio files:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchAudioFiles();
  }, []);

  // Filter whenever query changes
  useEffect(() => {
    const lower = query.toLowerCase();
    const results = audioFiles.filter(
      (item) =>
        item.metadata.title.toLowerCase().includes(lower) ||
        item.metadata.series?.toLowerCase().includes(lower) ||
        item.metadata.preacher?.toLowerCase().includes(lower)
    );
    setFilteredFiles(results);
    setCurrentPage(1);
  }, [query, audioFiles]);

  const formatDescription = (description: string | null) => {
    if (!description) return null;
    const words = description.split(/\s+/);
    const truncated = words.slice(0, 29).join(" ");
    return (
      <span>
        {truncated}
        {words.length > 29 && "…"}
      </span>
    );
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedFiles = filteredFiles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="bg-smokeWhite">
        <Header
          header="Sermons"
          page="All Sermons"
        />
        <p className="p-4">Loading audio files...</p>
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
        <p className="p-4 text-red-600">
          Error loading audio files. Please check your connection.
        </p>
      </div>
    );
  }

  return (
    <main className="bg-smokeWhite pb-32 min-h-screen">
      <Header
        header="Sermons"
        page="All Sermons"
      />
      <SearchOverlay
        query={query}
        onQueryChange={setQuery}
      />

      <div className="pb-10 sermon-player">
        {filteredFiles.length === 0 ? (
          <p className="p-4">No audio files available.</p>
        ) : (
          <div className="mx-auto w-[96%] max-w-[1200px]">
            {paginatedFiles.map((file, index) => (
              <Link
                key={index}
                className="flex max-sm:flex-col bg-white mt-10"
                href={`/sermons/${encodeURIComponent(file.fileName)}`}
              >
                <div className="max-sm:self-center max-sm:w-full sm:w-[500px] max-sm:h-[300px] sm:h-[350px]">
                  <Image
                    src={file.metadata.art}
                    alt={file.metadata.title}
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
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="mt-5 mb-5"
                  >
                    <AudioPlayer
                      audioSrc={file.url}
                      file={{
                        fileName: "random.mp3", // or however you want to label it
                        url: file.url,
                        metadata: {
                          art: file.metadata?.art || "/default-art.jpg",
                          title: file.metadata?.title || "Untitled",
                          date: new Date().toISOString(), // or null if not available
                          desc: null, // add real desc if you have it
                          series: null,
                          preacher:
                            file.metadata?.preacher || "Unknown Preacher",
                        },
                      }}
                    />
                  </div>

                  <span className="block pt-5 max-sm:pb-3 border-t font-medium text-maroon text-sm">
                    <span className="text-lightGrey">Preacher :</span>{" "}
                    {file.metadata.preacher || "Pastor Collins Throne"}
                  </span>
                </div>
              </Link>
            ))}

            <Pagination
              total={filteredFiles.length}
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
