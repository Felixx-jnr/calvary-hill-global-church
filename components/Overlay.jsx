"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const sliderImages = ["/dum26.jpeg", "/dum26.jpeg"];

const Overlay = () => {
  // Overlay & Tag state
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOverlayClick = () => {
    window.open("https://forms.gle/H8EdkRUK2S9AV5wQA", "_blank");
  };

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);
  const autoOpenTimerRef = useRef(null);

  // Auto open overlay after immediately
  useEffect(() => {
    autoOpenTimerRef.current = setTimeout(() => setIsOverlayOpen(true), 0);

    return () => {
      if (autoOpenTimerRef.current) clearTimeout(autoOpenTimerRef.current);
    };
  }, []);

  // Auto change slides every 3 seconds _only_ while overlay is open
  useEffect(() => {
    if (!isOverlayOpen) {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
        slideIntervalRef.current = null;
      }
      return;
    }

    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
        slideIntervalRef.current = null;
      }
    };
  }, [isOverlayOpen]);

  // Close overlay on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOverlayOpen(false);
    };
    if (isOverlayOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOverlayOpen]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    // restart autoplay interval so user has time to view the selected slide
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 3000);
    }
  };

  return (
    <div onClick={handleOverlayClick}>
      {isOverlayOpen && (
        <div className="z-[1000] fixed inset-0 flex justify-center items-center">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-[url('/dum26.jpeg')] bg-black opacity-70"
            onClick={() => setIsOverlayOpen(false)}
          />

          {/* Popup content */}
          <div className="z-10 relative sm:flex bg-white mx-2 p-2 rounded-md w-full max-w-[745px] sm:h-[409px] overflow-hidden">
            {/* Overlay X (only closes overlay) */}
            <button
              aria-label="Close discount popup"
              onClick={(e) => {
                e.stopPropagation();
                setIsOverlayOpen(false);
              }}
              className="top-6 right-6 absolute flex justify-center items-center rounded-full w-6 h-6 cursor-pointer"
            >
              ✕
            </button>

            {/* Left: Image Slider */}
            <div className="relative flex flex-col justify-center items-center bg-gray-100 min-w-[290px] max-sm:h-[200px]">
              <div className="relative p-2 rounded-md w-full h-full overflow-hidden">
                <Image
                  src={sliderImages[currentSlide]}
                  alt={`slide-${currentSlide}`}
                  fill
                  className="object-center object-cover"
                />
              </div>

              {/* Dots */}
              <div
                className="bottom-2 left-1/2 absolute flex gap-2 mt-4 -translate-x-1/2"
                role="tablist"
                aria-label="slider dots"
              >
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => handleDotClick(index)}
                    className={`transition-all duration-200 focus:outline-none ${
                      index === currentSlide
                        ? "bg-filgreen w-5 h-1 rounded-md"
                        : "bg-[#fafafa] w-[10px] h-1 rounded-md"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Description text */}
            <div className="flex flex-col justify-center p-3 w-full text-center">
              <h2 className="mb-3 font-oswald font-bold text-[30px] leading-none">
                DUNAMIS CAMP FIRE 2026
              </h2>
              <p className="mb-3 text-xs italic">{"THE OVERTURN"}</p>

              <div className="">
                <p className="mb-3 font-bold text-sm">
                  18th - 20th December, 2026
                </p>

                <div className="">
                  <p className="mb-3 text-sm uppercase leading-none">
                    Home Owner&apos;s Hall RCCG REDEMPTION CAMP (REDEMPTION
                    CITY) Km 46, Lagos-Ibadan Expressway, Mowe, Ogun State,
                    Nigeria
                  </p>

                  <p className="my-3 text-sm uppercase">
                    Free Transportation from Lagos and Free Accommodation
                  </p>

                  <div className="mb-7">
                    <p className="text-xs">
                      For enquries:{" "}
                      <span className="">
                        <Link
                          className="font-semibold underline"
                          href="tel:+2349011620048"
                        >
                          +234 901 162 0048
                        </Link>
                        ,{" "}
                        <Link
                          className="font-semibold underline"
                          href="tel:+2348148171728"
                        >
                          +234 814 817 1728
                        </Link>
                      </span>
                    </p>
                    <Link
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOverlayOpen(false);
                      }}
                      className="text-[#bc0f01] text-xs underline"
                      href="/about"
                    >
                      Read More
                    </Link>
                  </div>

                  <div className="">
                    <Link
                      href="https://forms.gle/H8EdkRUK2S9AV5wQA"
                      onClick={() => setIsOverlayOpen(false)}
                      target="_blank"
                      className="bg-[#bc0f01] hover:bg-[#800d05] shadow-[0_0_10px_#bc0f01,0_0_20px_#bc0f01,0_0_40px_#bc0f01] hover:shadow-[0_0_15px_#800d05,0_0_30px_#800d05,0_0_60px_#800d05] px-4 py-2 rounded-md text-white transition-all animate-pulse duration-500"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overlay;
