"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";

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
    route: "/articles",
    label: "Articles",
  },
  {
    route: "/devotionals",
    label: "Devotionals",
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
];

const Navbar = () => {
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

  return (
    <nav className=" bg-maroon text-smokeWhite font-Sofia fixed shadow-md w-full top-0 z-10">
      <div className=" py-4 flex justify-around max-mid:justify-between mx-5 max-mid:mx-5 items-center">
        {/* LOGO */}
        <Link
          className="text-2xl z-10"
          href="/"
        >
          <Image
            src="/CHC-logo-white.png"
            alt="Logo"
            width={170}
            height={1}
          />
        </Link>

        {/* Hamburger Menu */}
        <div
          className={`${isOpen ? "z-10 ml-auto mid:hidden absolute right-3" : " z-10 ml-auto mid:hidden max-md:absolute max-md:right-3"}`}
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
                    className=" font-thin hover:border-b-2 pb-2 hover:text-white"
                  >
                    About
                  </Link>
                </li>
              </TooltipTrigger>
              <TooltipContent className="bg-maroon mt-12 pr-7">
                <li>
                  <Link
                    href="/doctrine"
                    className=" block font-thin p-2 pr-40 tracking-wide"
                  >
                    Doctrine
                  </Link>
                </li>

                <li>
                  <Link
                    href="/leadership"
                    className=" block font-thin p-2 tracking-wide"
                  >
                    Leadership
                  </Link>
                </li>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {navigationLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.route}
                className=" font-thin hover:border-b-2 pb-2 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

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
              <Button className="bg-black rounded-none px-12 py-6 font-bold tracking-widest font-Sofia">
                GIVE NOW
              </Button>
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

                  <li>
                    <Link
                      href="/leadership"
                      className=" block font-thin p-2 tracking-wide text-center hover:text-[#fff]"
                      onClick={toggleMenu}
                    >
                      Leadership
                    </Link>
                  </li>
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
