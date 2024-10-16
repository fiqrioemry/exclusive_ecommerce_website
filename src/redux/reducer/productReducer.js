import {
  GET_ALL_PRODUCTS_PROCESS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_CATEGORIES_PROCESS,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAIL,
} from "../constant/productType";

const productState = {
  products: [],
  loading: false,
  success: false,
  fail: false,
  total: 0,
};

const categoryListState = {
  categoryList: [],
  success: false,
  fail: false,
};

export const getAllProductsReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_PROCESS:
      return { ...state, loading: true, fail: false, success: false };

    case GET_ALL_PRODUCTS_SUCCESS:
      const data = action.payload.products;
      const total = action.payload.total;
      return {
        ...state,
        loading: false,
        success: true,
        products: data,
        total: total,
      };

    case GET_ALL_PRODUCTS_FAIL:
      return { ...state, loading: false, fail: true };

    default:
      return state;
  }
};

export const getAllCategoriesReducer = (state = categoryListState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_PROCESS:
      return { ...state, success: false, fail: false };

    case GET_ALL_CATEGORIES_SUCCESS:
      const lists = action.payload;
      return { ...state, categoryList: lists, success: true };

    case GET_ALL_CATEGORIES_FAIL:
      return { ...state, fail: true };

    default:
      return state;
  }
};
