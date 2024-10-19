import {
  ADD_CART_PROCESS,
  ADD_CART_SUCCESS,
  DECREASE_CART,
  INCREASE_CART,
  DELETE_CART,
} from "../constant/cartType";

const cartState = {
  cart: [],
  loading: false,
  error: false,
};

export const addCartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_CART_PROCESS:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case DECREASE_CART: {
      const id = action.payload;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        ),
        loading: false,
      };
    }

    case INCREASE_CART: {
      const id = action.payload;
      const cartItem = state.cart.find((item) => item.id === id);
      if (cartItem.stock < cartItem.amount + 1) {
        return {
          ...state,
          error: true,
          loading: false,
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, amount: item.amount + 1 } : item
          ),
          loading: false,
        };
      }
    }

    case DELETE_CART: {
      const id = action.payload;

      const cartItem = state.cart.filter((item) => item.id !== id);
      return {
        ...state,
        cart: cartItem,
        loading: false,
      };
    }

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
              ? { ...item, amount: item.amount + amount }
              : item
          ),
          loading: false,
        };
      }

    default:
      return state;
  }
};
