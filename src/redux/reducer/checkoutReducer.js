import {
  ADD_CHECKOUT_PROCESS,
  ADD_CHECKOUT_SUCCESS,
  REMOVE_CHECKOUT_PROCESS,
  REMOVE_CHECKOUT_SUCCESS,
} from "../constant/checkoutType";

const checkoutState = {
  checkout: [],
  loading: false,
};

export const checkoutReducer = (state = checkoutState, action) => {
  switch (action.type) {
    case ADD_CHECKOUT_PROCESS:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_CHECKOUT_PROCESS:
      return {
        ...state,
        loading: true,
      };

    case ADD_CHECKOUT_SUCCESS: {
      const ids = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      const newIds = ids.filter((id) => !state.checkout.includes(id));
      if (newIds.length === 0) {
        return state;
      } else {
        return { ...state, checkout: [...state.checkout, ...newIds] };
      }
    }

    case REMOVE_CHECKOUT_SUCCESS: {
      const ids = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      return {
        ...state,
        checkout: state.checkout.filter((item) => !ids.includes(item)),
      };
    }
    default:
      return state;
  }
};
