import axios from 'axios';
import { FETCH_PRODUCTS_BY_SEARCH_FAILURE, FETCH_PRODUCTS_BY_SEARCH_REQUEST, FETCH_PRODUCTS_BY_SEARCH_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from './actionType';

export const getProduct =(obj)=> (dispatch) => {
  // Write logic here
  dispatch({type:FETCH_PRODUCTS_REQUEST})
  axios.get(`https://sushreebackendapi.onrender.com/products`,obj)
  .then((res)=>{
    console.log(res)
    dispatch({type:FETCH_PRODUCTS_SUCCESS,payload:res.data})
  })
  .catch((err)=>{
    dispatch({type:FETCH_PRODUCTS_FAILURE})
  })
};
// // Add to cart actions
// export const addToCart = (product) => ({
//   type: actionTypes.ADD_TO_CART,
//   payload: product,
// });

// export const removeFromCart = (productId) => ({
//   type: actionTypes.REMOVE_FROM_CART,
//   payload: productId,
// });
