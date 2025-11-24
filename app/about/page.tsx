import Header from "@/components/Header";
import Image from "next/image";
import AboutCarousel from "@/components/About/AboutCarousel";
import AboutCarouselTwo from "@/components/About/AboutCarouselTwo";

import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <main className="bg-smokeWhite">
      <header>
        <Header header="About" />
      </header>

      <section className="block items-center gap-8 lg:gap-16 md:grid grid-cols-[1fr_0.7fr] mx-auto w-[97%] lg:w-[90%]">
        <AboutCarousel />

        <div className="max-md:mt-3">
          <p className="mb-5 max-md:mb-2 font-sofia-bold text-darkmaroon text-sm tracking-widest">
            OUR HISTORY
          </p>
          <h2 className="mb-5 max-md:mb-2 font-sofia-bold text-darkmaroon text-3xl xs:text-4xl md:text-5xl tracking-wide">
            CHC
          </h2>
          <p className="mb-2 text-lightGrey">
            Calvary Hill Global Church (CHC) a.k.a the triumphant Church, is the
            Church expression of Collins Throne Ministries. It is a global
            ministry with headquarters currently in Lagos, Nigeria. Its senior
            pastor and founder is Pastor Collins Throne.
          </p>
        </div>
      </section>

      <div className="bg-smokeWhite py-20">
        <h1 className="mb-16 font-sofia-bold text-darkmaroon text-4xl sm:text-5xl md:text-6xl text-center tracking-tighter">
          Events & Meetings
        </h1>

        {/* DUNAMIS SECTION */}
        <section className="block items-center gap-8 lg:gap-16 md:grid grid-cols-[1fr_0.8fr] mx-auto w-[94%]">
          <div>
            <h2 className="mb-12 max-md:mb-2 font-sofia-bold text-darkmaroon md:text-[47px] text-3xl xs:text-4xl tracking-[-0.7px]">
              Dunamis CampMeeting
            </h2>
            <p className="mb-7 text-lightGrey">
              Dunamis Camp meeting is our yearly annual Prayer Camp meeting
              organized by Calvary Hill Church held in December.
              <br /> <br />
              It is time of the year when we spend elongated hours in three days
              to pray ourselves into every New year, receives Directions,
              prophecies and position ourselves in the will of God for the new
              year. This meeting has been a time of supernatural encounters, a
              time of the prophetic, where we camp around the Prophetic and
              Prayers and align the coming years to fit into the will, plan and
              purpose of God for our lives. In Dunamis, many has testify of
              receiving directions, the miraculous, amazing impartations and
              answers to prayers. Sessions at Dunamis Camp Meeting are
              characterized by a tangible presence of the power of God, mighty
              utterance and angelic ministrations.
              <br />
              It is a meeting worth attending, not just once but for a lifetime.
              We hope to see you in the next Dunamis meeting!
            </p>
            <Link
              href="https://forms.gle/3GkLsyDFKjTqjrtd8"
              target="_blank"
              className="bg-[#bc0f01] hover:bg-[#800d05] shadow-[0_0_10px_#bc0f01,0_0_20px_#bc0f01,0_0_40px_#bc0f01] hover:shadow-[0_0_15px_#800d05,0_0_30px_#800d05,0_0_60px_#800d05] px-4 py-2 rounded-md text-white transition-all animate-pulse duration-500"
            >
              Register
            </Link>
          </div>

          <AboutCarouselTwo />
        </section>

        {/* EASTER BIBLE EXPERIENCE SECTION */}
        <section className="items-center gap-8 lg:gap-16 grid grid-cols-[0.8fr_1fr] max-md:grid-cols-1 mx-auto mt-5 md:mt-10 w-[94%]">
          <Image
            src="/about/2024-03-14-09.25.07.jpg"
            alt=""
            width={2000}
            height={2000}
            className="max-md:order-2"
          />

          <div className=" ">
            <h2 className="mb-10 max-md:mb-8 font-sofia-bold text-darkmaroon md:text-[47px] text-3xl xs:text-4xl tracking-[-0.7px]">
              Easter Bible Experience
            </h2>
            <p className="mb-2 text-lightGrey">
              Easter Bible Experience is a two-day annual bible expository/
              teaching meeting of Calvary Hill Church held during Easter season.
              In this meeting, Amazing gospel truth is taught for elongated
              hours from the Scriptures to unravel and unveil the person of
              Christ as revealed in both the old and new testament scriptures.
              <br /> <br />
              Morning sessions are full-blown teaching meetings and bible study
              courses characterized by the investigation of Scriptures and sound
              bible exegesis coming forth with utterance and revelation
              knowledge to shed light on some grey areas and bring clarity to
              various misconceptions of the word of God.
              <br /> <br />
              Evening sessions are Holyghost Meetings where we Camp around the
              things of the Spirit and witness diverse manifestations of the
              Spirit in our midst accompanied by the tangible power of God.
              <br /> <br />
              Its a meeting never to miss!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
