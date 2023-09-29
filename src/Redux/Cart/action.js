import { ADD_TO_CART, UPDATE_CART_ITEM_QUANTITY, REMOVE_FROM_CART, GET_CART_DATA } from "./actionType";
import axios from "axios";

 
export const getcartData = (userid) => (dispatch) => {
    axios.get(`https://6515ca0909e3260018c924f9.mockapi.io/users/${userid}`)
        .then((res) => {
            console.log(res.cart);
            dispatch({ type: GET_CART_DATA })
        })
}
const addToCartAction = (payload) => {
    return { type: ADD_TO_CART, payload };
};

const updateCartItemQuantityAction = (id, quantity) => {
    return {
        type: UPDATE_CART_ITEM_QUANTITY, payload: { id, quantity }
    }
}

const removeFromCartAction = (id) => {
    return { type: REMOVE_FROM_CART, payload: { id } }
}

export { addToCartAction, updateCartItemQuantityAction, removeFromCartAction }
