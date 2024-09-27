import Image from "next/image";
import React from "react";

const Slides = ({ title, desc, imgSrc }: slidesProps) => {
  return (
    <div className="relative text-center font-Kumbh text-white">
      <div className="w-full h-[656px]">
        <Image
          src={imgSrc}
          alt="Calvary Hill Church"
          fill
          className=" object-cover"
        />
      </div>

      <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 mid:w-[45%] lg:w-[60%] md:w-[70%] w-[90%] ">
        <p>{title}</p>

        <h3 className=" mx-auto mb-5 mt-3 md:mt-5  ">{desc}</h3>

        <button className=" text-xs bg-orange rounded-none px-6 sm:px-12 sm:py-5 py-`4 font-extrabold tracking-[2px]">
          READ NOW
        </button>
      </div>
    </div>
  );
};

export default Slides;
