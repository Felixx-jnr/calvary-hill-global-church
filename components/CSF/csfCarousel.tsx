"use client";

import { csfCarouselImages } from "@/constants/csfConstants";

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
          delay: 600,
          stopOnInteraction: true,
        }),
      ]}
      className=" mx-auto"
    >
      <CarouselContent>
        {csfCarouselImages.map((item) => (
          <CarouselItem
            key={item}
            className="  sm:basis-1/2 h-[400px] "
          >
            <div className=" ">
              <Image
                src={item}
                alt=""
                className=" px-2 object-cover"
                fill
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
