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
  SEARCH_PRODUCT_PROCESS,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAIL,
  SEARCH_RESULT_PROCESS,
  SEARCH_RESULT_SUCCESS,
  SEARCH_RESULT_FAIL,
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

export const searchProducts = (searchParams) => async (dispatch) => {
  dispatch({ type: SEARCH_PRODUCT_PROCESS });

  setTimeout(async () => {
    const { data } = await connectApi.get(`/products/search?q=${searchParams}`);

    const filteredProducts = data.products.filter((product) =>
      product.title.toLowerCase().includes(searchParams.toLowerCase())
    );

    if (filteredProducts.length !== 0) {
      dispatch({
        type: SEARCH_PRODUCT_SUCCESS,
        payload: filteredProducts,
      });
    } else {
      dispatch({ type: SEARCH_PRODUCT_FAIL, payload: "No Product Found" });
    }
  }, 1000);
};

export const searchResults =
  (searchParams, minPrice = 0, maxPrice = 99999, averageRating = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: SEARCH_RESULT_PROCESS });
      const { data } = await connectApi.get(
        `/products/search?q=${searchParams}`
      );

      // 1. filter the product by name similiarity
      const filterName = data.products.filter((product) =>
        product.title.toLowerCase().includes(searchParams.toLowerCase())
      );

      // 2. filter the product by minimum and maximum price (i set default on 0 and 9999 to prevent error)
      const filterPrice = filterName.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );

      // 3. filter the product by averaging the reviews score and compare it to average rating user want
      const filteredProducts = filterPrice.filter((product) => {
        if (product.reviews.length === 0) return false; // Skip products with no reviews

        const totalRating = product.reviews.reduce(
          (sum, review) => sum + review.rating,
          0
        );
        const averageReview = totalRating / product.reviews.length;

        return averageReview >= averageRating;
      });
      dispatch({
        type: SEARCH_RESULT_SUCCESS,
        payload: filteredProducts,
      });
    } catch (error) {
      dispatch({ type: SEARCH_RESULT_FAIL, payload: "No Product Found" });
    }
  };
