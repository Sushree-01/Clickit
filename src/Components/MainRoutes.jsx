import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard'

import { Cart } from '../Pages/Cart'
import { Payment } from '../Pages/Payment'
import { Product } from './Product'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import VerifyEmailForm from '../Pages/verfiyOTP'
import { PrivateRoute } from './PrivateRoute'
import { NewArrivals } from '../Pages/NewArrivals'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/cart' element={<PrivateRoute><Cart/> </PrivateRoute> } />
      <Route path='/payment' element={<Payment />} />
      <Route path='/product' element={<NewArrivals />} />
      <Route path='/product/:search' element={<NewArrivals/>} />
      <Route path='/product/:id' element={<Dashboard />} />
      <Route path='login' element={<Login />} />
      <Route path='/verifyotp' element={<VerifyEmailForm/>}/>
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}
