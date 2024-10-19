import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import {
  getAllCategoriesReducer,
  getAllProductsReducer,
  getProductByIdReducer,
  inputResultsReducer,
  searchResultsReducer,
} from "./reducer/productReducer";
import { addCartReducer } from "./reducer/cartReducer";

const reducer = combineReducers({
  allProducts: getAllProductsReducer,
  allCategories: getAllCategoriesReducer,
  productId: getProductByIdReducer,
  searchResults: searchResultsReducer,
  inputResults: inputResultsReducer,
  cart: addCartReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
