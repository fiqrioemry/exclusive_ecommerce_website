import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputElement from "../elements/InputElement";
import SignupImage from "../assets/signup/signup_image.png";
import connectApi from "../features/connection/ConnectApi";
import Cookies from "js-cookie";

const SigninPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ username: "", password: "" });
  const inputStyle =
    "h-12 border- border-b-2 w-full outline-none mb-4 focus:border-red-500";

  const handleChangeInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await connectApi.post("/auth/login", input);

    Cookies.set("token", response.data.accessToken, {
      expires: 30 / (24 * 60),
    });
    Cookies.set("user", JSON.stringify(response.data), {
      expires: 30 / (24 * 60),
    });

    navigate("/");
  };
  return (
    <section>
      <div className="container mx-auto">
        {/* navigation info */}
        <div className="py-10 text-sm px-2">
          <div>
            <Link to="/">Home</Link> / Login
          </div>
        </div>

        <div className="flex flex-wrap mb-12">
          {/* 1.signup image */}
          <div className="hidden md:flex md:w-1/2 justify-center items-center">
            <img className="h-full w-full" src={SignupImage} alt="" />
          </div>

          {/* 2.signup formbox */}

          <div className="w-full md:w-1/2 px-4">
            <div className="w-full flex flex-col px-4">
              <div className="mb-6">
                <h2 className="text-2xl font-medium mb-4">
                  Login To Your Account
                </h2>
                <p className="">Enter Your Details Below</p>
              </div>

              <form
                className="flex flex-col"
                onSubmit={handleLogin}
                onChange={handleChangeInput}
              >
                <InputElement
                  type="text"
                  style={inputStyle}
                  onChange={handleChangeInput}
                  placeholder="username"
                  name="username"
                  required
                />

                <InputElement
                  type="password"
                  style={inputStyle}
                  onChange={handleChangeInput}
                  placeholder="password"
                  name="password"
                  required
                />
                <div>
                  <button
                    type="submit"
                    className="btn w-full text-white bg-tertiary hover:opacity-80 mb-4"
                  >
                    Login
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

export default SigninPage;
