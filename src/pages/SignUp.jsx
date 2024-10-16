import React from "react";
import signUpImage from "../assets/signup_image.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row gap-x-8 justify-between items-center">
        {/* image */}
        <div className="hidden w-full lg:block lg:h-[600px]">
          <img className="w-full h-full bg-cover" src={signUpImage} alt="" />
        </div>

        {/* form */}
        <div className="w-full">
          <div className="flex flex-col gap-y-6 mb-6">
            <h1 className="h1 text-3xl">Create an account</h1>
            <p> Enter your details below</p>
          </div>

          <form action="">
            <input
              type="text"
              className="py-2  outline-none w-full border-b-2 mb-6"
              placeholder="Your name"
            />
            <input
              type="text"
              className="py-2  outline-none w-full border-b-2 mb-6"
              placeholder="Email or Phone number"
            />
            <input
              type="text"
              className="py-2  outline-none w-full border-b-2 mb-6"
              placeholder="Password"
            />

            <div className="flex flex-col gap-y-6 mb-6">
              <button className="btn w-full">Create Account</button>
              <button className="py-4 px-12 border-secondary border rounded-sm font-light  w-full flex items-center justify-center gap-x-4">
                <FcGoogle />
                <p> Sign up with google</p>
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <div>Already Have Account ? </div>
            <Link className="underline" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
