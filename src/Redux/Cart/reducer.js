
import { ADD_TO_CART, GET_CART_DATA, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from "./actionType";
const initialState = {
  cart: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_DATA: return {...state, cart:payload}
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, { ...payload, quantity: 1 }] };
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter((item) => item.id !== payload.id) };
    case UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,  cart: state.cart.map((item) => item.id === payload.id ? { ...item, quantity: payload.quantity } : item) };

    default:
      return state;
  }
};
export { reducer };