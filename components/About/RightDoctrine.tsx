import Image from "next/image";
import React from "react";

const RightDoctrine = ({
  title,
  paragraph,
  secondParagraph,
  imgSrc,
}: doctrineProps) => {
  return (
    <div className=" md:grid grid-cols-2 lg:max-w-[1110px] max-w-[1000px] gap-10 mx-auto px-5 py-2 place-items-center">
      <article className="order-2">
        <h1 className="mb-2 md:mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-darkmaroon font-sofia-bold tracking-[-2px]">
          {title}
        </h1>

        <div className="">
          <p className="max-sm:text-[14px] text-lightGrey font-semibold tracking-tight leading-none">
            {paragraph}
          </p>
          <br />
          <p className="max-sm:text-[14px] text-lightGrey font-semibold tracking-tight leading-none">
            {secondParagraph}
          </p>
        </div>
      </article>

      <div className="order-1">
        <Image
          src={imgSrc}
          alt=""
          height={1400}
          width={1400}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default RightDoctrine;
