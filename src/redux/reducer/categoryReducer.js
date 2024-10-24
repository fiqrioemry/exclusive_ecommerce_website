import {
  GET_CATEGORIES_PROCESS,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from "../constant/categoriesType";

const categories = {
  categories: [],
  loading: false,
  success: false,
  fail: false,
};

export const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case GET_CATEGORIES_PROCESS:
      return { ...state, loading: true, success: false, fail: false };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
        success: true,
      };

    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        fail: true,
      };

    default:
      return state;
  }
};
