import React from "react";
import { MdPhone, MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col mb-[140px]">
        {/* title */}
        <div className="flex py-[30px] gap-x-2">
          <span className="text-secondary/50">Home </span>/ Contact
        </div>

        {/* message */}
        <div className="flex mb-12 gap-x-4">
          {/* address */}
          <div className="max-w-[270px] w-full ">
            <div className="pb-8 mb-8 border-b-2 border-secondary/50">
              <div className="flex flex-row items-center gap-x-4 mb-4">
                <MdPhone className=" w-10 h-10 p-2 rounded-full text-2xl bg-tertiary text-white" />
                <div className="font-semibold">Call To Us</div>
              </div>
              <div className="flex flex-col gap-y-4">
                <p>We are available 24/7, 7 days a week</p>
                <p>Phone : 061-7871621</p>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center gap-x-4 mb-4">
                <MdOutlineEmail className=" w-10 h-10 p-2 rounded-full text-2xl bg-tertiary text-white" />
                <div className="font-semibold">Write To Us</div>
              </div>
              <div className="flex flex-col gap-y-4">
                <p>Fill out our form and we will contact you within 24 hours</p>
                <p>Emails : customer@exclusive.com</p>
                <p>Emails : support@exclusive.com</p>
              </div>
            </div>
          </div>
          {/* message box */}
          <div className=" px-8 w-full h-full ">
            <form action="">
              <div className="flex flex-col md:flex-row items-center justify-between gap-x-4 mb-4 ">
                <input
                  className="rounded-lg h-12 bg-secondary/10 px-4 w-full outline-none"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="rounded-lg h-12 bg-secondary/10 px-4  w-full outline-none"
                  type="text"
                  placeholder="Your Email"
                />
                <input
                  className="rounded-lg h-12 bg-secondary/10 px-4  w-full outline-none "
                  type="text"
                  placeholder="Your Phone"
                />
              </div>
              <div className="mb-4">
                <textarea
                  rows="10"
                  cols="10"
                  placeholder="enter your message"
                  class="p-4 rounded-lg bg-secondary/10 w-full outline-none  resize-none  focus-within:outline-2 text-base  max-2xl:text-sm"
                  required=""
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button className="btn">SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
