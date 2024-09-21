"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Links object
const navigationLinks = [
  {
    route: "/about",
    label: "About",
  },
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

  // Toggle menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);

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
    <nav className="bg-white fixed shadow-md w-full top-0 z-10">
      <div className=" mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Navbar</h1>

        {/* Hamburger Menu */}
        <div
          className="md:hidden"
          onClick={toggleMenu}
        >
          <motion.div
            className="w-6 h-0.5 bg-black my-1"
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerLine1}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-black my-1"
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerLine2}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-black my-1"
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerLine3}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.route}
                className="text-gray-800 hover:text-gray-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="max-md:hidden">
          <button >Search</button> 

          <Link className="max-md:hidden" href="/giving">Give Now</Link>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.ul
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-full left-0 w-full bg-white shadow-md md:hidden"
          >
            {navigationLinks.map((link) => (
              <ul>
              <li
                key={link.label}
                className="border-b"
              >
                <Link
                  href={link.route}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
              </ul>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
