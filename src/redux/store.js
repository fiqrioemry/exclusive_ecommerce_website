import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import {
  getAllCategoriesReducer,
  getAllProductsReducer,
  getProductByIdReducer,
  searchProductsReducer,
} from "./reducer/productReducer";

const reducer = combineReducers({
  allProducts: getAllProductsReducer,
  allCategories: getAllCategoriesReducer,
  productId: getProductByIdReducer,
  searchResult: searchProductsReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
