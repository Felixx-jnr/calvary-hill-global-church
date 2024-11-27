import Header from "@/components/Header";
import React from "react";
import { testimonies } from "@/constants/testimonyConstants";
import Link from "next/link";

const TestimoniesList = () => {
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
    <main className="bg-smokeWhite">
      <header>
        <Header
          header="Testimonies"
          page="All Testimonies"
        />
      </header>

      <div className=" mx-auto xs:w-[94%] w-[96%] grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 pb-5">
        {testimonies.map((testimony) => (
          <Link
            href={`/testimonies/${testimony.id}`}
            key={testimony.id}
            className=" hover:bg-white p-1"
          >
            <div className="max-xs:flex justify-center "></div>

            <h3 className="sm:text-4xl text-3xl font-sofia-bold my-1 px-1 ">
              {formatTitle(testimony.title)}
            </h3>

            <h4 className=" text-sm md:text-base text-lightGrey text-justify px-1">
              {formatContent(testimony.content)}
            </h4>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default TestimoniesList;
