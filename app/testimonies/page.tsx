import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { testimonies } from "@/constants/testimonyConstants";
import Link from "next/link";

const TestimoniesList = () => {
  return (
    <main className="bg-smokeWhite">
      <header>
        <Header
          header="Testimonies"
          page="All Testimonies"
        />
      </header>
      <div className=" mx-auto xs:w-[94%] w-[96%] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 grid-flow-row gap-8 ">
        {testimonies.map((testimony) => (
          <Link
            href={`/testimonies/${testimony.id}`}
            key={testimony.id}
            className=" hover:bg-white p-1"
          >
            <div className="max-xs:flex justify-center ">
              <Image
                src={"/footer-bg-judaism.jpg"}
                alt={""}
                width={2000}
                height={2000}
                className="w-full object-cover"
              />
            </div>

            <h3 className="sm:text-4xl text-3xl font-sofia-bold my-1 px-1 ">
              {testimony.title}
            </h3>

            <h4 className=" text-sm md:text-base text-lightGrey font-medium px-1">
              {testimony.content}
            </h4>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default TestimoniesList;
