import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Product = () => {
  const product=useSelector((state)=>state.productReducer.products)
  console.log(product);
  const dispatch=useDispatch()
  
  return (
    <div>

    </div>
  )
}
