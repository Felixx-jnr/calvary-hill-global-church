import Header from "@/components/Header";
import MixlrPlayer from "@/components/live/MixlrPlayer";
import YouTubeLive from "@/components/live/YoutubeLive";
import React from "react";

const Live = () => {
  return (
    <main className="bg-smokeWhite">
      <header>
        <Header header="Live" />
      </header>

      <section className=" w-[95%] sm:w-[80%] mx-auto ">
        <h2 className=" font-sofia-bold text-darkmaroon text-4xl md:text-5xl  ">
          Mixlr Stream
        </h2>

        <p className="my-6 text-lightGrey text-sm md:text-xl leading-tight">
          Calvary Hill Church is Live on Mixlr. Join In the stream and be
          blessed.
        </p>

        <MixlrPlayer />
      </section>

      <section className=" w-[95%] sm:w-[80%] mx-auto">
        <h2 className=" font-sofia-bold text-darkmaroon text-4xl md:text-5xl  ">
          YouTube Stream
        </h2>

        <p className="my-6 text-lightGrey text-sm md:text-xl leading-tight">
          Calvary Hill Church is Live on YouTube. Join In the stream and be
          blessed.
        </p>

        <YouTubeLive />
      </section>
    </main>
  );
};

export default Live;
