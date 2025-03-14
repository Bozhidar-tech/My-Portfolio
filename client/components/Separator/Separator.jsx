import React from "react";
import "./Separator.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa6";

const Separator = () => {
  const items = [
    {
      icon: <FaReact className="icon" />,
      text: "React",
      className: "react",
    },
    {
      icon: <FaHtml5 className="icon" />,
      text: "HTML",
      className: "html",
    },
    {
      icon: <FaJs className="icon" />,
      text: "JavaScript",
      className: "js",
    },
    {
      icon: <FaCss3Alt className="icon" />,
      text: "CSS",
      className: "css",
    },
  ];

  const duplicatedItems = [, ...items, ...items, ...items, ...items];

  return (
    <div className="separator-box">
      <div className="sliding-items">
        {duplicatedItems.map((item, index) => (
          <div key={index} className={`item ${item.className}`}>
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Separator;
