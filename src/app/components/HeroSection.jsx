"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-950 via-blue-700 to-blue-400">
              Hello, I'm {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Daniel",
                4000,
                "System Test Engineer",
                3000,
                "Python Developer",
                3000,
                "Automation Lover",
                3000,
              ]}
              wrapper="span"
              speed={2}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate about Automation Scripting and Application Development, I
            derive immense satisfaction from creating streamlined and reliable
            automation scripts. My work not only saves valuable time and effort
            but also enhances team productivity. Furthermore, my enthusiasm
            drives me to continuously explore new technologies, ensuring a
            dynamic skill set that positions me as a versatile developer ready
            to tackle evolving challenges.
          </p>
          <div>
            <Link href="#contact">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 text-white">
                Contact Me
              </button>
            </Link>
            {/* <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Second Button
              </span>
            </button> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/images/avatar.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Hero Avatar"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
