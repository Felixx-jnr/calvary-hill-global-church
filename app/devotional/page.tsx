import React from "react";
import Image from "next/image";

const AMAZON_LINK = "https://a.co/d/0fJwhn4r";
const SELAR_LINK =
  "https://selar.com/2x7126h572?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAae9O1WMtTqdXPWUWlZKhsBA8VsqRj83bX01d84p_cCTrRacgcyxr_jV1RgPfQ_aem_xx6ONPqxx4t22ZGQq5eKVQ";

const Devotional = () => {
  return (
    <main className="grid lg:grid-cols-2 bg-smokeWhite mt-20 min-h-screen">
      {/* LEFT — details panel */}
      <div className="flex flex-col justify-center order-2 lg:order-1 px-8 sm:px-14 lg:px-20 py-16 lg:py-0 max-lg:reverse">
        <p className="font-sofia-semibold text-orange text-xs uppercase tracking-[0.4em]">
          Now Available
        </p>

        <h1 className="mt-4 font-sofia-bold text-darkmaroon text-4xl sm:text-5xl leading-tight">
          Dayspring Devotional
        </h1>

        <p className="mt-3 font-sofia-medium text-lightGrey text-lg italic">
          A 100-Day Journey of Transformation, Vol. 1
        </p>

        <div className="bg-orange mt-6 w-14 h-[3px]" />

        <p className="mt-6 max-w-md text-darkBrown/80 leading-relaxed">
          A hundred mornings, a hundred fresh starts. Dayspring Devotional walks
          you through a hundred days of Scriptures, meditation, and prayer,
          written to stir a daily consciousness of God.
        </p>

        <p className="mt-5 font-sofia-semibold text-midGrey text-sm uppercase tracking-widest">
          Collins Throne
        </p>

        <div className="flex sm:flex-row flex-col gap-4 mt-10 max-w-md">
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 hover:bg-darkmaroon py-4 border-2 border-darkmaroon rounded-none font-sofia-semibold text-darkmaroon hover:text-smokeWhite text-sm text-center uppercase tracking-widest transition-colors duration-300"
          >
            Buy on Amazon
          </a>
          <a
            href={SELAR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-orange hover:bg-darkmaroon py-4 rounded-none font-sofia-semibold text-darkmaroon hover:text-smokeWhite text-sm text-center uppercase tracking-widest transition-colors duration-300"
          >
            Get on Selar
          </a>
        </div>
      </div>

      {/* RIGHT — cover image */}
      <div className="relative flex justify-center items-center order-1 lg:order-2 bg-darkmaroon overflow-hidden">
        <div className="relative rounded-sm">
          <Image
            src="/day.jpeg"
            alt="Dayspring Devotional cover"
            width={340}
            height={480}
            priority
            className="rounded-sm w-[240px] sm:w-[300px] h-auto object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Devotional;
