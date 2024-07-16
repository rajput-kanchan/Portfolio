"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Developed a professional portfolio website using HTML, CSS, and JavaScript, featuring dynamic design and seamless navigation. Showcased projects with elegant animations, leaving a lasting impression on visitors",
    image: "/images/projects/portfolio.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kancrajp/Portfolio",
  },
  {
    id: 2,
    title: "YouTube Clone",
    description:
      "Built a YouTube replica using ReactJs with a responsive design. Leveraged Material-UI for modern design elements and optimized performance across devices for a seamless user experience",
    image: "/images/projects/yt.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kancrajp/YouTube_Clone",
  },
  {
    id: 3,
    title: "Frontend Projects",
    description:
      "Developed interactive web projects using HTML, CSS, and JavaScript, design with responsive layouts for seamless user experiences.Leveraged modern design and optimal performance across devices",
    image: "/images/projects/html.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kancrajp/Frontend-projects",
  },
  {
    id: 4,
    title: "Waste Management Website",
    description:
      "Created a waste management project utilizing HTML, CSS, and JavaScript to facilitate efficient waste disposal and recycling. Employed responsive design principles for seamless accessibility across devices, ensuring an intuitive user experience",
    image: "/images/projects/css.jpg",
    tag: ["All", "Others"],
    gitUrl: "https://github.com/kancrajp/Waste_Management",
  },
  {
    id: 5,
    title: "Real Estate Website",
    description:
      "Built a React.js real estate clone, showcasing property listings, dynamic search filters, and intuitive map integration for streamlined property exploration. Incorporated responsive design principles to deliver a seamless browsing experience across devices",
    image: "/images/projects/react-1.jpg",
    tag: ["All", "Others"],
    gitUrl: "https://github.com/kancrajp/Real_Estate",
  },
  {
    id: 6,
    title: "Netflix Clone",
    description:
      "Created Netflix clone project with React.js, Tailwind CSS, and Redux. It includes multilingual functionality, allowing users to switch between languages seamlessly, enhancing accessibility and user experience across different language preferences",
    image: "/images/projects/netflix.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kancrajp/Netflix-Project",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="text-white" id="projects">
      <h2 className="text-center text-5xl font-semibold mt-12 mb-6">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mt-8">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        {/* Render "Others" tag button only for medium and large devices */}
        <div className="hidden md:block">
          <ProjectTag
            onClick={handleTagChange}
            name="Others"
            isSelected={tag === "Others"}
          />
        </div>
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.3 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
