import Header from "@/components/Header";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Giving = () => {
  return (
    <main className="bg-smokeWhite">
      <header className="">
        <Header header="Giving" />
      </header>

      <section className="mx-auto w-[95%] md:w-[85%]">
        <div>
          <div className="h-80 overflow-hidden">
            <Image
              src="/giving.jpg"
              alt=""
              width={2000}
              height={2000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="mt-5 mb-5 font-sofia-bold text-darkmaroon text-3xl md:text-5xl tracking-tight"></h2>

            <div className="inline-block bg-white shadow-md p-4 w-[80%] md:w-[50%] lg:w-[50%] m">
              <h3 className="font-sofia-bold text-darkmaroon text-xl sm:text-3xl tracking-tight">
                1928765624
              </h3>
              <h3 className="font-sofia-bold text-darkmaroon text-xl sm:text-3xl tracking-tight">
                Access Bank
              </h3>
              <span className="block mt-3 font-semibold text-lightGrey text-sm sm:text-xl">
                Name: <span>Calvary Hill Global Church </span>
              </span>

              {/* GIVE WIT CARD */}
              {/* <div className="flex flex-col items-center mt-4">
                <Link href="/donate">
                  <p className="font-semibold text-maroon hover:text-darkmaroon hover:underline">
                    Give With Card
                  </p>
                  <div className="w-28">
                    <img
                      src="/card-removebg-preview.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto mt-10 w-[95%] md:w-[85%]">
          <div className="text-center">
            <h2 className="mt-5 mb-5 font-sofia-bold text-darkmaroon text-2xl md:text-5xl tracking-tight">
              PARTNERSHIP
            </h2>

            <div className="inline-block mb-8 l">
              <div className=" ">
                <span className="block font-semibold text-lightGrey text-sm sm:text-lg">
                  TO PARTNER with the ministry of our man of God, kindly send a
                  mail to:
                  <Link
                    href="mailto:collinstministries.partnership@gmail.com?subject=Partnership"
                    className="font-sofia-bold text-maroon hover:text-darkmaroon text-sm sm:text-lg break-words"
                  >
                    {" "}
                    collinstministries.partnership@gmail.com
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Giving;
