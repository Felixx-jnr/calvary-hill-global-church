"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "../components/constants";
import Description from "./Desccription";
import { motion } from "framer-motion";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <main>
      <div className="relative">
        {images.map((item, idx) => (
          <div
            key={idx}
            className={`${idx === activeImage ? "w-full h-[656px]" : "hidden"} mb-8`}
          >
            <motion.img
              src={item.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover"
              animate={{ scale: [1, 1.1] }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
            ></motion.img>
          </div>
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
