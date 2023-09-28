import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard'
import Login  from '../Pages/Login'
import { Cart } from '../Pages/Cart'
import { Payment } from '../Pages/Payment'
import { Product } from '../Pages/Product'
import  Signup from '../Pages/Signup'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:id' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}
