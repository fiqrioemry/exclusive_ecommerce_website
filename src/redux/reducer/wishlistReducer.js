import {
  ADD_WISHLIST,
  REMOVE_WISHLIST,
  WISHLIST_PROCESS,
} from "../constant/wishlistType";

const wishlistState = {
  wishlist: [],
  loading: false,
};

export const wishlistReducer = (state = wishlistState, action) => {
  switch (action.type) {
    case WISHLIST_PROCESS:
      return { ...state, loading: true };

    case ADD_WISHLIST:
      const id = action.payload;
      const existId = state.wishlist.find((item) => item === id);
      if (existId) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          loading: false,
          wishlist: [...state.wishlist, id],
        };
      }

    case REMOVE_WISHLIST: {
      const id = action.payload;
      const wishlistProduct = state.wishlist.filter((item) => item !== id);
      return {
        ...state,
        wishlist: wishlistProduct,
        loading: false,
      };
    }

    default:
      return state;
  }
};
