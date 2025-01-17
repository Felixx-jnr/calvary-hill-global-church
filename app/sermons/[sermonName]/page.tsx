"use client";
// app/sermons/[sermonName]/page.tsx
import { Key, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AudioPlayer from "@/components/AudioPlayer";
import Image from "next/image";
import Header from "@/components/Header";
import { IoMdCloudDownload } from "react-icons/io";

const SermonDetails = () => {
  const { sermonName } = useParams() as { sermonName: string };
  const [sermon, setSermon] = useState<Sermon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Enhanced function to format description text
  const formatDescription = (description: string) => {
    if (!description) return null;

    // Step 1: Add space after the first three periods and ensure next sentence is a new paragraph
    description = description.replace(/(\.\s*){3}/, "$&\n"); // Adds a newline after the first 3 periods

    // Step 2: Split the description into paragraphs based on newlines
    const paragraphs = description
      .split(/\n+/)
      .map((section: string, index: Key | null | undefined) => {
        // Step 3: Format each paragraph by splitting into sentences and handling *...* sentences
        const formattedSentences = section
          .split(/(?<!\*)\.\s*/g) // Split by periods, ignoring sentences between *
          .map((sentence: string, i: Key | null | undefined) => {
            if (sentence.includes("*")) {
              // Split sentences wrapped in asterisks to be handled as separate paragraphs
              return sentence.split("*").map((subSentence: string, j) => (
                <p
                  key={`starred-${index}-${i}-${j}`}
                  className="paragraph mb-6"
                >
                  {subSentence.trim()}
                </p>
              ));
            }
            return (
              <span
                key={i}
                className="sentence"
              >
                {sentence.trim() + ". "}
              </span>
            );
          });

        // Return each sentence wrapped in a paragraph with proper spacing
        return (
          <div
            key={index}
            className="paragraph"
          >
            {formattedSentences}
          </div>
        );
      });

    return <>{paragraphs}</>;
  };

  useEffect(() => {
    if (!sermonName) return;

    const fetchSermonDetails = async () => {
      try {
        const response = await fetch(
          `/api/getAudioDataByKey?key=${encodeURIComponent(sermonName)}`
        );
        if (!response.ok) throw new Error("Failed to fetch sermon details");
        const data: Sermon = await response.json();
        setSermon(data);
      } catch (error) {
        console.error("Error fetching sermon details:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSermonDetails();
  }, [sermonName]);

  const handleDownload = async () => {
    if (!sermon) return;

    try {
      const response = await fetch(sermon.url, {
        method: "GET",
        headers: {
          "Content-Type": "audio/mpeg",
        },
      });
      if (!response.ok) throw new Error("Failed to download file");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${sermon.metadata.title}.mp3`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the sermon:", error);
    }
  };

  if (loading) return <p>Loading sermon details...</p>;
  if (error || !sermon) return <p>Error loading sermon details.</p>;

  return (
    <main className="bg-smokeWhite">
      <header>
        <Header header={sermon.metadata.title} />
      </header>

      <div className="flex flex-col justify-center items-center px-2">
        <Image
          src={sermon.metadata.art}
          alt={sermon.metadata.title}
          width={370}
          height={473}
        />

        <p className="text-sm text-gray-600 my-2 font-medium">
          {sermon.metadata.date}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sofia-bold text-darkmaroon text-center">
          {sermon.metadata.title}
        </h1>
        <span className=" my-4 block text-sm font-medium text-maroon">
          <span className="text-lightGrey">Preacher :</span> Pastor Collins
          Throne
        </span>

        <div className="flex items-center max-w-[900px] w-[90%] bg-white my-3">
          <div className="px-2 w-full">
            <AudioPlayer audioSrc={sermon.url} />
          </div>

          <button
            onClick={handleDownload}
            className=" p-1 xxs:p-4 bg-darkmaroon h-ful"
          >
            <IoMdCloudDownload className=" text-white text-2xl " />
          </button>
        </div>

        <div className=" max-w-[1000px] w-[90%] text-justify my-2 text-lightGrey text-sm md:text-base font-medium tracking-wide leading-snug font-serif">
          {sermon.metadata.desc
            ? formatDescription(sermon.metadata.desc)
            : "No description available."}
        </div>
      </div>
    </main>
  );
};

export default SermonDetails;
