import Image from "next/image";
import React, { useContext } from "react";
import { useState } from "react";
import { Tema } from "./Tema";

interface ProjectItemProps {
  src: any;
  alt: string;
  site?: any;
  repositorio: any;
  tag: string[];
  desc: string;
}

export default function ProjectItem(props: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { darkMode } = useContext(Tema);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      className={`rounded-xl p-5 transition-all duration-100 mb-4
      ${isHovered ? "shadow shadow-purple-700" : darkMode ? "shadow-[0_1px_10px_0px_rgba(255,255,255,0.1)]"
          : "shadow-[0_1px_10px_0px_rgba(0,0,0,0.1)]"}`}>

      <Image src={props.src} alt={props.alt} className="w-full rounded-lg border mb-2" />

      <div className={`flex gap-1 absolute -translate-y-10 translate-x-1 transition-opacity duration-500
      ${isHovered ? "opacity-100" : "opacity-0"}`}>
        {props.tag && (
          props.tag.map((tag, i) => (
            <span key={i} className="rounded-lg p-1 bg-purple-500 text-white text-sm">{tag}</span>
          ))
        )}
      </div>

      {props.desc} <br />
      <a href={props.site} className={'inline-block p-1 mt-2 mr-2 text-purple-600 border-purple-600 border rounded-lg hover:bg-purple-600 hover:text-white'} target="_blank">Visitar</a>
      <a href={props.repositorio} className={'p-1 border border-gray-900 rounded-lg hover:text-white hover:bg-gray-900'} target="_blank">Repositório</a>
    </div>
  );
}
