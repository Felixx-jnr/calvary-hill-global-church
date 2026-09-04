import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiAirplayaudio } from "react-icons/si";
import { SiAudiobookshelf } from "react-icons/si";
import { BiDonateHeart } from "react-icons/bi";
import { FaBible } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const social = [
  {
    id: 1,
    title: "Youtube",
    desc: "Watch our latest sermons and church events.",
    icon: FaYoutube,
    link: "https://www.youtube.com/@calvaryhillchurch3641",
    iconColor: " #FF0000",
    cardColor: "#FFE5E5",
    titleColor: "#CC0000",
    descColor: "#374151",
  },
  {
    id: 2,
    title: "Telegram",
    desc: "Get our real-time updates and listen to sermons.",
    icon: FaTelegram,
    link: "https://t.me/CalvaryHillGlobalChurch",
    iconColor: " #229ED9",
    cardColor: "#E5F5FC",
    titleColor: "#187FAF",
    descColor: "#374151",
  },

  {
    id: 3,
    title: "Mixlr",
    desc: "Follow us on Mixlr for live streaming and audio content.",
    icon: SiAirplayaudio,
    link: "https://calvary-hill-global-church.mixlr.com/",
    iconColor: " #ED1C24",
    cardColor: "#FDE8E9",
    titleColor: "#BD161D",
    descColor: "#374151",
  },

  {
    id: 4,
    title: "Instagram",
    desc: "Get sermon highlights and edifying content.",
    icon: FaInstagram,
    link: "https://www.instagram.com/calvaryhillglobalchurch?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
    iconColor: " #E1306C",
    cardColor: "#FCE8EF",
    titleColor: "#B52657",
    descColor: "#374151",
  },

  {
    id: 5,
    title: "Facebook",
    desc: "Get sermon highlights and edifying content.",
    link: "https://www.facebook.com/share/1BQsc2diCx/?mibextid=wwXIfr",
    icon: FaFacebook,
    iconColor: " #1877F2",
    cardColor: "#E7F0FE",
    titleColor: "#125FC2",
    descColor: "#374151",
  },

  {
    id: 6,
    title: "Location",
    desc: "Find us on Google Maps and get directions to our church.",
    icon: FaLocationDot,
    link: "https://maps.app.goo.gl/SjVrvfBNAT46BGYg8?g_st=ics",
    iconColor: "#4285F4",
    cardColor: "#E8F0FE",
    titleColor: "#1A73E8",
    descColor: "#374151",
  },

  {
    id: 7,
    title: "Devotional",
    desc: "Read our daily devotionals and grow in your faith.",
    icon: FaBible,
    link: "/devotional",
    iconColor: "#8B5CF6",
    cardColor: "#F0EAFE",
    titleColor: "#6D28D9",
    descColor: "#374151",
  },
  {
    id: 8,
    title: "Donate",
    desc: "Partner with what God is doing through us",
    icon: BiDonateHeart,
    link: "/giving",
    iconColor: "#16A34A",
    cardColor: "#E7F6EC",
    titleColor: "#15803D",
    descColor: "#374151",
  },
];
