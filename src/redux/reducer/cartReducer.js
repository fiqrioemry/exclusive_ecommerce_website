import {
  ADD_CART_PROCESS,
  ADD_CART_SUCCESS,
  DECREASE_AMOUNT,
  INCREASE_AMOUNT,
  REMOVE_CART_PROCESS,
  REMOVE_CART_SUCCESS,
  RESET_STATUS,
} from "../constant/cartType";

// Load the initial cart state from local storage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const cartState = {
  cart: loadCartFromLocalStorage(),
  loading: false,
  success: false,
  fail: false,
};

export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_CART_PROCESS:
      return {
        ...state,
        loading: true,
        success: false,
        fail: false,
      };

    case REMOVE_CART_PROCESS:
      return {
        ...state,
        loading: true,
        success: false,
        fail: false,
      };

    case ADD_CART_SUCCESS: {
      const product = action.payload.data;
      const amount = action.payload.amount;
      const cartIndex = state.cart.findIndex((item) => item.id === product.id);

      let newCart;

      if (cartIndex < 0) {
        if (amount <= product.stock) {
          const newProduct = { ...product, amount: amount };
          newCart = [...state.cart, newProduct];
        } else {
          return {
            ...state,
            fail: true,
            loading: false,
          };
        }
      } else {
        const updatedAmount = state.cart[cartIndex].amount + amount;
        if (updatedAmount <= product.stock) {
          newCart = state.cart.map((item) =>
            item.id === product.id ? { ...item, amount: updatedAmount } : item
          );
        } else {
          return {
            ...state,
            fail: true,
            loading: false,
          };
        }
      }

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(newCart));

      return {
        ...state,
        cart: newCart,
        success: true,
        loading: false,
      };
    }

    case REMOVE_CART_SUCCESS: {
      const id = action.payload;
      const cartItem = state.cart.filter((item) => item.id !== id);

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(cartItem));

      return {
        ...state,
        cart: cartItem,
        loading: false,
      };
    }

    case INCREASE_AMOUNT: {
      const id = action.payload;
      const cartItem = state.cart.find((item) => item.id === id);

      if (cartItem.stock < cartItem.amount + 1) {
        return {
          ...state,
          error: true,
          loading: false,
        };
      } else {
        const updatedCart = state.cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        );

        // Update local storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return {
          ...state,
          cart: updatedCart,
          loading: false,
        };
      }
    }

    case DECREASE_AMOUNT: {
      const id = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      );

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...state,
        cart: updatedCart,
        loading: false,
      };
    }

    case RESET_STATUS:
      return {
        ...state,
        success: false,
        fail: false,
      };

    default:
      return state;
  }
};
