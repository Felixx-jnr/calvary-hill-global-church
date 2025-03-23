import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";

const Leadership = () => {
  return (
    <main className="bg-smokeWhite px-2">
      <header>
        <Header header="Leadership" />
      </header>

      <section className="items-center gap-5 grid md:grid-cols-[1.1fr_0.9fr] mx-auto w-[98%] max-w-[1100px]">
        <div className="relative mx-auto h-[500px] md:h-[654px]">
          <Image
            alt="Lead Pastor Calvary Hill Church"
            src="/about/leader.jpg"
            width={12000}
            height={12000}
            className="w-full h-full object-cover"
          />

          <div className="md:-right-2 bottom-0 max-md:left-0 absolute flex flex-col justify-center bg-[#130701] px-10 md:w-[322px] md:h-[185px] font-sofia-bold text-smokeWhite text-2xl md:text-3xl lg:text-4xl">
            <div className="">
              <h3>Father.</h3>
              <h3>Shepherd.</h3>
              <h3>God&apos;s Gift.</h3>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-5 max-md:mb-2 font-sofia-bold text-darkmaroon text-sm tracking-widest">
            LEAD PASTOR
          </p>
          <h2 className="mb-5 max-md:mb-2 font-sofia-bold text-darkmaroon text-3xl xs:text-4xl md:text-5xl tracking-wide">
            Pastor Collins Throne
          </h2>
          <p className="text-lightGrey">
            Pastor Collins Throne is the visionary, of Collins Throne
            Ministries. He is a sound teacher of the word of God, passionate
            about discipling men with the gospel of Christ, raising them to be
            strong believers who would advance God&apos;s kingdom all over the
            earth.
            <br />
            <br />
            His ministry has transformed many lives and is touching and
            impacting many lives in Nigeria and beyond. He is the pioneer and
            General overseer of Calvary Hill Church with headquarters in Lagos,
            Nigeria.
          </p>
          <div className="flex gap-3 mt-4">
            <Link
              href=""
              className="p-2 border hover:border-pink-500 rounded-full hover:text-pink-500"
            >
              {" "}
              <FaInstagram className="text-2xl" />
            </Link>

            <Link
              href=""
              className="p-2 border hover:border-blue-500 rounded-full hover:text-blue-500"
            >
              {" "}
              <FaFacebookF className="text-2xl" />{" "}
            </Link>
          </div>
        </div>
      </section>

      <section className="items-center gap-10 grid md:grid-cols-[0.9fr_1.1fr] mx-auto mt-28 w-[98%] max-w-[1100px]">
        <div className="max-md:order-2">
          <h2 className="mb-5 max-md:mb-2 font-sofia-bold text-darkmaroon text-3xl xs:text-4xl md:text-5xl tracking-wide">
            Our Ministry Gift
          </h2>
          <p className="text-lightGrey">
            The blueprint of His Ministry as given by the lord is to Teach men
            to fight the good fight, to finish their course(their assignment)
            after helping them discover it and to teach them to keep the faith
            received from the apostles.
            <br />
            <br />
            He believes strongly in the Local Church as God&apos;s wisdom and
            plan for every believer and also in global evangelism, that is
            reaching out to the unsaved and unchurched with the Gospel of
            Christ.
            <br />
            <br />
            He ministers with a strong teaching anointing which flows with the
            manifestation of Supernatural in prophetic and healing.
          </p>
        </div>

        <div className="relative max-md:order-1 mx-auto w-full overflow-hidden">
          <Image
            alt="Lead Pastor Calvary Hill Church"
            src="/about/gift.jpg"
            width={12000}
            height={12000}
            className="w-full"
          />

          <div className="max-md:hidden right-0 -bottom-10 absolute w-[300px] h-[500px]">
            <Image
              alt="Lead Pastor Calvary Hill Church"
              src="/about/ministry.jpg"
              width={12000}
              height={12000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION SEVEN - FORM */}
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

      {/* FORM */}
      <section className="block md:flex items-center gap-4 mx-auto py-16 w-[95%] md:w-[85%] h-full">
        <div className="md:w-[700px] mid:w-[600px] font-sofia-bold text-darkmaroon md:text-xl text-2xl mid:text-3xl">
          Please fill in this form if you would like to receive edifying
          contents.
        </div>

        <div className="w-[100%] md:w-[1000px] text-lightGrey">
          <input
            className="bg-transparent my-2 py-2 border-darkmaroon border-b focus:outline-none w-full font-Sofia placeholder:font-Sofia font-normal placeholder:font-semibold text-lightGrey placeholder:text-base text-xl leading-7 placeholder-lightGrey"
            placeholder="Enter Your Email Address"
            type="email"
          />

          <div className="flex font-Sofia">
            <input type="checkbox" />
            <div className="ml-2 font-medium text-sm">
              I agree to the
              <Link className="ml-1 underline" href="/">
                Privacy Policy.
              </Link>
            </div>
          </div>
        </div>

        <p className="flex items-center max-md:mt-4 w-[20%] font-sofia-bold text-sm tracking-widest">
          <span>
            <LiaTelegram className="text-xl" />
          </span>
          SUBSCRIBE
        </p>
      </section>
    </main>
  );
};

export default Leadership;
