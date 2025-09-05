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
    <footer className="relative">
      <div className="pb-2 footer-cover">
        <div className="text-white">
          <div className="mx-auto w-[85%] text-center">
            <p className="pt-20 font-sofia-bold text-xs sm:text-sm">
              GET INVOLVED
            </p>

            <h3 className="my-8 font-sofia-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
              We believe a real relationship with Jesus allows you to live life
              to the fullest.
            </h3>

            <button className="bg-white hover:bg-lightGrey px-6 sm:px-12 py-4 sm:py-5 rounded-none font-sofia-bold text-black hover:text-white text-xs tracking-[2px]">
              CONTACT US
            </button>
          </div>

          <div className="block sm:flex justify-between mx-auto mt-10 px-2 xs:px-2 md:w-[90%] mid:w-[75%]">
            <div className="">
              <div>
                <Image
                  className="w-44"
                  width={2000}
                  height={2000}
                  alt=""
                  src="/CHC-logo-white.png"
                />
              </div>
              <br />
              <p className="font-extralight text-sm sm:text-base capitalize">
                avenue 2 wealth multipurpose event center, saphire hall, <br />
                no 7 olufunmilola okikiolu street, off toyin street ikeja, lagos
              </p>

              <p className="my-2 font-extralight text-base break-words">
                contact@collinsthroneministries.org
              </p>

              <p className="my-2 font-extralight text-base">
                +234 805 101 8171 , +234 814 817 1728
              </p>

              <p className="font-extralight text-base">Pastor Collins Throne</p>
            </div>

            <div className="sm:mx-10 max-sm:mt-4">
              <h4 className="font-sofia-bold text-lg">Links</h4>
              <div className="flex sm:flex-col max-sm:flex-wrap max-sm:gap-2">
                {footerLinks.map((footerLink) => (
                  <Link
                    key={footerLink.link}
                    href={footerLink.src}
                    className="relative self-start hover:bg-darkmaroon my-1 p-1 rounded-full font-extralight text-base"
                  >
                    {footerLink.link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="max-sm:mt-4">
              <h4 className="font-sofia-bold text-lg">Socials</h4>
              <div className="max-sm:flex max-sm:flex-wrap max-sm:justify-left max-sm:gap-2">
                <Link
                  href={""}
                  className="flex items-center gap-1 hover:bg-darkmaroon p-1 max-sm:p-2 rounded-[50%] xs:rounded-full"
                >
                  <IoLogoInstagram className="text-xl" />
                  <span className="max-xs:hidden font-extralight text-sm">
                    Instagram
                  </span>
                </Link>

                <Link
                  href={""}
                  className="flex items-center gap-1 hover:bg-darkmaroon sm:my-2 p-1 max-sm:p-2 rounded-[50%] xs:rounded-full"
                >
                  <FaYoutube className="text-xl" />
                  <span className="max-xs:hidden font-extralight text-sm">
                    Youtube
                  </span>
                </Link>

                <Link
                  href={""}
                  className="flex items-center gap-1 hover:bg-darkmaroon sm:my-2 p-1 max-sm:p-2 rounded-[50%] xs:rounded-full"
                >
                  <FaTelegramPlane className="text-xl" />
                  <span className="max-xs:hidden font-extralight text-sm">
                    Telegram
                  </span>
                </Link>

                <Link
                  href={""}
                  className="flex items-center gap-1 hover:bg-darkmaroon sm:my-2 p-1 max-sm:p-2 rounded-[50%] xs:rounded-full"
                >
                  <FaFacebookSquare className="text-xl" />{" "}
                  <span className="max-xs:hidden font-extralight text-sm">
                    {" "}
                    Facebook{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-3 pt-2 border-[#4C4C4C] border-t-[1px] w-[98%] font-extralight text-xs text-smokeWhite">
          The Calvary Hill Global Church © 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
