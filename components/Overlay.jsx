"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const sliderImages = ["/dum1.jpg", "/dum2.jpg"];

const Overlay = () => {
  // Overlay & Tag state
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);
  const autoOpenTimerRef = useRef(null);

  // Auto open overlay after 5s
  useEffect(() => {
    autoOpenTimerRef.current = setTimeout(() => setIsOverlayOpen(true), 3000);

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
    <div>
      {isOverlayOpen && (
        <div className="z-[1000] fixed inset-0 flex justify-center items-center">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-[url('/bg1.jpg')] bg-black opacity-70"
            onClick={() => setIsOverlayOpen(false)}
          />

          {/* Popup content */}
          <div className="z-10 relative sm:flex bg-white mx-2 p-2 rounded-md w-full max-w-[745px] sm:h-[409px] overflow-hidden">
            {/* Overlay X (only closes overlay) */}
            <button
              aria-label="Close discount popup"
              onClick={() => setIsOverlayOpen(false)}
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

            {/* Right: Discount text */}
            <div className="flex flex-col justify-center p-3 w-full text-center">
              <h2 className="mb-3 font-oswald font-bold text-[30px] leading-none">
                DUNAMIS CAMP FIRE 2025
              </h2>
              <p className="mb-3 text-xs italic">
                {'"THOU SHALT BE TURNED INTO ANOTHER MAN" - 1 SAMUEL 10:6'}
              </p>

              <div className="">
                <p className="mb-3 font-bold text-sm">
                  19th - 21st December, 2025
                </p>

                <div className="">
                  <p className="mb-3 text-sm capitalize leading-none">
                    Redeem Camp, Km 46, Lagos-Ibadan Expressway, Mowe, Ogun
                    State, Nigeria
                  </p>
                  <ul className="flex flex-wrap justify-center items-center gap-2 mb-3">
                    <li className="flex items-center gap-1 text-[10px] whitespace-nowrap">
                      <span className="bg-black rounded-full w-1 h-1"></span>
                      FREE ACCOMODATION
                    </li>
                    <li className="flex items-center gap-1 text-[10px] whitespace-nowrap">
                      <span className="bg-black rounded-full w-1 h-1"></span>
                      FREE ACCOMODATION
                    </li>
                    <li className="flex items-center gap-1 text-[10px] whitespace-nowrap">
                      <span className="bg-black rounded-full w-1 h-1"></span>
                      FREE ACCOMODATION
                    </li>
                  </ul>

                  <div className="mb-7">
                    <p className="text-xs">
                      For enquries:{" "}
                      <span className="">
                        {" "}
                        +234 805 101 8171, +234 909 340 2282
                      </span>
                    </p>
                    <Link
                      onClick={() => setIsOverlayOpen(false)}
                      className="text-[#bc0f01] text-xs underline"
                      href="/about"
                    >
                      Read More
                    </Link>
                  </div>

                  <div className="">
                    <Link
                      href="https://forms.gle/3GkLsyDFKjTqjrtd8"
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
