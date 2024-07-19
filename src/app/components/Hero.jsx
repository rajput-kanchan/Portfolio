/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="lg:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-cyan-600 to-neutral-400 ">
              Hello There! I'm
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Kanchan Rajput",
                1000,
                "Frontend Developer",
                1000,
                "React Js Developer",
                1000,
                "Web Developer",
                1000,
                "MERN Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a Front End Developer With 1 Year Of Experience Building And
            Maintaining Responsive Websites. I enjoy building web applications.
            My focus is <span className="font-semibold">React Js.</span>
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-bl from-purple-600 via-transparent to-cyan-700 text-white font-semibold hover:bg-gradient-to-r hover:border border-black hover:transition hover:delay-250">
              <a href="#contact">Hire Me</a>
            </button>

            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-emerald-800 via-cyan-700 to-purple-500 bg-transparent text-white mt-4">
              <a
                href="/src/app/resume/Kanchan_Rajput_Frontend_Resume.pdf"
                download="cv.pdf"
              >
                <span className="block bg-[#121212] rounded-full px-5 py-2 hover:bg-transparent hover:text-white">
                  Download CV
                </span>
              </a>
            </button>
          </div>
        </motion.div>
        {/**? <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default Hero;
