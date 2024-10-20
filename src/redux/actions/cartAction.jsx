import {
  ADD_CART_PROCESS,
  ADD_CART_SUCCESS,
  DECREASE_CART,
  INCREASE_CART,
  DELETE_CART,
  ADD_CHECKOUT,
  REMOVE_CHECKOUT,
} from "../constant/cartType";

import connectApi from "../../services/connectApi";

export const addToCart = (id, amount) => async (dispatch) => {
  dispatch({ type: ADD_CART_PROCESS });

  const { data } = await connectApi.get(`/products/${id}`);
  dispatch({ type: ADD_CART_SUCCESS, payload: { data, amount } });
};

export const decreaseCart = (id) => async (dispatch) => {
  dispatch({ type: ADD_CART_PROCESS });
  dispatch({ type: DECREASE_CART, payload: id });
};
export const increaseCart = (id) => async (dispatch) => {
  dispatch({ type: ADD_CART_PROCESS });
  dispatch({ type: INCREASE_CART, payload: id });
};
export const deleteCart = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CART, payload: id });
};

export const addCheckout = (id) => async (dispatch) => {
  dispatch({ type: ADD_CHECKOUT, payload: id });
};
export const removeCheckout = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_CHECKOUT, payload: id });
};
