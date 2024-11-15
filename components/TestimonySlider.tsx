import Link from "next/link";
import React from "react";

const slides = [
  {
    testimony:
      "Luxe Houses lives up to its name in every way. From the peaceful surroundings to the thoughtful design, every moment spent here feels like a retreat. Choosing Luxe Houses was the best decision I've made",
    date: "ejfceudn Nov. 2023",
  },
  {
    testimony:
      "Luxe Houses lives up to its name in every way. From the peaceful surroundings to the thoughtful design, every moment spent here feels like a retreat. Choosing Luxe Houses was the best decision I've made",
    date: "2nd Nov. 2023",
  },
  {
    testimony:
      "Luxe Houses lives up to its name in every way. From the peaceful surroundings to the thoughtful design, every moment spent here feels like a retreat. Choosing Luxe Houses was the best decision I've made",
    date: "2nd Nov. 2023",
  },

  {
    testimony:
      "Luxe Houses lives up to its name in every way. From the peaceful surroundings to the thoughtful design, every moment spent here feels like a retreat. Choosing Luxe Houses was the best decision I've made",
    date: "2nd Nov. 2023",
  },
  {
    testimony:
      "Luxe Houses lives up to its name in every way. From the peaceful surroundings to the thoughtful design, every moment spent here feels like a retreat. Choosing Luxe Houses was the best decision I've made",
    date: "2nd Nov. 2023",
  },
  {
    testimony:
      "Luxe Houses lives up to its name in every way. From the peaceful surroundings to the thoughtful design, every moment spent here feels like a retreat. Choosing Luxe Houses was the best decision I've made",
    date: "2nd Nov. 2023",
  },
  {
    testimony:
      "Luxe Houses lives up to its name in every way. From the peaceful surroundings to the thoughtful design, every moment spent here feels like a retreat. Choosing Luxe Houses was the best decision I've made",
    date: "2nd Nov. 2023",
  },
  {
    testimony:
      "Luxe Houses lives up to its name in every way. From the peaceful surroundings to the thoughtful design, every moment spent here feels like a retreat. Choosing Luxe Houses was the best decision I've made",
    date: "2nd Nov. 2023",
  },
];

const TestimonySlider = () => {
  return (
    <div className="mt-20 ">
      <div className="mx-5">
        <h2 className="lg:text-5xl text-4xl font-sofia-bold text-darkmaroon">
          Testimonies
        </h2>
        <p className="my-3 text-lightGrey font-normal text-sm md:text-xl leading-tight">
          Let the redeemed of the LORD say so, whom he hath redeemed from the
          hand of the enemy - Psalms 107 v 2
        </p>
      </div>

      <div className="reviews relative flex mt-5 mb-14 ">
        <div className="reviews-slide flex py-4">
          {slides.map((slide, index) => (
            <Link
              href={`testimonies/${index}`}
              key={index}
              className=" card bg-darkmaroon hover:bg-maroon mx-2 px-2 py-4 w-60 place-items-center"
            >
              <p className="mb-1 italic text-smokeWhite font-semibold">
                {slide.date}
              </p>
              <p className=" text-smokeWhite font-sofia-normal ">
                {slide.testimony}
              </p>
            </Link>
          ))}
        </div>

        <div className="reviews-slide flex py-4">
          {slides.map((slide, index) => (
            <Link
              href={`testimonies/${index}`}
              key={index}
              className=" card bg-darkmaroon hover:bg-maroon mx-2 px-2 py-4 w-60 place-items-center"
            >
              <p className="mb-1 italic text-smokeWhite font-semibold">
                {slide.date}
              </p>
              <p className=" text-smokeWhite font-sofia-normal ">
                {slide.testimony}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonySlider;
