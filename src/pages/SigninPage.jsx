import React, { useEffect, useState } from "react";
import InputElement from "../elements/InputElement";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SignupImage from "../assets/signup/signup_image.png";
import SpinnerLoading from "../features/loading/SpinnerLoading";
import { resetStatus, userLogin } from "../redux/action/userAction";

const SigninPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [input, setInput] = useState({ username: "", password: "" });
  const { loading, success, fail, message } = useSelector(
    (state) => state.user
  );

  const handleChangeInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(userLogin(input));
  };

  useEffect(() => {
    if (success) {
      navigate("/");
      dispatch(resetStatus());
    } else if (fail) {
      setError(message);
      dispatch(resetStatus());
    }
  }, [dispatch, navigate, message, success, fail]);

  const inputStyle =
    "h-12 border- border-b-2 w-full outline-none mb-4 focus:border-red-500";

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
              <div className="mb-6 space-y-4">
                <h2 className="text-2xl font-medium">Login To Your Account</h2>
                <p className="">Enter Your Details Below</p>
                {error && <p className="text-red-500">{error}</p>}
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
                    {loading ? <SpinnerLoading /> : "Login"}
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
