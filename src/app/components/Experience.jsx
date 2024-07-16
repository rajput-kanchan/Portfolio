"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="text-white" id="experience">
      <h2 className="text-center text-4xl md:text-5xl font-semibold mt-12 mb-10">
        Work Experience
      </h2>
      <div className="md:flex md:justify-between md:items-start md:py-4 md:px-4 lg:px-10">
        {/* Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex items-start">
          <div className="mr-4 flex-shrink-0">
            <Image
              src="/images/exp.svg"
              alt="exp"
              width={30}
              height={30}
              className="w-30 h-30 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
            />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-1">
              Frontend Developer
            </h3>
            <h4 className="text-[#ADB7BE] text-sm mb-2">
              Sagitec Solutions{" "}
              <span className="text-[8.5px]">(2019-2020)</span>
            </h4>
            <p className="text-base lg:text-lg text-[#ADB7BE]">
              Collaborated with developers to build and enhance frontend
              components with HTML, CSS, and JavaScript. Demonstrated
              flexibility and adaptability by quickly learning new tools and
              frameworks. Collaborated with team members to share insights and
              propose solutions for project success. Built a variety of personal
              projects and portfolio websites to deepen my understanding and
              knowledge in frontend development.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full max-w-md md:max-w-[27rem] shadow-md shadow-purple-800 md:ml-10 rounded-md overflow-hidden">
            <Image
              className="object-cover rounded-md shadow-md mx-auto w-full h-auto md:h-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
              src="/images/work-3.avif"
              width={500}
              height={400}
              alt="about"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Experience = () => {
//   return (
//     <section className="text-white" id="experience">
//       <h2 className="text-center text-4xl md:text-5xl font-semibold mt-16 mb-8">
//         Work Experience
//       </h2>
//       <div className="md:flex md:justify-between md:items-start md:py-4 md:px-4 lg:px-10">
//         {/* Left Side */}
//         <div className="md:w-1/2 mb-8 md:mb-0 flex items-start">
//           <div className="mr-4 flex-shrink-0">
//             <Image
//               src="/images/exp.svg"
//               alt="exp"
//               width={30}
//               height={30}
//               className="w-30 h-20 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
//             />
//           </div>
//           <div>
//             <h3 className="text-lg md:text-xl font-semibold mb-1">
//               Frontend Developer
//             </h3>
//             <h4 className="text-[#ADB7BE] text-sm mb-2">
//               Sagitec Solutions (2019-2020)
//             </h4>
//             <p className="text-base lg:text-lg text-[#ADB7BE]">
//               Collaborated with developers to build and enhance frontend
//               components with HTML, CSS, and JavaScript. Demonstrated
//               flexibility and adaptability by quickly learning new tools and
//               frameworks. Collaborated with team members to share insights and
//               propose solutions for project success. Built a variety of personal
//               projects and portfolio websites to deepen my understanding and
//               knowledge in frontend development.
//             </p>
//           </div>
//         </div>

//         {/* Right Side */}
//         <motion.div
//           className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="relative w-full max-w-md md:max-w-[27rem] shadow-md shadow-purple-800 md:ml-10 rounded-md overflow-hidden">
//             <Image
//               className="object-cover rounded-md shadow-md mx-auto w-full h-auto md:h-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
//               src="/images/work-3.avif"
//               // layout="responsive"
//               width={500}
//               height={400}
//               alt="about"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
