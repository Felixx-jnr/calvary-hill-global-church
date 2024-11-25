"use client";

import React from "react";
import { devotionals } from "@/constants/devotionalConstant"; // Import your devotionals
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import Image from "next/image";
import Link from "next/link";

const DevotionalDetails = () => {
  const { id } = useParams() as { id: string }; // Get the dynamic devotionalId from the URL

  // Handle the case where `id` can be a string or string[]
  const devotionalId = parseInt(id as string, 10);

  // Find the devotional by its numerical id
  const devotional = devotionals.find(
    (devotional) => devotional.id === devotionalId
  );

  // Handle loading state or invalid devotionalId
  if (!devotional) {
    return <p>devotional not found or Loading...</p>;
  }

  return (
    <main>
      <div className="relative">
        <div className=" w-full h-[544px] overflow-hidden ">
          <Image
            src={devotional.imgSrc}
            alt={devotional.title}
            fill
            className=" w-full object-cover"
          />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center w-full">
          <button>
            <Link
              className=" text-[11px] font-sofia-bold bg-maroon px-5 py-2 text-white tracking-widest hover:bg-white hover:text-darkmaroon"
              href="/devotionals"
            >
              DEVOTIONALS
            </Link>
          </button>

          <h1 className=" font-sofia-bold text-5xl sm:text-[57px] font-bold tracking-tight text-white my-10">
            {devotional.title}
          </h1>

          <p className=" text-sm text-darkGrey">{devotional.date}</p>
        </div>
      </div>

      <div className=" text-lightGrey w-[95%] xs:w-[90%]  lg:w-[75%]  mx-auto my-10 ">
        <h1 className="text-3xl font-sofia-bold mb-5">{devotional.title}</h1>
        <article className="font-medium text-justify">
          {devotional.content}
        </article>
      </div>
    </main>
  );
};

export default DevotionalDetails;
