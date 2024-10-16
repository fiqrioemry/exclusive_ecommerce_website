import React from "react";

const AboutInfoElement = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center hover:bg-tertiary w-[250px] h-[270px] border rounded-md gap-y-4 group transition-all duration-300">
      <div className="p-2 rounded-full  bg-gray-200">
        <div className="p-2 rounded-full group-hover:bg-white bg-secondary">
          <div className="flex items-center justify-center h-7 w-7 group-hover:text-secondary text-3xl text-white">
            {React.createElement(icon)}
          </div>
        </div>
      </div>
      <h1 className="h1 text-secondary group-hover:text-white">{title}</h1>
      <div className=" text-secondary group-hover:text-white">{text}</div>
    </div>
  );
};

export default AboutInfoElement;
