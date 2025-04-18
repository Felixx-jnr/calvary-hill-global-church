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
    <div className="mt-20">
      <div className="mx-5">
        {/* <h2 className="font-sofia-bold text-darkmaroon text-4xl lg:text-5xl">
          Testimonies
        </h2> */}
      </div>

      <div className="relative flex mt-2 mb-14 reviews">
        <div className="flex py-4 reviews-slide">
          {testimonies.map((slide, index) => (
            <Link
              href={`testimonies/${index}`}
              key={slide.id}
              className="flex flex-col justify-center items-center bg-darkmaroon hover:bg-maroon mx-2 px-2 py-4 w-64 card"
            >
              <p className="mb-1 font-semibold text-smokeWhite text-xl italic">
                {formatTitle(slide.title)}
              </p>
              <p className="font-sofia-normal text-smokeWhite">
                {formatContent(slide.content)}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex py-4 reviews-slide">
          {testimonies.map((slide, index) => (
            <Link
              href={`testimonies/${index}`}
              key={slide.id}
              className="flex flex-col justify-center items-center bg-darkmaroon hover:bg-maroon mx-2 px-2 py-4 w-64 card"
            >
              <p className="mb-1 font-semibold text-smokeWhite text-xl italic">
                {formatTitle(slide.title)}
              </p>
              <p className="font-sofia-normal text-smokeWhite">
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
