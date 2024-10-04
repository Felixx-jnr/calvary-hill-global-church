"use client";

import { useState, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Masonry from "react-masonry-css";

const GalleryLayout: React.FC<GalleryLayoutProps> = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Open image in fullscreen
  const openImage = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  // Close fullscreen modal
  const closeImage = () => {
    setSelectedImage(null);
  };

  // Show next image
  const showNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Show previous image
  const showPrevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Handle keyboard events
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      showNextImage();
    } else if (e.key === "ArrowLeft") {
      showPrevImage();
    } else if (e.key === "Escape") {
      closeImage();
    }
  };

  const breakpointColumnsObj = {
    default: 3, // 3 columns by default
    1100: 2, // 2 columns at screen sizes below 1100px
    700: 1, // 1 column at screen sizes below 700px
  };
  return (
    <div>
      <div>
        <div className="p-4">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto"
            columnClassName="masonry-grid_column"
          >
            {images.length > 0 ? (
              images.map((image, index) => (
                <motion.div
                  key={index}
                  className="m-2 cursor-pointer overflow-hidden"
                  onClick={() => openImage(index)}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))
            ) : (
              <p>No images available</p>
            )}
          </Masonry>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative w-3/4 h-3/4">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-contain"
              />
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-2xl p-4"
                onClick={showPrevImage}
                aria-label="Show previous image"
              >
                <FaArrowLeft />
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-2xl p-4"
                onClick={showNextImage}
                aria-label="Show next image"
              >
                <FaArrowRight />
              </button>
            </div>
            <button
              className="absolute top-4 right-4 text-white text-3xl p-4"
              onClick={closeImage}
              aria-label="Close image"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryLayout;
