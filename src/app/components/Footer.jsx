import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between cursor-pointer">
        <Link href={"/"}>🙵⬧</Link>
        <p className="text-slate-600"> Made with ❤ by Kanchan Rajput </p>
      </div>
    </footer>
  );
};

export default Footer;
