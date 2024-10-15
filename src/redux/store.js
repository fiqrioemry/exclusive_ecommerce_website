import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { getAllProductsReducer } from "./reducer/productReducer";

const reducer = combineReducers({
  allProducts: getAllProductsReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
