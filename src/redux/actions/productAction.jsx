import {
  GET_ALL_PRODUCTS_PROCESS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
} from "../constant/productType";

import connectApi from "../../services/connectApi";
import axios from "axios";

export const getAllProducts = (value) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PRODUCTS_PROCESS });

    const { data } = await axios.get(`${connectApi}/products?limit=${value}`);

    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_PRODUCTS_FAIL, payload: error });
  }
};
