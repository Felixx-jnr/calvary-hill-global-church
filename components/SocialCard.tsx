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
      //style={{ backgroundColor: cardColor }}
      className="flex justify-start items-center gap-4 bg-white/10 hover:opacity-80 backdrop-blur-md px-4 py-4 max-md:py-6 border-2 border-white rounded-2xl w-[100%] md:w-[100%] lg:w-[450px]"
    >
      <div>
        <Icon
          //style={{ color: iconColor }}
          className="text-white text-5xl"
        />
      </div>

      <div className="flex flex-col justify-start items-start">
        <h2
          //style={{ color: titleColor }}
          className="font-semibold text-white text-3xl"
        >
          {title}
        </h2>
        <p
          //style={{ color: descColor }}
          className="items-start text-white text-start leading-tight"
        >
          {desc}
        </p>
      </div>
      <div className="place-self-end ml-auto">
        {" "}
        <IoArrowForwardCircleOutline
          //style={{ color: titleColor }}
          className="text-white text-3xl"
        />
      </div>
    </Link>
  );
};

export default SocialCard;
