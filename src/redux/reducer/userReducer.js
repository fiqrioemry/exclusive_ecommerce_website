import {
  LOGIN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_REFRESH_TOKEN_FAIL,
  GET_REFRESH_TOKEN_SUCCESS,
  GET_USER_INFO_FAIL,
  GET_USER_INFO_SUCCESS,
  RESET_STATUS,
} from "../constant/userType";

const userState = {
  user: [],
  loading: false,
  success: false,
  fail: false,
  message: "",
};

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case LOGIN_PROCESS:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: "Login berhasil",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        fail: true,
        message: "Username atau Password Salah",
      };
    case RESET_STATUS:
      return {
        user: [],
        loading: false,
        success: false,
        fail: false,
        message: "",
      };
    default:
      return state;
  }
};
