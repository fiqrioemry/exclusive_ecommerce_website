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
  SEARCH_RESULT_PROCESS,
  SEARCH_RESULT_SUCCESS,
  SEARCH_RESULT_FAIL,
  INPUT_RESULT_PROCESS,
  INPUT_RESULT_SUCCESS,
  INPUT_RESULT_FAIL,
} from "../constant/productType";

import connectApi from "../../services/connectApi";

// function to get all the products
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

// function to get specified product from id
export const getProductById = (value) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_BY_ID_PROCESS });
    const { data } = await connectApi.get(`/products/${value}`);

    dispatch({ type: GET_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_BY_ID_FAIL, payload: error });
  }
};

// function for get all the category list
export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORIES_PROCESS });

    const { data } = await connectApi.get(`/products/category-list`);

    dispatch({ type: GET_ALL_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_CATEGORIES_FAIL, payload: error });
  }
};

// function for displaying product name as search result on input
export const getInputResult = (searchParams) => async (dispatch) => {
  dispatch({ type: INPUT_RESULT_PROCESS });

  setTimeout(async () => {
    const { data } = await connectApi.get(`/products/search?q=${searchParams}`);

    const filteredProducts = data.products.filter((product) =>
      product.title.toLowerCase().includes(searchParams.toLowerCase())
    );

    if (filteredProducts.length !== 0) {
      dispatch({
        type: INPUT_RESULT_SUCCESS,
        payload: filteredProducts,
      });
    } else {
      dispatch({ type: INPUT_RESULT_FAIL, payload: "No Product Found" });
    }
  }, 1000);
};

// function to get product from searching parameters and filter
export const getProductBySearch =
  (searchParams, minPrice = 0, maxPrice = 99999, averageRating = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: SEARCH_RESULT_PROCESS });
      const { data } = await connectApi.get(
        `/products/search?q=${searchParams}`
      );

      // Filter by name similarity
      const filteredProducts = data.products
        .filter((product) =>
          product.title.toLowerCase().includes(searchParams.toLowerCase())
        )
        .filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        )
        .filter((product) => {
          if (!product.reviews.length) return false;
          const averageReview =
            product.reviews.reduce((sum, review) => sum + review.rating, 0) /
            product.reviews.length;
          return averageReview >= averageRating;
        });

      dispatch({ type: SEARCH_RESULT_SUCCESS, payload: filteredProducts });
    } catch (error) {
      dispatch({ type: SEARCH_RESULT_FAIL, payload: "No Product Found" });
    }
  };
