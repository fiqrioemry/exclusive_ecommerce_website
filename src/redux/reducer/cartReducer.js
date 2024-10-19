import { stackTraceLimit } from "postcss/lib/css-syntax-error";
import { ADD_CART_PROCESS, ADD_CART_SUCCESS } from "../constant/cartType";

const cartState = {
  cart: [],
  loading: false,
};

export const addCartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_CART_PROCESS:
      return {
        ...state,
        loading: true,
      };

    case ADD_CART_SUCCESS:
      const product = action.payload.data;
      const amount = action.payload.amount;
      const newItem = state.cart.find((item) => item.id === product.id);
      if (!newItem) {
        const newProduct = { ...product, amount };
        return {
          ...state,
          cart: [...state.cart, newProduct],
          loading: false,
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, amount: item.amount + amount } // Update the amount for the existing item
              : item
          ),
          loading: false,
        };
      }

    default:
      return state;
  }
};
