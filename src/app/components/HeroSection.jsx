"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-950 via-blue-700 to-blue-400">
              Hello, I'm {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Daniel",
                2500,
                "System Test Engineer",
                1500,
                "Passionate in Automation",
                1500,
                "Professional at IBM",
                1500,
              ]}
              wrapper="span"
              speed={2}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur, quasi magnam error a voluptas perspiciatis harum, atque
            ratione praesentium incidunt animi, necessitatibus iure. Placeat vel
            facere fugit similique ipsam labore.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-950 via-blue-700 to-blue-400 text-white">
              Contact Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-950 via-blue-700 to-blue-400 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Second Button
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/images/avatar.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Hero Avatar"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
