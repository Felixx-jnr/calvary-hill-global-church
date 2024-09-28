"use client";
import { images } from "../components/constants";

import * as React from "react";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
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
          delay: 5000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem
            key={index}
            className=" lg:basis-1/3"
          >
            <div className="p-1">
              <img
                src="/photo_2024-06-18_10-51-12.jpg"
                alt=""
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default MiniCarousel;
