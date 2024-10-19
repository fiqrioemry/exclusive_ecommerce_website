import { ADD_CART_PROCESS, ADD_CART_SUCCESS } from "../constant/cartType";

import connectApi from "../../services/connectApi";

export const addToCart = (id, amount) => async (dispatch) => {
  dispatch({ type: ADD_CART_PROCESS });

  setTimeout(async () => {
    const { data } = await connectApi.get(`/products/${id}`);
    dispatch({ type: ADD_CART_SUCCESS, payload: { data, amount } });
  }, 500);
};
