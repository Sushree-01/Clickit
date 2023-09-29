import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Redux/productReducer/action';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import ProductCard from '../Components/ProductCard';

export const Product = () => {
  const product=useSelector((state)=>state.productReducer.products)
  console.log(product);
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getProduct())
  },[])
  return (
    <Box p={4}>
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      {product.map((product) => (
        <GridItem key={product.id}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  </Box>
  )
}
