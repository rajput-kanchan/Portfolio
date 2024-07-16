"use client";

import React, { useRef } from "react";
import { motion, animate, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="text-white" id="skills">
      <div className="flex flex-col gap-9 justify-center">
        <h2 className="text-center text-5xl font-semibold mt-14 -mb-1">
          My Skills
        </h2>
        <ul
          ref={ref}
          className="flex gap-3 flex-wrap items-center py-6 px-3 xl:gap-10 sm:py-14 xl:px-14"
        >
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-purple-300"
          >
            Html
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-green-400"
          >
            Cascading Style Sheet
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-rose-300"
          >
            Java Script
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-teal-500"
          >
            React Js
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-pink-200"
          >
            Bundlers
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-orange-300"
          >
            React Hooks
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-blue-600"
          >
            React-Router-DOM
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-cyan-400"
          >
            Redux
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-yellow-200"
          >
            Tailwind CSS
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-cyan-300"
          >
            Context API
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-violet-300"
          >
            Redux Toolkit
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-pink-200"
          >
            JSX
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-lime-500"
          >
            Props & states
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-indigo-400"
          >
            Functional Components
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-amber-800"
          >
            Class based Components
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-cyan-500"
          >
            Config Drive UI
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-teal-200"
          >
            Babel
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-rose-200"
          >
            React Fragment
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-yellow-200"
          >
            MongoDB
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-emrald-300"
          >
            SQL
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-green-300"
          >
            Material UI
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-pink-300"
          >
            Firebase
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-yellow-300"
          >
            Node JS
          </motion.li>
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="rounded-md p-2 text-sm cursor-pointer bg-black text-white
          hover:bg-white hover:text-black border border-red-300"
          >
            Express JS
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
