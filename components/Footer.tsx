import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const footerLinks = [
  { link: "Home", src: "/" },
  { link: "About", src: "/about" },
  { link: "Sermons", src: "/sermons" },
  { link: "Devotionals", src: "/devotionals" },
  { link: "Articles", src: "/articles" },
  { link: "CSF", src: "/csf" },
  { link: "Giving", src: "/giving" },
  { link: "Contact", src: "/contact" },
];

const Footer = () => {
  return (
    <footer className=" relative ">
      <div className=" footer-cover pb-2">
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

          <div className="mt-20 sm:flex block px-2 xs:px-2 md:w-[90%] mid:w-[75%] mx-auto justify-between ">
            <div className="">
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
              <p className="tex-t-base font-extralight">
                No. 152, Awolowo Way, Allen Junction, Ikeja, Lagos, Nigeria
              </p>

              <p className="text-base break-words my-2 font-extralight">
                contact@collinsthroneministries.org
              </p>

              <p className="text-base my-2 font-extralight">
                +234 805 101 8171 , +234 814 817 1728
              </p>

              <p className="text-base font-extralight">Pastor Collins Throne</p>
            </div>

            <div className=" max-sm:mt-4 sm:mx-10">
              <h4 className="text-lg font-sofia-bold">Links</h4>
              <div className=" flex sm:flex-col max-sm:gap-2 max-sm:flex-wrap ">
                {footerLinks.map((footerLink) => (
                  <Link
                    key={footerLink.link}
                    href={footerLink.src}
                    className=" self-start relative text-base font-extralight hover:border-b-2 my-1"
                  >
                    {footerLink.link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="max-sm:mt-4 ">
              <h4 className="text-lg font-sofia-bold">Socials</h4>
              <div className="max-sm:flex max-sm:justify-left max-sm:gap-2 max-sm:flex-wrap ">
                <Link
                  href={""}
                  className="flex items-center gap-1 p-1 max-sm:p-2 rounded-[50%] xs:rounded-full hover:bg-darkmaroon  "
                >
                  <IoLogoInstagram className=" text-xl" />
                  <span className=" text-sm max-xs:hidden font-extralight">
                    Instagram
                  </span>
                </Link>

                <Link
                  href={""}
                  className="flex items-center gap-1 max-sm:p-2 sm:my-2 p-1 rounded-[50%] xs:rounded-full hover:bg-darkmaroon"
                >
                  <FaYoutube className="text-xl" />
                  <span className="  text-sm max-xs:hidden font-extralight">
                    Youtube
                  </span>
                </Link>

                <Link
                  href={""}
                  className="flex items-center gap-1 max-sm:p-2 sm:my-2 p-1 rounded-[50%] xs:rounded-full hover:bg-darkmaroon"
                >
                  <FaTelegramPlane className=" text-xl" />
                  <span className=" text-sm font-extralight max-xs:hidden">
                    Telegram
                  </span>
                </Link>

                <Link
                  href={""}
                  className="flex items-center gap-1 sm:my-2 p-1 max-sm:p-2 rounded-[50%] xs:rounded-full hover:bg-darkmaroon"
                >
                  <FaFacebookSquare className="text-xl" />{" "}
                  <span className="  text-sm max-xs:hidden font-extralight">
                    {" "}
                    Facebook{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className=" mt-3 mx-auto w-[98%] border-t-[1px] border-[#4C4C4C] pt-2 text-smokeWhite font-extralight text-xs">
          The Calvary Hill Global Church © 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
