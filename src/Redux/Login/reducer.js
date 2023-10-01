import React from "react"
import {LOGIN_SUCCESS } from "./actionType"
const initialState = {
    isAuth: localStorage.getItem("isAuth") || false,
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS: 
        return { ...state, isAuth: true }
        default: return state
    }
}