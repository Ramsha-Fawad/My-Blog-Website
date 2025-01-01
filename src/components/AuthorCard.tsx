import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="/images/author.jpg"
          alt="Author Image"
        />
        <div>
          <h3 className="text-xl font-bold">Ramsha Fawad</h3>
          <p className="text-slate-500">
            BioChemist | Teacher | Front End Developer
          </p>
        </div>
      </div>
      <p className="mt-4 text-black leading-relaxed">
        I am Ramsha Fawad—a biochemist with a passion for technology and
        writing. Currently, I am exploring the fascinating fields of Cloud
        Computing and Applied Generative AI Engineering at GIAIC. Alongside my
        scientific background, I have honed my skills in TypeScript, JavaScript,
        HTML, CSS, Tailwind CSS, Node.js, React, and Next.js, blending
        creativity with technical expertise. Welcome to my journey of discovery
        and innovation!
      </p>
      <div className="mt-4 flex space-x-3">
        <a href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          LinkedIn
        </a>
        <a href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          GitHub
        </a>
        <a href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          FaceBook
        </a>
      </div>
    </div>
  );
}
