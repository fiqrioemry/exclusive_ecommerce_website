import {
  LOGIN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_REFRESH_TOKEN_FAIL,
  GET_REFRESH_TOKEN_SUCCESS,
  GET_USER_INFO_FAIL,
  GET_USER_INFO_SUCCESS,
} from "../constant/userType";

const userState = {
  user: [],
  loading: false,
  success: false,
  fail: false,
};

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case LOGIN_PROCESS:
      return {
        ...state,
        loading: true,
        success: false,
        fail: false,
      };
    case LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};
