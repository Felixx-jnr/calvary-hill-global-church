import Image from "next/image";
import React from "react";

const LeftDoctrine = ({
  title,
  paragraph,
  secondParagraph,
  imgSrc,
}: doctrineProps) => {
  return (
    <div className=" py-10 md:grid grid-cols-2 lg:max-w-[1110px] max-w-[1000px] gap-10 mx-auto px-5 place-items-center">
      <article className="">
        <h1 className=" mb-2 md:mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-darkmaroon font-sofia-bold tracking-[-2px]">
          {title}
        </h1>

        <div className="">
          <p className=" max-sm:text-[14px] text-lightGrey tracking-tight leading-tight font-sans">
            {paragraph}
          </p>
          <br />
          <p className=" max-sm:text-[14px] text-lightGrey tracking-tight leading-tight font-sans">
            {secondParagraph}
          </p>
        </div>
      </article>

      <div>
        <Image
          src={imgSrc}
          alt=""
          height={1400}
          width={1400}
          className="w-full "
        />
      </div>
    </div>
  );
};

export default LeftDoctrine;
