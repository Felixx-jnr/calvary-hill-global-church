"use client";

import { csfCarouselImages, csfImages } from "@/constants/csfConstants";

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

export function CsfCarousel() {
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
        {csfCarouselImages.map((item) => (
          <CarouselItem
            key={item}
            className=" basis-1/2 h-[400px] "
          >
            <div className=" h-[400px]  ">
              <Image
                src={item}
                alt=""
                className=" h-full w-full object-cover"
                width={1800}
                height={1200}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation buttons */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CsfCarousel;
