import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import {
  getAllCategoriesReducer,
  getAllProductsReducer,
  getProductByIdReducer,
  searchProductsReducer,
  searchResultsReducer,
} from "./reducer/productReducer";

const reducer = combineReducers({
  allProducts: getAllProductsReducer,
  allCategories: getAllCategoriesReducer,
  productId: getProductByIdReducer,
  search: searchProductsReducer,
  filter: searchResultsReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
