"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { aboutOneImages } from "@/constants/aboutConstant";

export function DunamisCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
          stopOnInteraction: true,
        }),
      ]}
      className=" mx-auto"
    >
      <CarouselContent>
        {aboutOneImages.map((item) => (
          <CarouselItem
            key={item}
            className=" h-full  "
          >
            <div className="  overflow-hidden w-full">
              <Image
                src={item}
                alt=""
                className=" w-full object-cover"
                width={1800}
                height={1200}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className=" ">
        <CarouselPrevious className=" absolute left-2 w-10 h-10 hover:bg-darkGrey/20 outline-transparent text-white" />
        <CarouselNext className=" absolute text-white right-2 w-10 h-10 hover:bg-darkGrey/20" />
      </div>
    </Carousel>
  );
}

export default DunamisCarousel;
