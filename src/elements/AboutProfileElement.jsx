import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const AboutProfileElement = ({ image, name, position }) => {
  return (
    <div className="max-w-[370px] w-full flex flex-col mb-6">
      <div className="w-full h-[430px] mb-4">
        <img className="h-full w-full" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-xl font-medium">{name}</h2>
        <div>{position}</div>
        <div className="flex flex-row items-center gap-x-4 text-2xl">
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default AboutProfileElement;
