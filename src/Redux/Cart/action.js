import { ADD_TO_CART, GET_CART_DATA, REMOVE_FROM_CART } from "./actionType";
import axios from "axios";

export const getcartData = (userid) => (dispatch) => {
    axios.get(`https://6517e61b582f58d62d353538.mockapi.io/users/${userid}`)
        .then((res) => {
            console.log(res.data.cart);
            dispatch({ type: GET_CART_DATA, payload: res.data.cart })
        })
}

export const removeFromCart = (userid, newCart) => (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: newCart })
    axios.put(`https://6517e61b582f58d62d353538.mockapi.io/users/${userid}`, {
        cart: newCart
    })
}

export const AddToCart = (userid, data)=>(dispatch)=>{
    axios.put(`https://6517e61b582f58d62d353538.mockapi.io/users/${userid}`,{
        cart: data 
    })
}