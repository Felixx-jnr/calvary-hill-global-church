import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    name: "Home",
    href: "/",
  },
];

const Footer = () => {
  return (
    <footer className=" relative ">
      <div className=" footer-cover pb-8">
        <div className="   text-white ">
          <div className=" w-[85%] mx-auto text-center">
            <p className=" font-sofia-bold text-xs sm:text-sm pt-20">
              GET INVOLVED
            </p>

            <h3 className=" text-xl sm:text-2xl md:text-3xl lg:text-5xl font-sofia-bold my-8">
              We believe a real relationship with Jesus allows you to live life
              to the fullest.
            </h3>

            <button className=" text-xs bg-white rounded-none px-6 sm:px-12 sm:py-5 py-4 font-sofia-bold tracking-[2px] hover:bg-lightGrey text-black hover:text-white">
              CONTACT US
            </button>
          </div>

          <div className="mt-20 flex justify-around gap-4 w-[90%] mx-auto items-start">
            <div>
              <div>
                <Image
                  className=" w-44 "
                  width={2000}
                  height={2000}
                  alt=""
                  src="/CHC-logo-white.png"
                />
              </div>
              <br />
              <p className="text-lg font-medium">
                No. 152, Awolowo Way, Allen Junction, Ikeja, Lagos, Nigeria
              </p>
              <br />
              <p className="text-lg font-medium break-words">
                contact@collinsthroneministries.org
              </p>
              <br />
              <p className="text-lg font-medium"> +234 805 101 8171</p>
              <p className="text-lg font-medium">+234 814 817 1728</p>
              <br />
              <p className="text-lg font-medium">Pastor Collins Throne</p>
            </div>

            <div className=" ">
              <h4 className="text-lg font-sofia-bold">Links</h4>
              <Link
                href="/"
                className="relative text-lg font-medium my-2 block hover:underline hover:ml-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium my-2 block"
              >
                About
              </Link>
              <Link
                href="/sermons"
                className="text-lg font-medium my-2 block"
              >
                Sermons
              </Link>
              <Link
                href="/devotional"
                className="text-lg font-medium my-2 block"
              >
                Devotionals
              </Link>
              <Link
                href="/csf"
                className="text-lg font-medium my-2 block"
              >
                CSF
              </Link>
              <Link
                href="/giving"
                className="text-lg font-medium my-2 block"
              >
                Giving
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium my-2 block"
              >
                Contact
              </Link>
            </div>

            <div>
              <h4 className="text-lg font-sofia-bold">Get In Touch</h4>
            </div>
          </div>
        </div>

        <p className=" mt-16 mx-auto w-[80%] border-t-[1px] border-[#4C4C4C] pt-6 text-smokeWhite font-semibold">
          The Calvary Hill Global Church © 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
