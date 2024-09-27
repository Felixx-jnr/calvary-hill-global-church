"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "../components/constants";
import Description from "./Desccription";
import { motion } from "framer-motion";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 10000); // Change every 10 seconds
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <main className="">
      <div className="relative w-full h-[656px]">
        {images.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: idx === activeImage ? 1 : 0,
            }}
            transition={{
              duration: 1, // Adjust for smoothness
              ease: "easeInOut",
            }}
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <motion.img
              key={activeImage}
              src={item.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }} // Start at normal scale
              animate={idx === activeImage ? { scale: 1.1 } : {}} // Only scale the active image
              transition={{
                duration: 10,
              }}
            ></motion.img>
          </motion.div>
        ))}
      </div>

      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
    </main>
  );
};

export default Slider;
