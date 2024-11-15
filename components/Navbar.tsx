"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaArrowRight } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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
  const [showRes, setShowRes] = useState(false);

  const staggerVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between items on open
        staggerDirection: 1, // Normal forward direction for opening
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1, // Reverse order for closing
      },
    },
  };

  const childVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Toggle menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden"; // Prevent scrolling on root element
      document.body.style.overflow = "hidden"; // Prevent scrolling on body
    } else {
      document.documentElement.style.overflow = ""; // Restore scrolling
      document.body.style.overflow = ""; // Restore scrolling
    }
    return () => {
      document.documentElement.style.overflow = ""; // Clean up overflow
      document.body.style.overflow = ""; // Clean up overflow
    };
  }, [isOpen]);

  const triggerShow = () => {
    setShow(!show);
  };

  const triggerShowRes = () => {
    setShowRes(!showRes);
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
    open: { rotate: -45, y: -7 },
    closed: { rotate: 0, y: 0 },
  };

  const isHome = pathname === "/"; // Check if it's the home route

  const staticPaths = ["/donate"];
  const noNavigationMenu =
    staticPaths.includes(pathname || "") ||
    /^\/articles\/.*/.test(pathname || "") ||
    /^\/testimonies\/.*/.test(pathname || "") ||
    /^\/devotionals\/.*/.test(pathname || "");

  if (noNavigationMenu) {
    return null;
  }

  return (
    <nav
      className={
        isHome
          ? " text-smokeWhite font-sofia-regular absolute w-full top-0 z-10"
          : " text-darkmaroon bg-white font-sofia-regular absolute w-full top-0 z-10"
      }
    >
      <div className=" py-4 flex justify-around max-mid:justify-between mx-5 max-mid:mx-5 items-center">
        {/* LOGO */}
        <Link
          className="text-2xl z-10"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={
              isHome || isOpen
                ? "/CHC-logo-white.png"
                : "/cropped-CHC-logo-black-1.png"
            }
            alt="Logo"
            width={170}
            height={1}
          />
        </Link>

        {/* Hamburger Menu */}
        <div
          className={` cursor-pointer z-10 ml-auto mid:hidden  ${isOpen ? " absolute right-6 hover:rotate-180 transition" : "  max-md:right-3"}`}
          onClick={toggleMenu}
        >
          <motion.div
            className={` w-7 h-[3px] my-1 rounded-full  ${isHome || isOpen ? "bg-smokeWhite " : " bg-darkmaroon"}`}
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerLine1}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className={` w-7 h-[3px] my-1 rounded-full  ${isHome || isOpen ? "bg-smokeWhite " : " bg-darkmaroon"}`}
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerLine2}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className={` w-7 h-[3px] my-1 rounded-full  ${isHome || isOpen ? "bg-smokeWhite " : " bg-darkmaroon"}`}
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
                  <span
                    className={
                      isHome
                        ? " font-thin hover:border-b-2 hover:border-white pb-2"
                        : " font-thin hover:border-b-2 hover:border-darkmaroon pb-2"
                    }
                  >
                    Resources
                  </span>
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
        <div className=" flex items-center justify-end">
          <IoIosSearch className="text-3xl mid:mr-2 md:mx-3 mx-2" />

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
        <AnimatePresence>
          {isOpen && (
            <div className="">
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={childVariants}
                className="absolute top-0 left-0 w-full bg-darkBrown shadow-md mid:hidden h-screen"
              >
                <motion.ul
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={staggerVariants}
                  className="flex flex-col h-screen items-center justify-center pt-4 text-[#CAC2C0] "
                >
                  <motion.li
                    className="flex items-center "
                    variants={childVariants}
                  >
                    <div className=" font-bold text-2xl my-2">
                      <Link
                        className="text-2xl my-3 font-bold hover:text-[#fff] mr-3"
                        href="/about"
                        onClick={toggleMenu}
                      >
                        About
                      </Link>
                    </div>

                    <button onClick={triggerShow}>
                      <FaArrowRight />
                    </button>
                  </motion.li>

                  {show && (
                    <li className="">
                      <div>
                        <Link
                          href="/doctrine"
                          className=" block font-thin p-2 tracking-wide text-center hover:text-[#fff] "
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

                  <motion.li
                    className="flex items-center "
                    variants={childVariants}
                  >
                    <div className=" font-bold text-2xl my-3">
                      <Link
                        className="text-2xl my-2 font-bold hover:text-[#fff] mr-3"
                        href="/about"
                        onClick={toggleMenu}
                      >
                        Resources
                      </Link>
                    </div>

                    <button
                      onClick={triggerShowRes}
                      className=" "
                    >
                      <FaArrowRight />
                    </button>
                  </motion.li>

                  {showRes && (
                    <li className="">
                      <div>
                        <Link
                          href="/articles"
                          className=" block font-thin p-2 tracking-wide text-center hover:text-[#fff]"
                          onClick={toggleMenu}
                        >
                          Articles
                        </Link>
                      </div>

                      <div>
                        <Link
                          href="/devotionals"
                          className=" block font-thin p-2 tracking-wide text-center hover:text-[#fff]"
                          onClick={toggleMenu}
                        >
                          Devotionals
                        </Link>
                      </div>
                    </li>
                  )}

                  {navigationLinks.map((link) => (
                    <motion.li
                      key={link.label}
                      className=" text-2xl my-2 font-bold hover:text-[#fff]"
                      variants={childVariants}
                    >
                      <Link
                        href={link.route}
                        onClick={toggleMenu}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.div
                    className=" text-2xl flex gap-4 mt-8 pt-4 border-t-[0.1px] border-lightGrey w-[90%] justify-center"
                    variants={staggerVariants}
                  >
                    <Link href={""}>
                      <IoLogoInstagram />
                    </Link>
                    <Link href={""}>
                      <FaYoutube />
                    </Link>
                    <Link href={""}>
                      <FaTelegramPlane />{" "}
                    </Link>{" "}
                  </motion.div>
                </motion.ul>
              </motion.ul>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
