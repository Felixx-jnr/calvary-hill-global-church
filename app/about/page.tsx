import Header from "@/components/Header";
import Image from "next/image";
import AboutCarousel from "@/components/About/AboutCarousel";

import React from "react";

const About = () => {
  return (
    <main className="bg-smokeWhite">
      <header>
        <Header header="About" />
      </header>

      <section className="block md:grid grid-cols-[1fr_0.7fr] gap-16 w-[90%] mx-auto items-center ">
        <AboutCarousel />

        <div>
          <p className="font-sofia-bold text-darkmaroon tracking-widest text-sm mb-5 max-md:mb-2">
            OUR HISTORY
          </p>
          <h2 className=" text-3xl xs:text-4xl md:text-5xl  font-sofia-bold text-darkmaroon tracking-wide mb-5 max-md:mb-2">
            CHC
          </h2>
          <p className=" text-lightGrey mb-2">
            Calvary Hill Global Church (CHC) a.k.a the triumphant Church, is the
            Church expression of Collins Throne Ministries. It is a global
            ministry with headquarters currently in Lagos, Nigeria. Its senior
            pastor and founder is Pastor Collins Throne.
          </p>
        </div>
      </section>

      <div className="  py-20 bg-smokeWhite">
        <h1 className=" text-4xl sm:text-5xl md:text-6xl font-sofia-bold text-darkmaroon tracking-tighter mb-16 text-center">
          Events & Meetings
        </h1>

        {/* DUNAMIS SECTION */}
        <section className="block md:grid grid-cols-[1fr_0.8fr] gap-16 w-[94%] mx-auto items-center ">
          <div>
            <h2 className=" text-3xl xs:text-4xl md:text-[47px] font-sofia-bold text-darkmaroon tracking-[-0.7px] mb-12 max-md:mb-2">
              Dunamis CampMeeting
            </h2>
            <p className=" text-lightGrey mb-2 ">
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
              <br /> <br />
              It is a meeting worth attending, not just once but for a lifetime.
              <br /> <br />
              We hope to see you in the next Dunamis meeting!
            </p>
          </div>

          <AboutCarousel />
        </section>

        {/* EASTER BIBLE EXPERIENCE SECTION */}
        <section className=" grid grid-cols-[0.8fr_1fr] max-md:grid-cols-1 gap-16 w-[94%] mx-auto items-center md:mt-10 mt-5 ">
          <Image
            src="/photo_2024-06-18_10-51-12.jpg"
            alt=""
            width={2000}
            height={2000}
            className=" max-md:order-2 "
          />

          <div className=" ">
            <h2 className=" text-3xl xs:text-4xl md:text-[47px] font-sofia-bold text-darkmaroon tracking-[-0.7px] mb-10 max-md:mb-8">
              Easter Bible Experience
            </h2>
            <p className=" text-lightGrey mb-2">
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
