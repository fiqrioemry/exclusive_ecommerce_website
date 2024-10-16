import {
  GET_ALL_PRODUCTS_PROCESS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_CATEGORIES_FAIL,
  GET_ALL_CATEGORIES_PROCESS,
  GET_ALL_CATEGORIES_SUCCESS,
} from "../constant/productType";

import connectApi from "../../services/connectApi";

// get all the products
export const getAllProducts = (value) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PRODUCTS_PROCESS });
    setTimeout(async () => {
      const { data } = await connectApi.get(`/products?limit=${value}`);

      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data });
    }, 1000);
  } catch (error) {
    dispatch({ type: GET_ALL_PRODUCTS_FAIL, payload: error });
  }
};

// get all category lists
export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORIES_PROCESS });

    const { data } = await connectApi.get(`/products/category-list`);

    dispatch({ type: GET_ALL_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_CATEGORIES_FAIL, payload: error });
  }
};
