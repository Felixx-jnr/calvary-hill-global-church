import CsfCarousel from "@/components/CSF/csfCarousel";
import GalleryLayout from "@/components/GalleryLayout";
import Header from "@/components/Header";
import { csfImages } from "@/constants/csfConstants";
import React from "react";

const CSF = () => {
  return (
    <main className="bg-smokeWhite">
      <header>
        <Header header="CSF" />
      </header>

      <div className="max-w-[1000px] px-4 mx-auto">
        <div className="my-10">
          <p className="font-sofia-bold text-darkmaroon tracking-widest text-sm mb-5">
            ABOUT CSF
          </p>
          <h2 className=" text-3xl xs:text-4xl md:text-5xl font-sofia-bold text-darkmaroon tracking-tight mb-5">
            Calvary Student Fellowship
          </h2>
          <p className=" text-lg tracking-tight leading-snug ">
            Calvary Student Fellowship (CSF) is a student fellowship expression
            under Collins Throne Ministries. It is the Campus fellowship of the
            Mother Church - Calvary Hill Church. Its general overseer and
            founder is Pastor Collins Throne.
          </p>
        </div>

        <CsfCarousel />

        <div>
          <div className="my-10">
            <p className="font-sofia-bold text-darkmaroon tracking-widest text-sm mb-2 md:mb-5 ">
              IT&apos;S VISION
            </p>
            <h2 className=" text-3xl xs:text-4xl md:text-5xl font-sofia-bold text-darkmaroon tracking-wide md:mb-5 mb-2 ">
              Making Disciples
            </h2>
            <p className=" font-sofia-regular text-lg tracking-tight text-lightGrey mb-5">
              The Vision of Calvary Student Fellowship is to:
            </p>

            <ul className=" text-lg tracking-tight ">
              <li className="my-2">
                1. Ignite the souls of fellow students in radically following
                Jesus by the preaching of the gospel.
              </li>

              <li className="my-2">
                2. Make disciples of campus students and make campus student
                disciplers.
              </li>
              <li className="my-2">
                3. Helping students to discover their true purpose in Christ
                before leaving the four walls of the University and pursuing
                same after School.
              </li>

              <li className="my-2">4. Radically transforming</li>

              <li>
                <p className="mt-7 mb-2">
                  Through CSF Formerly known as The Gospel Mission (TGM),
                  Collins Throne Ministries has been able to disciple hundreds
                  of students with the Gospel of Christ and the supernatural.
                </p>
                <p className="my-4">
                  Currently, there are just two chapters of CSF. However, the
                  mission is to have CSF in numerous Campus or University around
                  Nigeria, Africa and beyond.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px]">
        <GalleryLayout images={csfImages} />
      </div>
    </main>
  );
};

export default CSF;
