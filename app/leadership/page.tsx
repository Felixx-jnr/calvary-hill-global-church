import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Leadership = () => {
  return (
    <main className="px-2">
      <header>
        <Header header="Leadership" />
      </header>

      <section className=" grid md:grid-cols-[1.1fr_0.9fr] items-center mx-auto gap-5 max-w-[1100px] w-[98%] ">
        <div className="relative mx-auto h-[500px] md:h-[654px] ">
          <Image
            alt="Lead Pastor Calvary Hill Church"
            src="/leader.jpg"
            width={12000}
            height={12000}
            className=" w-full h-full object-cover "
          />

          <div className="absolute bottom-0 md:-right-2 max-md:left-0 bg-[#130701] md:h-[185px] md:w-[322px] font-sofia-bold text-2xl md:text-3xl lg:text-4xl text-smokeWhite flex flex-col justify-center px-10">
            <div className="">
              <h3>Father.</h3>
              <h3>Shepherd.</h3>
              <h3>God's Gift.</h3>
            </div>
          </div>
        </div>

        <div>
          <p className="font-sofia-bold text-darkmaroon tracking-widest text-sm mb-5">
            LEAD PASTOR
          </p>
          <h2 className=" text-3xl xs:text-4xl md:text-5xl  font-sofia-bold text-darkmaroon tracking-wide mb-5">
            Pastor Collins Throne
          </h2>
          <p className=" font-sofia-regular text-lightGrey">
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
          <div>
            <span>Logos</span>
          </div>
        </div>
      </section>

      <section className=" grid md:grid-cols-[0.9fr_1.1fr] items-center mx-auto gap-10 max-w-[1100px] w-[98%] mt-28">
        <div className="max-md:order-2">
          <h2 className=" text-3xl xs:text-4xl md:text-5xl  font-sofia-bold text-darkmaroon tracking-wide mb-5">
            Our Ministry Gift
          </h2>
          <p className=" font-sofia-regular text-lightGrey">
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

        <div className="relative mx-auto w-full max-md:order-1 overflow-hidden ">
          <Image
            alt="Lead Pastor Calvary Hill Church"
            src="/gift.jpg"
            width={12000}
            height={12000}
            className=" w-full"
          />

          <div className="absolute h-[500px] w-[300px] -bottom-10 right-0 max-md:hidden">
            <Image
              alt="Lead Pastor Calvary Hill Church"
              src="/ministry.jpg"
              width={12000}
              height={12000}
              className=" w-full h-full object-cover "
            />
          </div>
        </div>
      </section>

      {/* SECTION SEVEN - FORM */}
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

      {/* FORM */}
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
    </main>
  );
};

export default Leadership;
