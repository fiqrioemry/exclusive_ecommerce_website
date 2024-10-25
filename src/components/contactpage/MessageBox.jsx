import React from "react";
import InputElement from "../../elements/InputElement";

const MessageBox = () => {
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
  );
};

export default MessageBox;
