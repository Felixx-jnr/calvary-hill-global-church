"use client";
import { homeImages } from "../../constants/homeCarousel";

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

export function MiniCarousel() {
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
      className="w-[98%] mx-auto"
    >
      <CarouselContent>
        {homeImages.map((item) => (
          <CarouselItem
            key={item.id}
            className="md:basis-1/2 lg:basis-1/3 min-h-96 h-96 overflow-hidden"
          >
            <div className=" w-full h-full ">
              <Image
                src={item.src}
                alt=""
                className="h-full w-full object-cover"
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

export default MiniCarousel;
