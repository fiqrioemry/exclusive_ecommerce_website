import { HANDLE_CART } from "../constant/activeType";

export const handleCart = (state) => async (dispatch) => {
  dispatch({ type: HANDLE_CART, payload: state });
};
