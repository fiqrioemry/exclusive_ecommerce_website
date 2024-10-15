import {
  GET_ALL_PRODUCTS_PROCESS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
} from "../constant/productType";

const productState = {
  products: [],
  loading: false,
  success: false,
  fail: false,
};

export const getAllProductsReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_PROCESS:
      return { ...state, loading: true, fail: false, success: false };

    case GET_ALL_PRODUCTS_SUCCESS:
      const data = action.payload.products;
      return { ...state, loading: false, success: true, products: data };

    case GET_ALL_PRODUCTS_FAIL:
      return { ...state, loading: false, fail: true };

    default:
      return state;
  }
};
