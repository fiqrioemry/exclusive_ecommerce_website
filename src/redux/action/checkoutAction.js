import {
  ADD_CHECKOUT_PROCESS,
  ADD_CHECKOUT_SUCCESS,
  REMOVE_CHECKOUT_PROCESS,
  REMOVE_CHECKOUT_SUCCESS,
} from "../constant/checkoutType";

export const addCheckout = (ids) => async (dispatch) => {
  dispatch({ type: ADD_CHECKOUT_PROCESS });

  dispatch({ type: ADD_CHECKOUT_SUCCESS, payload: ids });
};

export const removeCheckout = (ids) => async (dispatch) => {
  dispatch({ type: REMOVE_CHECKOUT_PROCESS });

  dispatch({ type: REMOVE_CHECKOUT_SUCCESS, payload: ids });
};
