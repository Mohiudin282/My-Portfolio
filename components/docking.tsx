"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const Dock = () => {
  return (
    <div className={twMerge(
      "fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 p-3 rounded-2xl border bg-white/10 backdrop-blur-md shadow-lg"
    )}>
      <a href="https://github.com/Mohiudin282" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-8 text-black dark:text-white" />
      </a>
      <a href="https://www.linkedin.com/in/mohiudin" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-8 text-blue-600" />
      </a>
      <a href="https://x.com/MohiudinRana" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="w-6 h-8 text-black dark:text-white" />
      </a>
      <a href="mailto:ranamohiudin1234@gmail.com">
        <FaEnvelope className="w-6 h-8 text-black-500" />
      </a>
    </div>
  );
};

export default Dock;
