import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { devotionals } from "@/constants/devotionalConstant";
import Link from "next/link";

const DevotionalsList = () => {
  return (
    <main className="bg-smokeWhite">
      <header>
        <Header
          header="Devotionals"
          page="All Devotionals"
        />
      </header>
      <div className=" mx-auto xs:w-[94%] w-[96%] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 grid-flow-row gap-8 ">
        {devotionals.map((devotional) => (
          <Link
            href={`/devotionals/${devotional.id}`}
            key={devotional.id}
            className=" hover:bg-white p-1"
          >
            <div className="max-xs:flex justify-center ">
              <Image
                src={devotional.imgSrc}
                alt={""}
                width={2000}
                height={2000}
                className="w-full object-cover"
              />
            </div>

            <h3 className="sm:text-4xl text-3xl font-sofia-bold my-1 px-1 ">
              {devotional.title}
            </h3>
            <p className=" text-sm text-midGrey my-1 px-1">{devotional.date}</p>
            <h4 className=" text-sm md:text-base text-lightGrey font-medium px-1">
              {devotional.desc}
            </h4>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default DevotionalsList;
