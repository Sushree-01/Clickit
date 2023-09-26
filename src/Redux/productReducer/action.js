import * as actionTypes from './actionTypes';

export const fetchProductsRequest = () => ({
  type: actionTypes.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: actionTypes.FETCH_PRODUCTS_FAILURE,
  payload: error,
});

// Add to cart actions
export const addToCart = (product) => ({
  type: actionTypes.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: productId,
});
