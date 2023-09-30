import {GET_CART_DATA } from "./actionType";
import axios from "axios";

export const getcartData = (userid) => (dispatch) => {
    axios.get(`https://6517e61b582f58d62d353538.mockapi.io/users/${userid}`)
        .then((res) => {
            console.log(res.data.cart);
            dispatch({ type: GET_CART_DATA, payload: res.data.cart })
        })
}
