import {
  LOGIN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_USER_INFO_FAIL,
  GET_USER_INFO_SUCCESS,
  GET_REFRESH_TOKEN_FAIL,
  GET_REFRESH_TOKEN_SUCCESS,
  RESET_STATUS,
} from "../constant/userType";
import Cookies from "js-cookie";
import connectApi from "../../features/connection/ConnectApi";

export const userLogin = (input) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PROCESS });

    const response = await connectApi.post("/auth/login", {
      username: input.username,
      password: input.password,
    });

    const data = response.data;
    Cookies.set("accessToken", data.accessToken, {
      expires: 15 / (24 * 60), // 15 minutes
    });

    Cookies.set("refreshToken", data.refreshToken, {
      expires: 30, // 30 days
    });

    dispatch({
      type: LOGIN_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const getUserInfo = () => async (dispatch) => {
  try {
    const response = await connectApi.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
    });

    dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_USER_INFO_FAIL, payload: error });
  }
};

export const getRefreshToken = () => async (dispatch) => {
  try {
    const response = await connectApi.get("/auth/refresh");

    const newAccessToken = response.data.accessToken;
    const newRefreshToken = response.data.refreshToken; // Jika refresh token juga disertakan

    // Set cookies dengan masa berlaku
    Cookies.set("accessToken", newAccessToken, {
      expires: 15 / (24 * 60), // 15 minutes
    });

    if (newRefreshToken) {
      Cookies.set("refreshToken", newRefreshToken, {
        expires: 30, // 30 days
      });
    }

    dispatch({ type: GET_REFRESH_TOKEN_SUCCESS });
  } catch (error) {
    dispatch({ type: GET_REFRESH_TOKEN_FAIL });
  }
};

export const resetStatus = () => async (dispatch) => {
  dispatch({ type: RESET_STATUS });
};
