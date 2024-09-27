import React from "react";
import { images } from "./constants";
import left from "../public/left.svg";
import right from "../public/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div>
      {images.map((item, idx) => (
        <div
          key={idx}
          className={`${idx === activeImage ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left" : "hidden"}`}
        >
          <motion.div className="text-center text-white font-Kumbh">
            <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 mid:w-[45%] lg:w-[60%] md:w-[70%] w-[90%] ">
              <p>{item.title}</p>

              <h3 className=" mx-auto mb-5 mt-3 md:mt-5  ">{item.desc}</h3>

              <button className=" text-xs bg-orange rounded-none px-6 sm:px-12 sm:py-5 py-4 font-extrabold tracking-[2px]">
                READ NOW
              </button>
            </div>
          </motion.div>

          {/* BUTTONS */}
          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image
                src={left}
                alt=""
              />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image
                src={right}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
