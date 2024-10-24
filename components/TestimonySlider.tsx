import Link from "next/link";
import React from "react";

const slides = [
  {
    name: "Alice",
    review:
      "Luxe Houses is simply amazing! From the first consultation to the final walkthrough, their attention to detail and dedication to creating a serene environment were evident. I'm beyond thrilled with my new home!",
    image: "",
  },
  {
    name: "Alice",
    review:
      "Luxe Houses is simply amazing! From the first consultation to the final walkthrough, their attention to detail and dedication to creating a serene environment were evident. I'm beyond thrilled with my new home!",
    image: "",
  },
  {
    name: "David",
    review:
      "Luxe Houses exceeded my wildest dreams! The team's passion for creating extraordinary living spaces shines through in every aspect of their work. Living here feels like stepping into a fairytale every day.",
    image: "",
  },
  {
    name: "David",
    review:
      "Luxe Houses exceeded my wildest dreams! The team's passion for creating extraordinary living spaces shines through in every aspect of their work. Living here feels like stepping into a fairytale every day.",
    image: "",
  },
  {
    name: "Sophia",
    review:
      "Luxe Houses truly elevated my expectations! Their innovative designs and commitment to excellence have set a new standard in luxury living. I feel like I'm living in a five-star resort every day.",
    image: "",
  },
  {
    name: "Michael",
    review:
      "Luxe Houses is where luxury meets tranquility. The seamless blend of modern design and natural elements creates an atmosphere of pure bliss. My home here is not just a place, but a sanctuary.",
    image: "",
  },
  {
    name: "Emily",
    review:
      "Luxe Houses lives up to its name in every way. From the peaceful surroundings to the thoughtful design, every moment spent here feels like a retreat. Choosing Luxe Houses was the best decision I've made",
    image: "",
  },
];

const TestimonySlider = () => {
  return (
    <>
      <div className="ml-5">
        <h2 className="lg:text-5xl text-4xl font-bold text-gold mt-16 ">
          Here is what others have to say
        </h2>
        <p className="text-white font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
          laudantium fugiat nam similique accusantium hic debitis ad facere
          maiores praesentium!
        </p>
      </div>

      <div className="reviews relative flex mt-5 mb-14 ">
        <Link
          href=""
          className="reviews-slide flex py-4"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className=" card bg-black mx-2 w-60 p-2 flex flex-col place-items-center rounded-2xl"
            >
              <img className=" mb-2 p-2 rounded-[50%] bg-gold w-14 h-14 " />
              <p className="mb-1 italic font-semibold text-gold">
                {slide.name}
              </p>
              <p className=" text-white ">{slide.review}</p>
            </div>
          ))}
        </Link>

        <Link
          href=""
          className="reviews-slide flex py-4"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className=" card bg-black mx-2 w-60 p-2 flex flex-col place-items-center rounded-2xl"
            >
              <img className=" mb-2 p-2 rounded-[50%] bg-gold w-14 h-14" />
              <p className="mb-1 italic font-semibold text-gold">
                {slide.name}
              </p>
              <p className=" text-white ">{slide.review}</p>
            </div>
          ))}
        </Link>
      </div>
    </>
  );
};

export default TestimonySlider;
