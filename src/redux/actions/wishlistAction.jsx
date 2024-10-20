import {
  WISHLIST_PROCESS,
  ADD_WISHLIST,
  REMOVE_WISHLIST,
} from "../constant/wishlistType";

export const addWishlist = (id) => async (dispatch) => {
  dispatch({ type: WISHLIST_PROCESS });
  dispatch({ type: ADD_WISHLIST, payload: id });
};

export const removeWishlist = (id) => async (dispatch) => {
  dispatch({ type: WISHLIST_PROCESS });
  dispatch({ type: REMOVE_WISHLIST, payload: id });
};
