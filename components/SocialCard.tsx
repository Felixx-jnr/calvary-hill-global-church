import React from "react";
import Link from "next/link";

import { IoArrowForwardCircleOutline } from "react-icons/io5";

const SocialCard = ({
  title,
  desc,
  link,
  icon: Icon,
  iconColor,
  cardColor,
  titleColor,
  descColor,
}: SocialProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      style={{ backgroundColor: cardColor }}
      className="flex justify-start items-center gap-4 hover:opacity-80 px-4 py-4 max-md:py-6 rounded-2xl w-[100%] md:w-[100%] lg:w-[450px]"
    >
      <div>
        <Icon
          style={{ color: iconColor }}
          className=" text-5xl ${iconColor}"
        />
      </div>

      <div className="flex flex-col justify-start items-start">
        <h2
          style={{ color: titleColor }}
          className="font-bold text-3xl"
        >
          {title}
        </h2>
        <p
          style={{ color: descColor }}
          className="items-start text-start ${descColor} font-sofia-semibold leading-tight"
        >
          {desc}
        </p>
      </div>
      <div className="place-self-end ml-auto">
        {" "}
        <IoArrowForwardCircleOutline
          style={{ color: titleColor }}
          className="text-3xl"
        />
      </div>
    </Link>
  );
};

export default SocialCard;
