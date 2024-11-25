"use client";

import React from "react";
import { testimonies } from "@/constants/testimonyConstants"; // Import your testimonies
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import Image from "next/image";
import Link from "next/link";

const TestimonyDetails = () => {
  const { id } = useParams() as { id: string }; // Get the dynamic testimonyId from the URL

  // Handle the case where `id` can be a string or string[]
  const testimonyId = parseInt(id as string, 10);

  // Find the testimony by its numerical id
  const testimony = testimonies.find(
    (testimony) => testimony.id === testimonyId
  );

  // Handle loading state or invalid testimonyId
  if (!testimony) {
    return <p>testimony not found or Loading...</p>;
  }

  return (
    <div className="relative text-lightGrey w-[95%] xs:w-[90%]  lg:w-[75%]  mx-auto my-7">
      <h1 className="text-4xl sm:text-5xl font-sofia-bold mb-5">
        {testimony.title}
      </h1>
      <article className=" text-2xl font-light text-justify">
        {testimony.content}
      </article>
    </div>
  );
};

export default TestimonyDetails;
