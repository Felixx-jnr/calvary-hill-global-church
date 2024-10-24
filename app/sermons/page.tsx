import React from "react";
import Header from "@/components/Header";
import SermonPlayer from "@/components/SermonPlayer";

const SermonList = () => {
  return (
    <main className="bg-smokeWhite">
      <header>
        <Header header="Sermons" />
      </header>
      <div>
        <SermonPlayer />
      </div>
    </main>
  );
};

export default SermonList;
