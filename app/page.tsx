import MiniCarousel from "../components/Home/MiniCarousel";
import Slider from "../components/Home/Slider";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { LiaTelegram } from "react-icons/lia";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonySlider from "@/components/TestimonySlider";
import RandomAudioPlayer from "@/components/RandomAudio";

const Home = () => {
  return (
    <main>
      <div>
        <Slider />
      </div>

      {/* SECTION TWO */}
      <section className="mt-24 max-sm:mt-20">
        <div className="mx-auto mb-4 w-[90%] sm:w-[85%]">
          <p className="font-sofia-bold text-darkmaroon text-sm tracking-widest">
            CALVARY HILL CHURCH
          </p>

          <h1 className="mt-3 mb-3 font-sofia-bold text-darkmaroon lg:text-[57px] text-3xl sm:text-4xl md:text-5xl tracking-tighter">
            We Are The Triumphant Church
          </h1>

          <p className="text-lightGrey">
            Bringing men to the place of triumph through the revelation of
            Christ and positioning them for kingdom advancement.
          </p>
        </div>

        <div className="mx-auto w-[95%]">
          <MiniCarousel />
        </div>
      </section>

      {/* SECTION THREE - OUR VISION */}
      <section className="mx-auto mt-20 max-sm:mt-16 w-[95%] sm:w-[90%]">
        <div className="mb-6 w-[150px] md:w-[200px] lg:w-[230px]">
          <Image
            src="/cropped-CHC-logo-black-1.png"
            alt=""
            className="w-full h-full"
            width={500}
            height={500}
          />
        </div>
        <p className="mb-5 font-sofia-bold text-darkmaroon text-xs sm:text-sm tracking-widest">
          OUR VISION
        </p>
        <h1 className="mb-5 font-sofia-bold font-bold text-darkmaroon lg:text-[57px] text-4xl tracking-tight">
          Making Christ Known
        </h1>
        <p className="mb-5 text-lightGrey">
          Our Vision as a Church is to make Christ known through global
          evangelism to build a strong local church bonded by love and
          Supernatural manifestation through discipleship.
        </p>
        <div className="relative mb-12 w-full max-h-[800px] overflow-hidden">
          <Image
            src={"/home/red.jpg"}
            alt={""}
            width={1800}
            height={1240}
            className="w-full object-cover"
          />
        </div>
        <button className="bg-maroon hover:bg-darkmaroon px-6 md:px-10 lg:px-14 py-3 md:py-4 lg:py-5 font-Sofia font-sofia-bold text-xs text-smokeWhite tracking-widest">
          <Link href="/about">ABOUT US</Link>
        </button>
      </section>

      {/* SECTION FOUR - SERMONS */}
      <section className="bg-fixed mt-16 h-[429px] text-white home-sermons">
        <div className="flex flex-col justify-center items-center mx-auto w-[90%] lg:w-[60%] h-full">
          <h2 className="font-sofia-bold text-4xl md:text-5xl text-center">
            Sermons
          </h2>

          <p className="my-6 font-semibold text-sm md:text-xl text-center leading-tight">
            You can listen to and download messages for your joy and progress in
            the faith from our Senior Pastor, Pastor Collins Throne.
          </p>

          <button className="bg-maroon hover:bg-darkmaroon px-6 md:px-10 lg:px-14 py-3 md:py-4 lg:py-5 font-Sofia font-sofia-bold text-xs text-smokeWhite tracking-widest">
            <Link href="/sermons">SERMONS</Link>
          </button>
        </div>
      </section>

      {/* SECTION FIVE - SERMON OF THE WEEK */}
      <section className="bg-smokeWhite py-32 max-sm:py-16">
        <div className="relative mx-auto w-[95%] md:w-[90%] lg:w-[85%]">
          <p className="mb-3 sm:mb-5 font-sofia-bold text-darkmaroon text-xs sm:text-sm tracking-widest">
            SERMON OF THE WEEK
          </p>
          <h1 className="mb-5 sm:mb-10 font-sofia-bold text-darkmaroon lg:text-[57px] text-4xl tracking-tighter">
            Listen On The Go!
          </h1>

          <RandomAudioPlayer />
        </div>

        <div className="mt-24 w-full text-center">
          <p className="mb-5 font-sofia-bold text-darkmaroon text-xs sm:text-sm tracking-widest">
            ARTICLES
          </p>
          <h1 className="mx-auto mb-5 w-[98%] xs:w-[90%] sm:w-[85%] md:w-[80%] lg:w-[800px] font-sofia-bold text-darkmaroon text-xl xs:text-3xl sm:text-5xl tracking-tight">
            Grow in Grace - Dive Into Our Enriching Materials
          </h1>

          <button className="bg-maroon hover:bg-darkmaroon mt-4 px-3 lg:px-14 py-3 lg:py-5 font-sofia-bold font-extrabold text-[8px] sm:text-xs text-smokeWhite tracking-widest">
            <Link href="/devotional">VIEW ALL RESOURCES</Link>
          </button>
        </div>
      </section>

      {/* SECTION SIX - GIVING */}
      <section className="bg-fixed h-[624px] text-white home-giving">
        <div className="flex flex-col justify-center items-left mx-auto w-[95%] md:w-[80%] h-full">
          <p className="mb-6 font-sofia-bold text-sm leading-tight tracking-widest">
            THE GIVING GRACE
          </p>
          <h1 className="mb-5 font-sofia-bold text-4xl sm:text-5xl md:text-6xl tracking-tight">
            God Loves A Cheerful Giver
          </h1>

          <p className="mb-7 font-Sofia font-medium text-darkGrey text-base tracking-normal">
            “Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver”
          </p>

          <p className="mb-5 font-Sofia font-medium text-darkGrey text-base tracking-tight">
            - 2nd Cor 9:7 NIV
          </p>

          <button className="bg-orange hover:bg-white py-4 sm:py-5 max-w-[190px] sm:max-w-[250px] font-sofia-bold hover:text-darkmaroon text-xs text-smokeWhite tracking-normal sm:tracking-widest">
            <Link href="/giving">GIVING & PARTNERSHIP</Link>
          </button>
        </div>
      </section>

      {/* SECTION SEVEN - FORM */}
      {/* <section className="block md:flex items-center gap-4 mx-auto mt-24 w-[95%] md:w-[90%] h-full">
        <div className="md:w-[700px] mid:w-[600px] font-sofia-bold text-darkmaroon md:text-xl text-2xl mid:text-3xl">
          Please fill in this form if you would like to receive edifying
          contents.
        </div>

        <div className="w-[95%] text-lightGrey">
          <input
            className="bg-transparent my-2 py-2 border-darkmaroon border-b focus:outline-none w-full font-Sofia placeholder:font-Sofia font-normal placeholder:font-semibold text-lightGrey placeholder:text-base text-xl leading-7 placeholder-lightGrey"
            placeholder="Enter Your Email Address"
            type="email"
          />

          <div className="flex font-Sofia">
            <input type="checkbox" />
            <div className="ml-2 font-medium text-sm">
              I agree to the
              <span className="ml-1 underline">Privacy Policy.</span>
            </div>
          </div>
        </div>

        <p className="flex items-center max-md:mt-4 w-[20%] font-sofia-bold text-sm tracking-widest">
          <span>
            <LiaTelegram className="text-xl" />
          </span>
          SUBSCRIBE
        </p>
      </section> */}

      <section>
        <TestimonySlider />
      </section>

      {/* SECTION EIGHT - ACCORDION */}
      <section className="mx-auto mt-10 mb-20 w-[95%] md:w-[80%]">
        <h1 className="mb-3 font-sofia-bold text-darkmaroon text-3xl sm:text-4xl md:text-5xl text-center tracking-tight">
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
            <AccordionTrigger className="mb-2 font-sofia-bold text-darkmaroon text-lg sm:text-xl md:text-2xl lg:text-3xl text-left hover:no-underline">
              What Are the Basic Doctrines of the Church?
            </AccordionTrigger>
            <AccordionContent className="mt-1 md:mt-4 mb-2 text-lightGrey text-base">
              The Basic Doctrines of Calvary Hill Church are…{" "}
              <Link
                className="font-semibold hover:underline"
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
            <AccordionTrigger className="mb-2 font-sofia-bold text-darkmaroon text-lg sm:text-xl md:text-2xl lg:text-3xl text-left hover:no-underline">
              How to Become a Church Member?
            </AccordionTrigger>
            <AccordionContent className="mt-1 md:mt-4 mb-2 text-lightGrey text-base">
              Insert Google Form Link
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="mb-5"
            value="item-3"
          >
            <AccordionTrigger className="mb-2 font-sofia-bold text-darkmaroon text-lg sm:text-xl md:text-2xl lg:text-3xl text-left hover:no-underline">
              Do You Conduct Worship Online?
            </AccordionTrigger>
            <AccordionContent className="mt-1 md:mt-4 mb-2 text-lightGrey text-base">
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
