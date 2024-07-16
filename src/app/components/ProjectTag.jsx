import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-cyan-600"
    : "text-[#ADB7BE] border-slate-600 hover:border-teal-600";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-5 py-1 mb-7 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
