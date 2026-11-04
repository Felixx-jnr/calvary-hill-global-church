"use client";

import Header from "@/components/Header";
import Link from "next/link";
import React, { useState } from "react";
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookSquare,
  FaTelegramPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending contact form:", error);
      setStatus("error");
    }
  };

  return (
    <main className="bg-smokeWhite px-2">
      <header>
        <Header header="Contact" />
      </header>

      <section className="items-start gap-8 lg:gap-16 grid md:grid-cols-[0.8fr_1.2fr] mx-auto mt-10 pb-20 w-[98%] max-w-[1100px]">
        <div>
          <p className="mb-5 font-sofia-bold text-darkmaroon text-sm tracking-widest">
            GET IN TOUCH
          </p>
          <h2 className="mb-5 font-sofia-bold text-darkmaroon text-3xl xs:text-4xl md:text-5xl">
            We&apos;d love to hear from you
          </h2>
          <p className="mb-8 font-medium text-lightGrey tracking-tight">
            Have a question, prayer request, or just want to say hello? Reach
            out to us using the details below or send us a message.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <FaLocationDot className="mt-1 text-darkmaroon text-2xl shrink-0" />
              <p className="font-medium text-lightGrey capitalize">
                avenue 2 wealth multipurpose event center, saphire hall, no 7
                olufunmilola okikiolu street, off toyin street ikeja, lagos
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-darkmaroon text-xl shrink-0" />
              <Link
                href="mailto:uyuoukoh@gmail.com"
                className="font-semibold text-lightGrey hover:text-darkmaroon break-words"
              >
                uyuoukoh@gmail.com
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-darkmaroon text-xl shrink-0" />
              <div className="flex flex-col text-lightGrey tracking-tight">
                <span>
                  <Link
                    className="font-semibold hover:text-darkmaroon hover:underline"
                    href="tel:+2348051018171"
                  >
                    0805 101 8171
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-semibold hover:text-darkmaroon hover:underline"
                    href="tel:+2348148171728"
                  >
                    0814 817 1728
                  </Link>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-darkmaroon text-xl shrink-0" />
              <p className="font-semibold text-lightGrey tracking-tight">
                Sundays, 9:00 AM - 12:00 PM <br /> Wednesdays, 6:00 PM - 8:30PM
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <Link
              target="_blank"
              href="https://www.instagram.com/calvaryhillglobalchurch?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
              className="hover:bg-darkmaroon p-2 border border-darkmaroon rounded-full text-darkmaroon hover:text-white"
            >
              <FaInstagram className="text-xl" />
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/@calvaryhillchurch3641"
              className="hover:bg-darkmaroon p-2 border border-darkmaroon rounded-full text-darkmaroon hover:text-white"
            >
              <FaYoutube className="text-xl" />
            </Link>
            <Link
              target="_blank"
              href="https://t.me/CalvaryHillGlobalChurch"
              className="hover:bg-darkmaroon p-2 border border-darkmaroon rounded-full text-darkmaroon hover:text-white"
            >
              <FaTelegramPlane className="text-xl" />
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/share/1BQsc2diCx/?mibextid=wwXIfr"
              className="hover:bg-darkmaroon p-2 border border-darkmaroon rounded-full text-darkmaroon hover:text-white"
            >
              <FaFacebookSquare className="text-xl" />
            </Link>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-darkmaroon shadow-sm p-6 md:p-10 rounded-lg"
        >
          <div className="gap-4 grid md:grid-cols-2">
            <input
              className="bg-transparent my-2 p-2 border-darkGrey border-b focus:outline-none w-full font-sofia-medium text-white placeholder:text-lightGrey text-base leading-7"
              placeholder="Your Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              className="bg-transparent my-2 p-2 border-darkGrey border-b focus:outline-none w-full font-sofia-medium text-white placeholder:text-lightGrey text-base leading-7"
              placeholder="Your Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            className="bg-transparent my-2 py-2 border-darkGrey border-b focus:outline-none w-full font-sofia-medium text-white placeholder:text-lightGrey text-base leading-7"
            placeholder="Subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            className="bg-transparent my-2 p-2 border-darkGrey border-b focus:outline-none w-full font-sofia-medium text-white placeholder:text-lightGrey text-base leading-7 resize-none"
            placeholder="Your Message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-maroon hover:opacity-80 disabled:opacity-60 mt-6 px-10 py-4 font-sofia-bold text-smokeWhite text-xs tracking-widest disabled:cursor-not-allowed"
          >
            {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
          </button>

          {status === "success" && (
            <p className="mt-4 font-medium text-green-400 text-sm">
              Your message has been sent. We&apos;ll get back to you soon!
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 font-medium text-red-400 text-sm">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default Contact;
