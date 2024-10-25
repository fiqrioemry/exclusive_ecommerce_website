import React from "react";
import {
  FaStore,
  FaDollarSign,
  FaShoppingBag,
  FaProductHunt,
} from "react-icons/fa";

const AboutInfoElement = () => {
  const information = [
    {
      icon: <FaStore />,
      title: "10.5 K",
      subtitle: "Sellers Active on Our Site",
    },
    {
      icon: <FaShoppingBag />,
      title: "33 K",
      subtitle: "Monthly Products Sales",
    },
    {
      icon: <FaDollarSign />,
      title: "45.5 K",
      subtitle: "Customer active in our site",
    },
    {
      icon: <FaProductHunt />,
      title: "25 K",
      subtitle: "Annual gross sale in our site",
    },
  ];
  return (
    <div className="flex flex-wrap py-12">
      {information.map((info, index) => {
        return (
          <div className="w-1/2 md:w-1/4 px-4 mb-8" key={index}>
            <div className="border-[2px] flex flex-col items-center rounded-md p-4 ">
              <div className="mb-2 rounded-full flex items-center justify-center p-2  bg-gray-200">
                <div className="p-2  bg-secondary rounded-full text-white text-xl">
                  {info.icon}
                </div>
              </div>
              <div className="text-lg font-medium mb-2">{info.title}</div>
              <div className="text-md text-center font-light">
                {info.subtitle}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutInfoElement;
