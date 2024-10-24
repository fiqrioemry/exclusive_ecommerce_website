import {
  ADD_CART_PROCESS,
  ADD_CART_SUCCESS,
  REMOVE_CART_PROCESS,
  REMOVE_CART_SUCCESS,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  RESET_STATUS,
} from "../constant/cartType";

import connectApi from "../../features/connection/ConnectApi";

// 1. add product to cart by id
export const addToCart = (id, amount) => async (dispatch) => {
  dispatch({ type: ADD_CART_PROCESS });

  const { data } = await connectApi.get(`/products/${id}`);

  dispatch({ type: ADD_CART_SUCCESS, payload: { data, amount } });
};

// 2. remove product from cart by id
export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_PROCESS });

  dispatch({ type: REMOVE_CART_SUCCESS, payload: id });
};

// 3. increase amount of product from cart
export const increaseCart = (id) => async (dispatch) => {
  dispatch({ type: ADD_CART_PROCESS });
  dispatch({ type: INCREASE_AMOUNT, payload: id });
};

// 4. descrease amount of product from cart
export const decreaseCart = (id) => async (dispatch) => {
  dispatch({ type: ADD_CART_PROCESS });
  dispatch({ type: DECREASE_AMOUNT, payload: id });
};

// 5. Reset the status once the process is complete
export const resetStatus = () => async (dispatch) => {
  dispatch({ type: RESET_STATUS });
};
