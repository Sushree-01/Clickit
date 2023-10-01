
import { ADD_TO_CART, GET_CART_DATA, REMOVE_FROM_CART} from "./actionType";
const initialState = {
  cart: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_DATA: return { ...state, cart: payload }
    case REMOVE_FROM_CART:
      return { ...state, cart:payload};
    default:
      return state;
  }
};
export { reducer };