"use client";
import { miniCarouselImages } from "../../constants/homeCarousel";

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

export function csfCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
        }),
      ]}
      className=" w-[98%] mx-auto"
    >
      <CarouselContent>
        {miniCarouselImages.map((item) => (
          <CarouselItem
            key={item.id}
            className="xs:basis-1/2 w-full max-h-[400px] overflow-hidden"
          >
            <div className=" h-full">
              <Image
                src={item.src}
                alt=""
                className=" h-full object-cover"
                width={1800}
                height={1200}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation buttons */}
      <div>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 text-white" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 text-white" />
      </div>
    </Carousel>
  );
}

export default csfCarousel;
