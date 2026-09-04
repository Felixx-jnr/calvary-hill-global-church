import React from "react";
import SocialCard from "@/components/SocialCard";
import { social } from "@/constants/socialConstant";

const Socials = () => {
  return (
    <main className="bg-[url('/devotional-bg.png')]">
      <div className="bg-black/50 w-full h-full">
        <section className="flex flex-col justify-center items-center px-4 pt-8 pb-8 text-center">
          <div className="mb-8">
            <h1 className="font-sofia-bold text-smokeWhite text-7xl uppercase">
              stay <span className=""> connected</span>
            </h1>
            <p className="mt-2 font-semibold text-darkGrey text-semibold text-lg uppercase tracking-tight">
              one church. one family. everywhere you are.
            </p>

            <p className="mt-2 text-smokeWhite text-lg">
              Follow us, listen to messages, join our community and stay
              connected throughout your journey.
            </p>
          </div>

          <div className="justify-items-center gap-4 grid md:grid-cols-2">
            {social.map((item) => (
              <SocialCard
                key={item.id}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
                link={item.link}
                iconColor={item.iconColor}
                cardColor={item.cardColor}
                titleColor={item.titleColor}
                descColor={item.descColor}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Socials;
