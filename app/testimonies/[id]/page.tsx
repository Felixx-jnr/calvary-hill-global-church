"use client";

import React from "react";
import { testimonies } from "@/constants/testimonyConstants"; // Import your testimonies
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import Image from "next/image";
import Link from "next/link";

const TestimonyDetails = () => {
  const { id } = useParams(); // Get the dynamic testimonyId from the URL

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
    <main>
      <div className="relative">
        <div className=" w-full h-[544px] overflow-hidden ">
          <Image
            src={testimony.imgSrc}
            alt={testimony.title}
            fill
            className=" w-full object-cover"
          />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center w-full">
          <button>
            <Link
              className=" text-[11px] font-sofia-bold bg-maroon px-5 py-2 text-white tracking-widest hover:bg-white hover:text-darkmaroon"
              href="/testimonies"
            >
              testimonies
            </Link>
          </button>

          <h1 className=" font-sofia-bold text-5xl sm:text-[57px] font-bold tracking-tight text-white my-10">
            {testimony.title}
          </h1>

          <p className=" text-sm text-darkGrey">{testimony.date}</p>
        </div>
      </div>

      <div className=" text-lightGrey w-[95%] xs:w-[90%]  lg:w-[75%]  mx-auto mt-10 ">
        <h1 className="text-3xl font-sofia-bold mb-5">{testimony.title}</h1>
        <article className="font-medium text-justify">
          {testimony.content}
        </article>
      </div>
    </main>
  );
};

export default TestimonyDetails;