/* eslint-disable react/style-prop-object */
import React from "react";
import { Link } from "react-router-dom";
import InputElement from "../elements/InputElement";
import SignupImage from "../assets/signup/signup_image.png";
import FormCardElement from "../elements/FormCardElement.jsx";

const SignupPage = () => {
  const inputStyle =
    "h-12 border- border-b-2 w-full outline-none mb-4 focus:border-red-500";

  return (
    <section>
      <div className="container mx-auto">
        {/* navigation info */}
        <div className="py-10 text-sm px-2">
          <div>
            <Link to="/">Home</Link> / About
          </div>
        </div>

        <div className="flex flex-wrap mb-12">
          {/* 1.signup image */}
          <div className="hidden md:flex md:w-1/2 justify-center items-center">
            <img className="h-full w-full" src={SignupImage} alt="" />
          </div>

          {/* 2.signup formbox */}
          <div className="w-full md:w-1/2 px-4">
            <FormCardElement
              title="Create An Account"
              button="DAFTAR"
              link="Login"
              question="Already Have Account ?"
              route="/signin"
            >
              <InputElement
                type="text"
                style={inputStyle}
                placeholder="username"
                name="name"
              />
              <InputElement
                type="email"
                style={inputStyle}
                placeholder="email"
                name="email"
              />
              <InputElement
                type="password"
                style={inputStyle}
                placeholder="password"
                name="password"
              />
              <InputElement
                type="password"
                // eslint-disable-next-line react/style-prop-object
                style={inputStyle}
                placeholder="Konfirmasi Password"
                name="passwordConfirm"
              />
            </FormCardElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
