import GalleryLayout from "@/components/GalleryLayout";
import Header from "@/components/Header";
import { galleryImages } from "@/constants/galleryImages";
import React from "react";

const Gallery = () => {
  return (
    <main className="bg-smokeWhite">
      <header>
        <Header header="Gallery" />
      </header>

      <GalleryLayout images={galleryImages} />
    </main>
  );
};

export default Gallery;
