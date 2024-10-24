/* eslint-disable react/style-prop-object */
import React from "react";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import InputElement from "../elements/InputElement";

const ContactPage = () => {
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

  const inputInformation = [
    {
      title: "Your Name",
      type: "text",
    },
    {
      title: "Your Email",
      type: "text",
    },
    {
      title: "Your Phone",
      type: "text",
    },
  ];

  const inputStyle =
    "rounded-lg h-12 bg-secondary/10 px-4  w-full outline-none mb-4 ";

  return (
    <section>
      <div className="container mx-auto px-4">
        {/* navigation info */}
        <div className="py-10 text-sm ">
          <div>Home / Contact</div>
        </div>
        <div className="flex flex-wrap mb-12 ">
          {/* support and information box */}
          <div className="flex md:flex-col flex-row w-full md:w-[30%]  pr-0 md:pr-4 mb-4 rounded-md shadow-[0px_0px_20px_1px_rgba(25,25,25,0.1)]">
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

          {/* message box */}
          <div className="w-full md:w-[70%]  pl-0 md:pl-4">
            <div className=" rounded-md shadow-[0px_0px_20px_1px_rgba(25,25,25,0.1)] px-4 py-4">
              <form action="submit">
                <div className="flex flex-col md:flex-row items-center justify-between gap-x-4">
                  {inputInformation.map((info, index) => {
                    return (
                      <InputElement
                        style={inputStyle}
                        placeholder={info.title}
                        type={info.type}
                        key={index}
                      />
                    );
                  })}
                </div>
                <div className="mb-4">
                  <textarea
                    rows="8"
                    cols="8"
                    placeholder="enter your message"
                    class="p-4 rounded-lg bg-secondary/10 w-full outline-none resize-none focus-within:outline-2 text-base  max-2xl:text-sm"
                    required=""
                  ></textarea>
                </div>
                <div className="flex justify-end ">
                  <button className="btn bg-tertiary w-full md:w-auto">
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
