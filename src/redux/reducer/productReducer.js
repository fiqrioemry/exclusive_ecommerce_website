import {
  GET_ALL_PRODUCTS_PROCESS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_CATEGORIES_PROCESS,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAIL,
  GET_PRODUCT_BY_ID_PROCESS,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAIL,
  SEARCH_PROCESS,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
} from "../constant/productType";

// single products
const productState = {
  product: [],
  loading: false,
  success: false,
  fail: false,
};

// all products
const productsState = {
  products: [],
  loading: false,
  success: false,
  fail: false,
  total: 0,
};

// products by category
const productsCategoryState = {
  productsCategory: [],
  loading: false,
  success: false,
  fail: false,
};

const searchResultState = {
  searchResult: [],
  loading: false,
  success: false,
  fail: false,
};

// list of categories
const categoryListState = {
  categoryList: [],
  success: false,
  fail: false,
};

export const getAllProductsReducer = (state = productsState, action) => {
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

export const getProductByIdReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_ID_PROCESS:
      return { ...state, loading: true, fail: false, success: false };

    case GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      };

    case GET_PRODUCT_BY_ID_FAIL:
      return { ...state, loading: false, fail: true };

    default:
      return state;
  }
};

export const searchProductsReducer = (state = searchResultState, action) => {
  switch (action.type) {
    case SEARCH_PROCESS:
      return { ...state, loading: true, fail: false, success: false };

    case SEARCH_SUCCESS:
      console.log("reducer :", action.payload);
      return {
        ...state,
        loading: false,
        success: true,
        searchResult: action.payload.products,
      };

    case SEARCH_FAIL:
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
