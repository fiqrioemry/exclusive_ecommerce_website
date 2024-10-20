import {
  ADD_CART_PROCESS,
  ADD_CART_SUCCESS,
  DECREASE_CART,
  INCREASE_CART,
  DELETE_CART,
  ADD_CHECKOUT,
  REMOVE_CHECKOUT,
} from "../constant/cartType";

const cartState = {
  cart: [],
  loading: false,
  error: false,
  checkout: [],
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

    case ADD_CHECKOUT: {
      const ids = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      const existId = state.checkout.some((item) => ids.includes(item));

      if (existId) {
        return state;
      } else {
        return { ...state, checkout: [...state.checkout, ...ids] };
      }
    }
    case REMOVE_CHECKOUT: {
      const ids = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      return {
        ...state,
        checkout: state.checkout.filter((item) => !ids.includes(item)), // Remove all matching IDs
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
