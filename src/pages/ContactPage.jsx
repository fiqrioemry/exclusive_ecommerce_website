/* eslint-disable react/style-prop-object */
import React from "react";
import MessageBox from "../components/contactpage/MessageBox";
import InformationBox from "../components/contactpage/InformationBox";

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto px-2">
        {/* 1. navigation path info */}
        <div className="py-10 text-sm ">
          <div>Home / contact</div>
        </div>
        <div className="flex flex-wrap mb-12 ">
          {/* 2. information box area */}
          <InformationBox />

          {/* 3. message box area*/}
          <MessageBox />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
