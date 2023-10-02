import * as actionTypes from './actionType';

const initialState = {
  products: [],
  cart: [],
  loading: false,
  error: null,
};

export const reducer= (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
      case actionTypes.FETCH_PRODUCTS_BY_SEARCH_REQUEST:
        return{
          ...state,
          loading: true,
        error: null,
        }
      case actionTypes.FETCH_PRODUCTS_BY_SEARCH_SUCCESS:
        return{
          ...state,
        loading: false,
        products: action.payload,
        }
      case actionTypes.FETCH_PRODUCTS_BY_SEARCH_FAILURE:
        return{
          ...state,
        loading: false,
        error: action.payload,
        }
    default:
      return state;
  }
};