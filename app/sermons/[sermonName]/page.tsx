"use client";
// app/sermons/[sermonName]/page.tsx
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AudioPlayer from "@/components/AudioPlayer";
import Image from "next/image";

const SermonDetails = () => {
  const { sermonName } = useParams(); // Use useParams to get the route parameter
  const [sermon, setSermon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!sermonName) return;

    const fetchSermonDetails = async () => {
      try {
        const response = await fetch(
          `/api/getAudioDataByKey?key=${encodeURIComponent(sermonName)}`
        );
        if (!response.ok) throw new Error("Failed to fetch sermon details");
        const data = await response.json();
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

  if (loading) return <p>Loading sermon details...</p>;
  if (error || !sermon) return <p>Error loading sermon details.</p>;

  return (
    <div className="sermon-details">
      <h1 className="text-3xl font-bold">{sermon.metadata.title}</h1>
      <p className="text-sm text-gray-600">{sermon.metadata.date}</p>
      <Image
        src={sermon.metadata.art}
        alt={sermon.metadata.title}
        width={800}
        height={600}
      />
      <p>{sermon.metadata.desc}</p>
      <AudioPlayer audioSrc={sermon.url} />
    </div>
  );
};

export default SermonDetails;
