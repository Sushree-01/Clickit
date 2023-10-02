import React from "react"
import {LOGIN_SUCCESS,LOGOUT } from "./actionType"
const initialState = {
    isAuth: localStorage.getItem("isAuth") || false,
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS: 
        return { ...state, isAuth: true }
        case LOGOUT: return {...state, isAuth:false}
        default: return state
    }
}