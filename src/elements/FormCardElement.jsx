import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const FormCardElement = ({ title, link, question, route, children }) => {
  return (
    <div className="w-full flex flex-col px-4">
      <div className="mb-6">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="">Enter Your Details Below</p>
      </div>

      <form className="flex flex-col">
        {children}
        <div>
          <button className="btn w-full text-white bg-tertiary hover:opacity-80 mb-4">
            Create Account
          </button>
          <button className="btn w-full border-2 gap-x-4 flex items-center justify-center hover:bg-tertiary hover:border-tertiary hover:text-white text-black ">
            <FaGoogle className=" text-2xl " />
            <p> Sign up with google</p>
          </button>
        </div>
      </form>
      <p className="text-center p-2">
        {question}
        <Link to={route}>
          <span className="text-tertiary font-semibold ml-1">{link}</span>
        </Link>
      </p>
    </div>
  );
};

export default FormCardElement;
