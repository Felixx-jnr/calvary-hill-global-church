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

      <section className="md:w-[85%] w-[95%] mx-auto">
        <div>
          <div className=" overflow-hidden ">
            <Image
              src="/gratia.avif"
              alt=""
              width={2000}
              height={2000}
              className=" w-full object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className=" md:text-5xl text-3xl text-darkmaroon font-sofia-bold tracking-tight mt-5 mb-5 ">
              GIVING
            </h2>

            <div className="bg-white inline-block m p-4 lg:w-[40%] md:w-[50%] w-[80%]">
              <h3 className="sm:text-3xl text-xl text-darkmaroon font-sofia-bold tracking-tight">
                6060177116
              </h3>
              <h3 className="sm:text-3xl text-xl text-darkmaroon font-sofia-bold tracking-tight">
                Fidelity Bank
              </h3>
              <span className=" font-semibold text-lightGrey text-sm sm:text-xl  block mt-3">
                Name: <span>The Gospel Movement</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="md:w-[85%] w-[95%] mx-auto mt-10">
          <div className="  overflow-hidden ">
            <Image
              src="/gratia.avif"
              alt=""
              width={2000}
              height={2000}
              className=" w-full object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="md:text-5xl text-2xl text-darkmaroon font-sofia-bold tracking-tight mt-5 mb-5">
              PARTNERSHIP
            </h2>

            <div className="bg-white inline-block mb-8 lg:w-[50%] md:w-[60%] w-[90%] px-1">
              <div className=" my-4 ">
                <span className=" font-semibold text-lightGrey text-sm sm:text-lg block mb-5">
                  TO PARTNER with the ministry of our man of God, kindly send a
                  mail to;
                </span>

                <Link
                  href="mailto:collinstministries.partnership@gmail.com?subject=Partnership"
                  className=" hover:text-darkmaroon text-maroon text-sm sm:text-lg font-sofia-bold break-words "
                >
                  collinstministries.partnership@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Giving;
