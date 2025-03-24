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

      <section className="mx-auto w-[95%] sm:w-[80%]">
        <h2 className="font-sofia-bold text-darkmaroon text-3xl xs:text-4xl md:text-5xl">
          Mixlr Stream
        </h2>

        <p className="my-3 text-lightGrey text-xs sm:text-sm md:text-lg leading-tight">
          Calvary Hill Church is Live on Mixlr. Join In the stream and be
          blessed.
        </p>

        <MixlrPlayer />
      </section>

      <section className="mx-auto py-5 w-[95%] sm:w-[80%]">
        <h2 className="font-sofia-bold text-darkmaroon text-3xl xs:text-4xl md:text-5xl">
          YouTube Stream
        </h2>

        <p className="my-3 text-lightGrey text-xs sm:text-sm md:text-lg leading-tight">
          Calvary Hill Church is Live on YouTube. Join In the stream and be
          blessed.
        </p>

        <YouTubeLive />
      </section>
    </main>
  );
};

export default Live;
