"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React Js</li>
        <li>Mongo DB</li>
        <li>Node Js</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Developer</li>
        <li>Experience In HTML, CSS & JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors of Computer Applications</li>
        <li>University of Pune, Maharashtra</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>German Language A1</li>
        <li>German Language A2 </li>
        <li>Data Analytics</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="container mx-auto px-4 py-8 md:py-10 flex flex-wrap items-start">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 pr-8 md:pr-14"
        >
          <div className="sticky top-0">
            <div
              style={{ maxWidth: "100%", height: "auto", marginTop: "4rem" }}
            >
              <Image
                className="rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
                src="/images/user.png"
                width={480}
                height={500}
                alt="about"
              />
            </div>
          </div>
        </motion.div>

        {/* About Me Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-10 mb-4 md:-mt-1">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
            I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have 1 year of
            experience working with JavaScript, HTML and CSS and have strong
            knowledge of React Js, React-Router-DOM, Hooks, Bundlers and Redux.
            I am a quick learner and I am always looking to expand my knowledge
            and skill set. I am a team player and I am excited to collaborate
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-6">
            <Button
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </Button>

            <Button
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </Button>

            {/* Show "Education" tab button only on medium and large devices */}
            <div className="hidden md:block">
              <Button
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </Button>
            </div>

            <Button
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </Button>
          </div>
          <div className="mt-6">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
          {/* <div className="flex flex-wrap justify-start mt-6 space-x-4">
            {TAB_DATA.map((item) => (
              <Button
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </Button>
            ))}
          </div>

          <div className="mt-6">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
