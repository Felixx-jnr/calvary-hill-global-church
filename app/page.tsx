import MiniCarousel from "@/components/MiniCarousel";
import Slider from "@/components/Slider";
import React from "react";

const Home = () => {
  return (
    <main>
      <div>
        <Slider />
      </div>

      <section className=" mt-32  ">
        <div className="w-[80%] mx-auto">
          <p className=" font-Kumbh text-darkmaroon">CALVARY HILL CHURCH</p>
          <h1 className=" font-Sofia text-darkmaroon mt-2 mb-2">
            We Are The Triumphant Church
          </h1>
          <p className=" font-Kumbh font-bold">
            Bringing men to the place of triumph through the revelation of
            Christ and positioning them for kingdom advancement
          </p>
        </div>
        <div className=" w-[95%] mx-auto">
          <MiniCarousel />
        </div>
      </section>

      {/* <section className=" mt-36 w-[90%] mx-auto ">
        <div>LOGO</div>
        <p>OUR VISION</p>
        <h1>Making Christ Known</h1>
        <p>
          Our Vision as a Church is to make Christ known through global
          evangelism to build a strong local church bonded by love and
          Supernatural manifestation through discipleship
        </p>
        <div>image</div>
        <button>ABOUT US</button>
      </section> */}
    </main>
  );
};

export default Home;
