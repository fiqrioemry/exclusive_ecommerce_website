import React from "react";
import { FaTruck, FaExchangeAlt } from "react-icons/fa";

const InformationDetailsElement = () => {
  const information = [
    {
      icon: <FaTruck />,
      title: "Free Delivery",
      content: "Enter Your Postal code for Delivery Availability",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Return Delivery",
      content: "Free 30 Days Delivery Returns",
    },
  ];

  return (
    <div className="border rounded-md">
      {information.map((info, index) => {
        return (
          <div className="flex flex-row p-2 items-center border-b">
            <div className="p-4 text-3xl">{info.icon}</div>
            <div>
              <p className="text-xl font-semibold">{info.title}</p>
              <p>{info.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InformationDetailsElement;
