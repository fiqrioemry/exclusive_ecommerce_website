import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const AboutProfileElement = ({ image, name, position }) => {
  return (
    <div className="rounded-lg overflow-hidden mb-8">
      <img className="w-full" src={image} alt="" />
      <div>
        <h2 className="text-xl font-medium mt-4">{name}</h2>
        <div className="mt-4">{position}</div>
        <div className="flex flex-row items-center mt-4 gap-x-4 text-2xl">
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default AboutProfileElement;
