import Link from "next/link";
import React from "react";
import { testimonies } from "@/constants/testimonyConstants";

const TestimonySlider = () => {
  const formatTitle = (description: string | null): JSX.Element | null => {
    if (!description) return null;

    const words = description.split(/\s+/);
    const truncatedDescription = words.slice(0, 4).join(" ");

    return (
      <span className="mb-">
        {truncatedDescription}
        {words.length > 4 && "..."}
      </span>
    );
  };

  const formatContent = (description: string | null): JSX.Element | null => {
    if (!description) return null;

    const words = description.split(/\s+/);
    const truncatedDescription = words.slice(0, 29).join(" ");

    return (
      <span className="mb-">
        {truncatedDescription}
        {words.length > 29 && "..."}
      </span>
    );
  };

  return (
    <div className="mt-20 ">
      <div className="mx-5">
        <h2 className="lg:text-5xl text-4xl font-sofia-bold text-darkmaroon">
          Testimonies
        </h2>
        <p className=" text-lightGrey font-normal text-sm md:text-lg leading-tight">
          Let the redeemed of the LORD say so, whom he hath redeemed from the
          hand of the enemy - Psalms 107 v 2
        </p>
      </div>

      <div className="reviews relative flex mt-2 mb-14 ">
        <div className="reviews-slide flex py-4">
          {testimonies.map((slide, index) => (
            <Link
              href={`testimonies/${index}`}
              key={slide.id}
              className=" card bg-darkmaroon hover:bg-maroon mx-2 px-2 py-4 w-60 flex flex-col items-center justify-center"
            >
              <p className=" text-white">{slide.id}</p>
              <p className="mb-1 italic text-smokeWhite font-semibold">
                {formatTitle(slide.title)}
              </p>
              <p className=" text-smokeWhite font-sofia-normal ">
                {formatContent(slide.content)}
              </p>
            </Link>
          ))}
        </div>
        <div className="reviews-slide flex py-4">
          {testimonies.map((slide, index) => (
            <Link
              href={`testimonies/${index}`}
              key={slide.id}
              className=" card bg-darkmaroon hover:bg-maroon mx-2 px-2 py-4 w-60 flex flex-col items-center justify-center"
            >
              <p className=" text-white">{slide.id}</p>
              <p className="mb-1 italic text-smokeWhite font-semibold">
                {formatTitle(slide.title)}
              </p>
              <p className=" text-smokeWhite font-sofia-normal ">
                {formatContent(slide.content)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonySlider;
