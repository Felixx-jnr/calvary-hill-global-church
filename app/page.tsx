import MiniCarousel from "../components/Home/MiniCarousel";
import Slider from "../components/Home/Slider";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonySlider from "@/components/TestimonySlider";
import AudioPlayer from "@/components/AudioPlayer";

const Home = () => {
  return (
    <main>
      <div>
        <Slider />
      </div>

      {/* SECTION TWO */}
      <section className=" mt-24 max-sm:mt-20">
        <div className="w-[90%] sm:w-[85%] mx-auto mb-4">
          <p className=" font-sofia-bold text-darkmaroon text-sm tracking-widest">
            CALVARY HILL CHURCH
          </p>

          <h1 className=" font-sofia-bold text-darkmaroon mt-3 mb-3 md:text-5xl lg:text-[57px] sm:text-4xl text-3xl tracking-tighter">
            We Are The Triumphant Church
          </h1>

          <p className="  text-lightGrey">
            Bringing men to the place of triumph through the revelation of
            Christ and positioning them for kingdom advancement.
          </p>
        </div>

        <div className=" w-[95%] mx-auto">{/* <MiniCarousel /> */}</div>
      </section>

      {/* SECTION THREE - OUR VISION */}
      <section className=" mt-20 max-sm:mt-16 w-[95%] sm:w-[90%] mx-auto ">
        <div className=" mb-6 lg:w-[230px] md:w-[200px] w-[150px]">
          <Image
            src="/cropped-CHC-logo-black-1.png"
            alt=""
            className="w-full h-full"
            width={500}
            height={500}
          />
        </div>
        <p className="mb-5 sm:text-sm text-xs font-sofia-bold text-darkmaroon tracking-widest">
          OUR VISION
        </p>
        <h1 className=" font-sofia-bold mb-5 text-4xl lg:text-[57px] font-bold tracking-tight text-darkmaroon">
          Making Christ Known
        </h1>
        <p className="  text-lightGrey  mb-5">
          Our Vision as a Church is to make Christ known through global
          evangelism to build a strong local church bonded by love and
          Supernatural manifestation through discipleship.
        </p>
        <div className="relative w-full max-h-[800px] overflow-hidden mb-12">
          <Image
            src={"/home/red.jpg"}
            alt={""}
            width={1800}
            height={1240}
            className="w-full object-cover"
          />
        </div>
        <button className=" text-smokeWhite bg-maroon hover:bg-darkmaroon lg:px-14 lg:py-5 md:px-10 md:py-4 px-6 py-3 font-sofia-bold tracking-widest font-Sofia text-xs">
          <Link href="/about">ABOUT US</Link>
        </button>
      </section>

      {/* SECTION FOUR - SERMONS */}
      <section className=" mt-16 bg-fixed text-white h-[429px] home-sermons ">
        <div className="flex flex-col items-center justify-center h-full w-[90%] lg:w-[60%] mx-auto ">
          <h2 className=" text-4xl md:text-5xl font-sofia-bold text-center">
            Sermons
          </h2>

          <p className="my-6 text-center font-semibold text-sm md:text-xl leading-tight">
            You can listen to and download messages for your joy and progress in
            the faith from our Senior Pastor, Pastor Collins Throne.
          </p>

          <button className="text-smokeWhite bg-maroon hover:bg-darkmaroon lg:px-14 lg:py-5 md:px-10 md:py-4 px-6 py-3 font-sofia-bold tracking-widest font-Sofia text-xs">
            <Link href="/sermon">SERMONS arrow</Link>
          </button>
        </div>
      </section>

      {/* SECTION FIVE - SERMON OF THE WEEK */}
      <section className=" py-32 max-sm:py-16  bg-smokeWhite">
        <div className="relative w-[95%] md:w-[90%] lg:w-[85%] mx-auto">
          <p className="mb-3 sm:mb-5 sm:text-sm text-xs text-darkmaroon tracking-widest font-sofia-bold">
            SERMON OF THE WEEK
          </p>
          <h1 className=" font-sofia-bold mb-5 sm:mb-10 text-4xl lg:text-[57px] tracking-tighter text-darkmaroon">
            Listen On The Go!
          </h1>

          <div className=" flex max-sm:block bg-white">
            <div className=" sm:w-[40%] max-sm:h-[200px] max-sm:my-5">
              <Image
                src="/testimonial-1.jpg"
                alt=""
                width={1000}
                height={1280}
                className="h-full w-full object-cover"
              ></Image>
            </div>

            <div className=" md:ml-8 lg:ml-10 relative w-full">
              <div className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 w-full font-sofia-bold p-4">
                <p className=" inline-block p-4 text-xs font-bold py-1 bg-darkmaroon text-white text-center">
                  NOW PLAYING
                </p>
                <h4 className="text-xl mt-4 leading-tight text-darkmaroon">
                  Pastor Collins Throne
                </h4>
                <h3 className="text-[28px] leading-none tracking-wide text-darkmaroon">
                  The Art Of Listening 1
                </h3>

                <div className=" flex w- gap-4 mt-6 justify-start">
                  <AudioPlayer audioSrc="/Baptizo Track 1.mp3" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-24">
          <p className="mb-5 sm:text-sm text-xs font-sofia-bold text-darkmaroon tracking-widest">
            ARTICLES
          </p>
          <h1 className=" font-sofia-bold mb-5 text-xl xs:text-3xl sm:text-5xl text-darkmaroon lg:w-[800px] md:w-[80%] sm:w-[85%] xs:w-[90%] w-[98%] mx-auto tracking-tight">
            Grow in Grace - Dive Into Our Enriching Materials
          </h1>

          <button className="text-smokeWhite bg-maroon hover:bg-darkmaroon lg:px-14 lg:py-5 px-3 py-3 font-extrabold tracking-widest font-sofia-bold sm:text-xs text-[8px] mt-4">
            <Link href="/devotional">VIEW ALL RESOURCES</Link>
          </button>
        </div>
      </section>

      {/* SECTION SIX - GIVING */}
      <section className=" bg-fixed text-white h-[624px] home-giving ">
        <div className="flex flex-col items-left justify-center h-full w-[95%] md:w-[80%] mx-auto ">
          <p className="mb-6 font-sofia-bold text-sm leading-tight tracking-widest">
            THE GIVING GRACE
          </p>
          <h1 className=" text-4xl sm:text-5xl md:text-6xl font-sofia-bold tracking-tight mb-5">
            God Loves A Cheerful Giver
          </h1>

          <p className="mb-7 text-base font-medium font-Sofia text-darkGrey tracking-normal">
            “Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver”
          </p>

          <p className="mb-5 text-base font-medium font-Sofia tracking-tight text-darkGrey">
            - 2nd Cor 9:7 NIV
          </p>

          <button className=" max-w-[190px] sm:max-w-[250px] text-smokeWhite bg-orange hover:bg-white hover:text-darkmaroon py-4 sm:py-5 sm:tracking-widest tracking-normal text-xs font-sofia-bold">
            <Link href="/giving">GIVING & PARTNERSHIP</Link>
          </button>
        </div>
      </section>

      {/* SECTION SEVEN - FORM */}
      <section className=" block md:flex gap-4 items-center h-full w-[95%] md:w-[85%] mx-auto mt-24 ">
        <div className=" md:w-[700px] mid:w-[600px] text-2xl md:text-xl mid:text-3xl font-sofia-bold text-darkmaroon">
          Please fill in this form if you would like to receive edifying
          contents.
        </div>

        <div className="md:w-[1000px] w-[85%] text-lightGrey">
          <input
            className="  text-lightGrey border-b border-darkmaroon focus:outline-none bg-transparent w-full font-Sofia font-normal leading-7 py-2 text-xl my-2 placeholder-lightGrey placeholder:font-semibold placeholder:font-Sofia placeholder:text-base "
            placeholder="Enter Your Email Address"
            type="email"
          />

          <div className=" flex font-Sofia">
            <input type="checkbox" />
            <div className="ml-2 text-sm font-medium">
              I agree to the
              <Link
                className=" underline ml-1"
                href="/"
              >
                Privacy Policy.
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[20%] max-md:mt-8 font-sofia-bold text-sm tracking-widest">
          <span>d</span>
          SUBSCRIBE
        </div>
      </section>

      <section>
        <TestimonySlider />
      </section>

      {/* SECTION EIGHT - ACCORDION */}
      <section className="w-[95%] md:w-[80%] mx-auto mt-10 mb-20">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-sofia-bold tracking-tight text-darkmaroon mb-3">
          FAQ&apos;s
        </h1>

        <Accordion
          type="multiple"
          className="w-full"
        >
          <AccordionItem
            className="mb-5"
            value="item-1"
          >
            <AccordionTrigger className="text-left text-lg sm:text-xl md:text-2xl lg:text-3xl text-darkmaroon hover:no-underline font-sofia-bold mb-2 ">
              What Are the Basic Doctrines of the Church?
            </AccordionTrigger>
            <AccordionContent className=" text-base text-lightGrey mt-1 md:mt-4 mb-2 ">
              The Basic Doctrines of Calvary Hill Church are…{" "}
              <Link
                className=" font-semibold hover:underline"
                href="/doctrine"
              >
                Read More
              </Link>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="mb-5"
            value="item-2"
          >
            <AccordionTrigger className="text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-sofia-bold text-darkmaroon hover:no-underline mb-2 ">
              How to Become a Church Member?
            </AccordionTrigger>
            <AccordionContent className=" text-base text-lightGrey mt-1 md:mt-4 mb-2 ">
              Insert Google Form Link
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="mb-5"
            value="item-3"
          >
            <AccordionTrigger className="text-left text-lg sm:text-xl md:text-2xl lg:text-3xl text-darkmaroon hover:no-underline font-sofia-bold mb-2 ">
              Do You Conduct Worship Online?
            </AccordionTrigger>
            <AccordionContent className=" text-base text-lightGrey mt-1 md:mt-4 mb-2 ">
              Yes we do, but It&apos;s not the primary way we would love you to
              join our services, but if you can&apos;t join us physically
              because of distance, you can join our services (Wednesday and
              Sunday) through our mixlr or youtube Stream
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
};

export default Home;
