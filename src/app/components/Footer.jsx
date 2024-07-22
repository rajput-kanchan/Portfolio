"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      className="footer mt-6 border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="container p-4 md:p-12 flex flex-col md:flex-row justify-center md:justify-between items-center">
        {/* Icon links */}
        <div className="flex items-center flex-wrap mb-2 md:mb-0 mt-2">
          <a
            href="https://github.com/rajput-kanchan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 my-1 hover:text-gray-500 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kanchan-rajput/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 my-1 hover:text-gray-500 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://t.me/kanchan_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 my-1 hover:text-gray-500 transition-colors"
          >
            <FaTelegram size={20} />
          </a>
          <a
            href="https://accounts.google.com/"
            target="_blank"
            className="text-white mx-2 my-1 hover:text-gray-500 transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Text */}
        <p className="text-slate-600 text-center md:text-left mt-2 md:mt-0 mb-2">
          Made with ❤ by Kanchan Rajput
        </p>
      </div>
    </motion.section>
  );
};

export default Footer;

// import React from "react";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
//       <div className="container p-12 flex justify-between cursor-pointer">
//         <Link href={"/"}>🙵⬧</Link>
//         <p className="text-slate-600"> Made with ❤ by Kanchan Rajput </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
