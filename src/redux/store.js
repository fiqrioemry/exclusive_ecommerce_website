import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import {
  getAllCategoriesReducer,
  getAllProductsReducer,
} from "./reducer/productReducer";

const reducer = combineReducers({
  allProducts: getAllProductsReducer,
  allCategories: getAllCategoriesReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
