import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PlayerProvider } from "@/context/PlayerContext";
import dynamic from "next/dynamic";

// Lazy-load GlobalAudioPlayer (client-side only)
const GlobalAudioPlayer = dynamic(
  () => import("@/components/GlobalAudioPlayer"),
  {
    ssr: false,
  }
);

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Calvary Hill Global Church",
  description:
    "Our Vision as a Church is to make Christ known through global evangelism to build a strong local church bonded by love and Supernatural manifestation.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <PlayerProvider>
          {children}
          <GlobalAudioPlayer />
        </PlayerProvider>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
