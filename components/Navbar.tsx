"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Links object
const navigationLinks = [
  {
    route: "/sermons",
    label: "Sermons",
  },

  {
    route: "/csf",
    label: "CSF",
  },
  {
    route: "/live",
    label: "Live",
  },
  {
    route: "/giving",
    label: "Giving",
  },
  {
    route: "/gallery",
    label: "Gallery",
  },
  {
    route: "/testimonies",
    label: "Testimonies",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);

  const triggerShow = () => {
    setShow(!show);
  };

  // Animations for the hamburger menu
  const hamburgerLine1 = {
    open: { rotate: 45, y: 7 },
    closed: { rotate: 0, y: 0 },
  };
  const hamburgerLine2 = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };
  const hamburgerLine3 = {
    open: { rotate: -45, y: -6 },
    closed: { rotate: 0, y: 0 },
  };

  const isHome = pathname === "/"; // Check if it's the home route

  const staticPaths = ["/donate"];
  const noNavigationMenu =
    staticPaths.includes(pathname) ||
    /^\/articles\/.*/.test(pathname) ||
    /^\/testimonies\/.*/.test(pathname) ||
    /^\/devotionals\/.*/.test(pathname);

  if (noNavigationMenu) {
    return null;
  }
  return (
    <nav
      className={
        isHome
          ? " text-smokeWhite font-sofia-regular absolute w-full top-0 z-10"
          : " text-darkmaroon font-sofia-regular absolute w-full top-0 z-10"
      }
    >
      <div className=" py-4 flex justify-around max-mid:justify-between mx-5 max-mid:mx-5 items-center">
        {/* LOGO */}
        <Link
          className="text-2xl z-10"
          href="/"
        >
          <Image
            src={
              isHome ? "/CHC-logo-white.png" : "/cropped-CHC-logo-black-1.png"
            }
            alt="Logo"
            width={170}
            height={1}
          />
        </Link>

        {/* Hamburger Menu */}
        <div
          className={`${isOpen ? "z-10 ml-auto mid:hidden absolute right-6" : " z-10 ml-auto mid:hidden max-md:absolute max-md:right-3"}`}
          onClick={toggleMenu}
        >
          <motion.div
            className="w-8 h-0.5 bg-white my-1 "
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerLine1}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-8 h-0.5 bg-white my-1 "
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerLine2}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-8 h-0.5 bg-white my-1 "
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerLine3}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden mid:flex space-x-7 ">
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <li>
                  <Link
                    href="/about"
                    className={
                      isHome
                        ? " font-thin hover:border-b-2 hover:border-white pb-2"
                        : " font-thin hover:border-b-2 hover:border-darkmaroon pb-2"
                    }
                  >
                    About
                  </Link>
                </li>
              </TooltipTrigger>
              <TooltipContent className="bg-darkBrown mt-8 mr-7 p-5">
                <li>
                  <Link
                    href="/doctrine"
                    className=" block font-thin py-2 mr-40 tracking-wide hover:border-b-2 pb-2 text-white "
                  >
                    Doctrine
                  </Link>
                </li>

                <li>
                  <Link
                    href="/leadership"
                    className=" block font-thin mr-40 py-2  tracking-wide hover:border-b-2 pb-2 text-white"
                  >
                    Leadership
                  </Link>
                </li>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <li>
                  <Link
                    href="/about"
                    className={
                      isHome
                        ? " font-thin hover:border-b-2 hover:border-white pb-2"
                        : " font-thin hover:border-b-2 hover:border-darkmaroon pb-2"
                    }
                  >
                    Resources
                  </Link>
                </li>
              </TooltipTrigger>
              <TooltipContent className="bg-darkBrown mt-8 mr-7 p-5">
                <li>
                  <Link
                    href="/articles"
                    className=" block font-thin py-2 mr-40 tracking-wide hover:border-b-2 pb-2 text-white "
                  >
                    Articles
                  </Link>
                </li>

                <li>
                  <Link
                    href="/devotionals"
                    className=" block font-thin mr-40 py-2  tracking-wide hover:border-b-2 pb-2 text-white"
                  >
                    Devotionals
                  </Link>
                </li>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {navigationLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.route}
                className={
                  isHome
                    ? " font-thin hover:border-b-2 hover:border-white pb-2"
                    : " font-thin hover:border-b-2 hover:border-darkmaroon pb-2"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* BUTTONS */}
        <div className=" flex items-center ">
          <div>
            <Image
              src="/magnifying_glass.svg"
              alt={""}
              width={35}
              height={10}
              className=" mx-3 max-md:absolute max-md:right-10 top-7"
            />
          </div>

          <div>
            <Link
              className="max-md:hidden"
              href="/giving"
            >
              <button className=" text-white bg-maroon hover:bg-darkmaroon rounded-none px-9 py-4 font-bold tracking-widest text-xs">
                GIVE NOW
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.ul
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-screen bg-darkBrown shadow-md mid:hidden overflow-y-auto"
          >
            <ul className="flex flex-col items-center justify-center mt-28 text-[#CAC2C0] ">
              <li className="flex items-center ">
                <div className=" font-bold text-2xl my-3">
                  <Link
                    className="text-3xl my-3 font-bold hover:text-[#fff] mr-3"
                    href="/about"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </div>

                <button
                  onClick={triggerShow}
                  className=" "
                >
                  <FontAwesomeIcon icon={faArrowRight} />{" "}
                </button>
              </li>

              {show && (
                <li className="">
                  <div>
                    <Link
                      href="/doctrine"
                      className=" block font-thin p-2 tracking-wide text-center hover:text-[#fff]"
                      onClick={toggleMenu}
                    >
                      Doctrines
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="/leadership"
                      className=" block font-thin p-2 tracking-wide text-center hover:text-[#fff]"
                      onClick={toggleMenu}
                    >
                      Leadership
                    </Link>
                  </div>
                </li>
              )}

              {navigationLinks.map((link) => (
                <li
                  key={link.label}
                  className=" text-3xl my-3 font-bold hover:text-[#fff]"
                >
                  <Link
                    href={link.route}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
