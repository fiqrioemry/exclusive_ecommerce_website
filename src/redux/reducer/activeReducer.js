import { INCREMENT, DECREMENT, HANDLE_CART } from "../constant/activeType";

const initialState = {
  count: 1,
  openCart: false,
};

export const activeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count > 1 ? state.count - 1 : state.count,
      };

    case HANDLE_CART:
      return {
        ...state,
        openCart: action.payload,
      };

    default:
      return state;
  }
};
