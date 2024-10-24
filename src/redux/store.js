import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import {
  categoryProductsReducer,
  inputResultsReducer,
  productReducer,
  productsReducer,
  searchResultsReducer,
} from "./reducer/productsReducer";
import { categoriesReducer } from "./reducer/categoryReducer";
import { cartReducer } from "./reducer/cartReducer";
import { checkoutReducer } from "./reducer/checkoutReducer";

const reducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  inputResults: inputResultsReducer,
  searchResults: searchResultsReducer,
  categoryProducts: categoryProductsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
