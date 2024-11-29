"use client";
import { useState, ChangeEvent, MouseEvent } from "react";
import axios from "axios";

// Define types for metadata and states
interface Metadata {
  title: string;
  preacher: string;
  date: string;
  series: string;
  desc: string;
}

const AudioUploadWithMetadata = () => {
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState<Metadata>({
    title: "",
    preacher: "",
    date: "",
    series: "",
    desc: "",
  });
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleMetadataChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMetadata((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpload = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a file.");
      return;
    }

    const { title, preacher, date, series, desc } = metadata;
    if (!title || !preacher || !date || !series || !desc) {
      setError("Please fill in all metadata fields.");
      return;
    }

    const formData = new FormData();
    formData.append("audioFile", file); // Make sure the name here is 'audioFile'
    formData.append("title", title);
    formData.append("preacher", preacher);
    formData.append("date", date);
    formData.append("series", series);
    formData.append("desc", desc);

    try {
      setError("");
      setMessage("Uploading...");
      const response = await axios.post("/api/uploadAudio", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Upload successful!");
    } catch (err) {
      console.error(err);
      setError("Upload failed.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Upload Audio with Metadata
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-4"
      >
        <div>
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={metadata.title}
            onChange={handleMetadataChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            name="preacher"
            placeholder="Preacher"
            value={metadata.preacher}
            onChange={handleMetadataChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            value={metadata.date}
            onChange={handleMetadataChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            name="series"
            placeholder="Series"
            value={metadata.series}
            onChange={handleMetadataChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <textarea
            name="desc"
            placeholder="Description"
            value={metadata.desc}
            onChange={handleMetadataChange}
            className="w-full p-2 border border-gray-300 rounded-md h-32 resize-none"
          ></textarea>
        </div>
        <div>
          <button
            onClick={handleUpload}
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
          >
            Upload
          </button>
        </div>
      </form>

      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </div>
  );
};

export default AudioUploadWithMetadata;
