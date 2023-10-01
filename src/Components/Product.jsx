import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../Redux/productReducer/action';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Product = () => {
  const product = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
    const obj = {
      params: {
        brand: searchParams.getAll('brand'),
        gender: searchParams.getAll('gender'),
        rate: searchParams.getAll('rate'),
        _sort: searchParams.get('order') === 'asc' ? 'price' : 'price',
        _order: searchParams.get('order'),
      },
    };
    dispatch(getProduct(obj));
  }, [searchParams]);

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
  );
};