"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { sendEmail } from "./sendEmail.ts";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);

    const { data, error } = await sendEmail(formData);

    setIsLoading(false);

    if (error) {
      toast.error("Something went wrong :(");
    } else {
      toast.success("Message sent successfully");
      ref.current.reset();
    }
  };

  return (
    <motion.section
      id="contact"
      className="grid md:grid-cols-2 my-22 md:my-28 py-14 gap- relative"
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
      <div className="z-10">
        <h3 className="text-5xl font-semibold text-white my-2 mb-5">
          Let&apos;s Connect
        </h3>

        <p className="text-[#ADB7BE] mb-6 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 mb-7">
          <Link href="https://github.com/rajput-kanchan">
            <Image
              src={GithubIcon}
              alt="Github Icon"
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/kanchan-rajput/">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
            />
          </Link>
        </div>
      </div>
      <div>
        <form
          ref={ref}
          id="form"
          className="flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-3 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="senderEmail"
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Dave@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hey"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className={`bg-teal-900 hover:bg-gradient-to-br transition-all from-purple-800 via-transparent to-cyan-600 w-fit text-white font-medium rounded-md py-2 px-4 relative`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 mr-2 border-b-2 border-white rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              <>Send Message</>
            )}
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
