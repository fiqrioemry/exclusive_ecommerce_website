import {
  LOGIN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_USER_INFO_FAIL,
  GET_USER_INFO_SUCCESS,
  GET_REFRESH_TOKEN_FAIL,
  GET_REFRESH_TOKEN_SUCCESS,
} from "../constant/userType";
import connectApi from "../../features/connection/ConnectApi";
import Cookies from "js-cookie";

export const userLogin = (input) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PROCESS });

    const response = await connectApi.post("/auth/login", {
      username: input.username,
      password: input.password,
      expiresInMins: input.expiresInMins || 60, // Optional: Defaults to 60 if not provided
    });

    const data = response.data;

    // Store tokens in cookies
    Cookies.set("token", data.accessToken);
    Cookies.set("refreshToken", data.refreshToken);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const getUserInfo = () => async (dispatch) => {
  try {
    const response = await connectApi.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
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

    // Assuming the refreshed token is in response.data.token
    const newToken = response.data.token;

    // Store the new token in cookies
    Cookies.set("token", newToken);

    // Dispatch success action
    dispatch({ type: GET_REFRESH_TOKEN_SUCCESS, payload: newToken });
  } catch (error) {
    dispatch({ type: GET_REFRESH_TOKEN_FAIL, payload: error });
  }
};
