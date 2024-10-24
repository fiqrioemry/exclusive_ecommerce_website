import {
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_PROCESS,
  GET_CATEGORIES_FAIL,
} from "../constant/categoriesType";

import connectApi from "../../features/connection/ConnectApi";

export const getCategories = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORIES_PROCESS });

    const { data } = await connectApi.get("/products/category-list");

    dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CATEGORIES_FAIL, payload: error });
  }
};
