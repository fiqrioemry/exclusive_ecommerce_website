import {
  GET_ALL_PRODUCTS_PROCESS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_CATEGORIES_FAIL,
  GET_ALL_CATEGORIES_PROCESS,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_PRODUCT_BY_ID_PROCESS,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAIL,
  SEARCH_PROCESS,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
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

// get product by id
export const getProductById = (value) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_BY_ID_PROCESS });
    const { data } = await connectApi.get(`/products/${value}`);

    dispatch({ type: GET_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_BY_ID_FAIL, payload: error });
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

// get product by search
export const searchProducts = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_PROCESS });

    setTimeout(async () => {
      const { data } = await connectApi.get(`/products/search?q=${query}`);
      const filteredProducts = data.products.filter(
        (product) => product.title.toLowerCase().includes(query.toLowerCase()) // Case-insensitive match
      );
      dispatch({ type: SEARCH_SUCCESS, payload: filteredProducts });
    }, 300);
  } catch (error) {
    dispatch({ type: SEARCH_FAIL, payload: error });
  }
};
