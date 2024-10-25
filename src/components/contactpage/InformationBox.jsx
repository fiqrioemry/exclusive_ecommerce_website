import React from "react";
import { MdPhone, MdOutlineEmail } from "react-icons/md";

const InformationBox = () => {
  const information = [
    {
      icon: <MdPhone className="text-2xl text-white font-semibold" />,
      heading: "Call To Us",
      title1: "we are available 24/7, 7 days a week",
      title2: "Phone : 061-7896543",
      title3: "Fax : 061-7896543",
    },
    {
      icon: <MdOutlineEmail className="text-2xl text-white font-semibold" />,
      heading: "Email To Us",
      title1: "Fill out our form and we will contact you within 24 hours.",
      title2: "Help : exclusive@help.com",
      title3: "Support : exclusive@support.com",
    },
  ];

  return (
    <div className="flex md:flex-col flex-row w-full md:w-[30%] pr-0 md:pr-4 mb-4 rounded-md shadow-[0px_0px_20px_1px_rgba(25,25,25,0.1)]">
      {information.map((info, index) => {
        return (
          <div className="mb-2 px-4 py-4 w-1/2 md:w-full" key={index}>
            <div className="flex flex-row items-center gap-x-4 mb-4 ">
              <div className="p-3 border rounded-md bg-tertiary">
                {info.icon}
              </div>
              <div className="text-xl md:text-2xl font-semibold">
                {info.heading}
              </div>
            </div>
            <div className="flex flex-col gap-y-2 text-sm">
              <div>{info.title1}</div>
              <div>{info.title2}</div>
              <div>{info.title3}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InformationBox;
