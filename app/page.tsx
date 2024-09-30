import MiniCarousel from "@/components/MiniCarousel";
import Slider from "@/components/Slider";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <div>
        <Slider />
      </div>

      {/* SECTION B */}
      <section className=" mt-24 max-sm:mt-20">
        <div className="w-[90%] sm:w-[85%] mx-auto mb-4">
          <p className=" font-Kumbh text-darkmaroon text-xs font-bold">
            CALVARY HILL CHURCH
          </p>

          <h1 className=" font-Sofia text-darkmaroon mt-3 mb-3 md:text-5xl lg:text-6xl sm:text-4xl text-3xl font-bold tracking-tighter">
            We Are The Triumphant Church
          </h1>

          <p className=" font-Kumbh font-medium text-lightGrey">
            Bringing men to the place of triumph through the revelation of
            Christ and positioning them for kingdom advancement
          </p>
        </div>

        <div className=" w-[95%] mx-auto">
          <MiniCarousel />
        </div>
      </section>

      {/* SECTION C */}
      <section className=" mt-20 max-sm:mt-16 w-[95%] sm:w-[90%] mx-auto ">
        <div className=" mb-6 lg:w-[230px] md:w-[200px] w-[150px]">
          <img
            src="/cropped-CHC-logo-black-1.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <p className="mb-5 sm:text-sm text-xs font-semibold font-Sofia text-darkmaroon tracking-tight">
          OUR VISION
        </p>
        <h1 className=" font-Sofia mb-5 text-4xl lg:text-6xl font-bold tracking-tighter text-darkmaroon">
          Making Christ Known
        </h1>
        <p className=" max-sm:text-sm text-base mb-5 font-Sofia font-semibold tracking-tight text-lightGrey">
          Our Vision as a Church is to make Christ known through global
          evangelism to build a strong local church bonded by love and
          Supernatural manifestation through discipleship
        </p>
        <div className="relative w-full max-h-[800px] overflow-hidden mb-12">
          <Image
            src={"/me.jpg"}
            alt={""}
            width={1800}
            height={1240}
            className="w-full object-cover"
          />
        </div>
        <button className=" text-smokeWhite bg-maroon hover:bg-darkmaroon lg:px-14 lg:py-5 md:px-10 md:py-4 px-6 py-3 font-extrabold tracking-widest font-Sofia text-xs">
          <Link href="/about">ABOUT US</Link>
        </button>
      </section>

      {/* SECTION FOUR - SERMONS */}

      <section className=" mt-16 bg-fixed text-white h-[429px] home-sermons ">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-5xl font-Sofia font-bold">Sermons</h2>
          <p className="my-7">
            You can listen to and download messages for your joy and progress in
            the faith from our Senior Pastor, Pastor Collins Throne.
          </p>
          <button className="text-smokeWhite bg-maroon hover:bg-darkmaroon lg:px-14 lg:py-5 md:px-10 md:py-4 px-6 py-3 font-extrabold tracking-widest font-Sofia text-xs">
            <Link href="/sermon">SERMONS</Link>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
