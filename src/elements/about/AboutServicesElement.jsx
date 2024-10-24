import React from "react";
import { FaStore, FaDollarSign, FaShoppingBag } from "react-icons/fa";

const AboutServicesElement = () => {
  const aboutServices = [
    {
      icon: <FaStore />,
      title: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140",
    },
    {
      icon: <FaDollarSign />,
      title: "24/7 CUSTOMER SERVICE",
      text: "Friendly customer help support",
    },
    {
      icon: <FaShoppingBag />,
      title: "MONEY BACK GUARANTEE",
      text: "We return money within 30 days",
    },
  ];
  return (
    <div className="flex flex-wrap w-full justify-center items-center gap-x-8 md:gap-x-12 lg:gap-x-14 py-12">
      {aboutServices.map((info, index) => {
        const { icon, title, text } = info;
        return (
          <div
            className="flex flex-col items-center justify-center gap-2 mb-8"
            key={index}
          >
            {/* icon */}
            <div className="p-2 rounded-full bg-gray-200 mb-4">
              <div className="p-2 rounded-full  bg-secondary">
                <div className="flex items-center justify-center h-7 w-7  text-3xl text-white">
                  {icon}
                </div>
              </div>
            </div>
            {/* title */}
            <h2 className="text-lg font-semibold text-secondary">{title}</h2>
            {/* text */}
            <div className="text-secondary text-sm">{text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutServicesElement;
