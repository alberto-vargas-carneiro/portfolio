import Image from "next/image";
import React from "react";
import { useState } from "react";

interface ProjectItemProps {
  id: string;
  src: any;
  alt: string;
  link: string;
  tag: string;
  tag2: string;
  tag3: string;
  desc: string;
  desc2?: string;
  desc3?: string;
  desc4?: string;
  desc5?: string;
  children?: any;
}

export default function ProjectItem(props: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const descriptionText = props.desc;

  const truncatedText = isExpanded
    ? descriptionText
    : descriptionText.slice(0, 200) + "...";

  const desc2 = () => {
    if (isExpanded && props.desc2 !== undefined) {
      return <p className="px-2 text-justify">{props.desc2}</p>;
    }
  };
  const desc3 = () => {
    if (isExpanded && props.desc3 !== undefined) {
      return <p className="px-2 text-justify">{props.desc3}</p>;
    }
  };
  const desc4 = () => {
    if (isExpanded && props.desc4 !== undefined) {
      return <p className="px-2 text-justify">{props.desc4}</p>;
    }
  };
  const desc5 = () => {
    if (isExpanded && props.desc5 !== undefined) {
      return <p className="px-2 text-justify">{props.desc5}</p>;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        rounded-xl p-5 transition-all duration-100 mb-4
        ${
          isHovered
            ? "shadow shadow-purple-700"
            : "shadow-[0_1px_10px_0px_rgba(0,0,0,0.1)]"
        }`}
    >
      <a href={props.link} target="_blank">
        <Image
          src={props.src}
          alt={props.alt}
          className="w-full rounded-lg border"
        />
      </a>

      <div className={`flex gap-1 absolute -translate-y-8 translate-x-1 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span className="rounded-lg p-1 bg-purple-500 text-white text-sm">{props.tag}</span>
        <span className="rounded-lg p-1 bg-purple-500 text-white text-sm">{props.tag2}</span>
        <span className="rounded-lg p-1 bg-purple-500 text-white text-sm">{props.tag3}</span>
      </div>

      <p className="pt-5 px-2 text-justify">{truncatedText}</p>

      {desc2()}
      {desc3()}
      {desc4()}
      {desc5()}

      {!isExpanded && (
        <button
          onClick={toggleDescription}
          className="px-2 text-purple-700 hover:underline transition-all duration-1000"
        >
          Read more
        </button>
      )}

      {isExpanded && (
        <button
          onClick={toggleDescription}
          className="px-2 text-purple-700 hover:underline transition-all duration-1000"
        >
          Read less
        </button>
      )}
    </div>
  );
}
