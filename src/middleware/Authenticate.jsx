import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const NonUserAuth = ({ children }) => {
  if (Cookies.get("accessToken")) {
    return <Navigate to="/" />;
  } else if (!Cookies.get("accessToken")) {
    return children;
  }
};

const UserAuth = ({ children }) => {
  if (Cookies.get("accessToken")) {
    return children;
  } else if (!Cookies.get("accessToken")) {
    return <Navigate to="/signin" />;
  }
};

export { UserAuth, NonUserAuth };
