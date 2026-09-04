import React from "react";
import Header from "@/components/Header";

const Devotional = () => {
  return (
    <main className="bg-[url('/devotional-bg.png')]">
      <div className="bg-black/80 w-full h-full"></div>
      <header>
        <Header header="Devotional" />
      </header>
    </main>
  );
};

export default Devotional;
