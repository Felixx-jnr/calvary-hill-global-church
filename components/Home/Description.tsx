import React, { useEffect, useState } from "react";
import { homeImages } from "../../constants/homeCarousel";
import left from "../../public/left.svg";
import right from "../../public/right.svg";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

const Description = ({
  activeImage,
  clickNext,
  clickPrev,
}: descriptionProps) => {
  const [showContent, setShowContent] = useState(true);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5, // Initial 1s delay
      },
    },
    fadeOut: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.4, // Initial 1s delay
        easeInOut,
      },
    },
    fadeOut: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1, // Initial 1s delay
        easeInOut,
      },
    },
    fadeOut: {
      opacity: 0,
      transition: { duration: 10 },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.2, // Initial 1s delay
        easeInOut,
      },
    },
    fadeOut: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  useEffect(() => {
    setShowContent(true); // Reset to show content on slide change
    const fadeOutTimer = setTimeout(() => {
      setShowContent(false);
    }, 9000); // Fade out after 9 seconds

    return () => clearTimeout(fadeOutTimer);
  }, [activeImage]);

  return (
    <div>
      {homeImages.map((item, idx) => (
        <div
          key={idx}
          className={`${idx === activeImage ? "home block w-full h-full md:px-20 px-10 text-left" : "hidden"}`}
        >
          <motion.div
            key={activeImage}
            variants={containerVariants}
            initial="hidden"
            animate={showContent ? "visible" : "fadeOut"}
            className=" text-center text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 mid:w-[45%] lg:w-[60%] md:w-[70%] w-[90%] "
          >
            <motion.p
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              className=" font-sofia-bold "
            >
              {item.title}
            </motion.p>

            <motion.h3
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              className=" mx-auto mb-5 mt-3 md:mt-5 font-sofia-bold "
            >
              {item.desc}
            </motion.h3>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className=" text-xs bg-orange rounded-none px-6 sm:px-12 sm:py-5 py-4 font-sofia-bold tracking-[2px] hover:bg-lightGrey"
            >
              READ NOW
            </motion.button>
          </motion.div>

          {/* BUTTONS */}
          <div className="max-sm:hidden">
            <div
              className=" absolute top-1/2 -translate-y-1/2 left-1 translate-x-1/2 cursor-pointer"
              onClick={clickPrev}
            >
              <Image
                src={left}
                alt=""
              />
            </div>

            <div
              className=" absolute top-1/2 -translate-y-1/2 right-1 -translate-x-1/2 cursor-pointer"
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
