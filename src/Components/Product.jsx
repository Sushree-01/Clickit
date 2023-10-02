import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../Redux/productReducer/action';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { useLocation, useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';
export const Product = () => {
  const [currPage, setCurrPage] = useState(1);
  const product = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)
  const location = useLocation();
  const {search}=useParams()
  useEffect(() => {
    const obj = {
      params: {
        q:search,
        brand: searchParams.getAll('brand'),
        gender: searchParams.getAll('gender'),
        rate: searchParams.getAll('rate'),
        sortBy: searchParams.get('order') === 'asc' ? 'price' : 'price',
        order: searchParams.get('order'),
        page: currPage,
      },
    };
    dispatch(getProduct(obj));
  }, [searchParams, currPage]);
  

  const itemsPerPage = 10;
  const totalPages = Math.ceil(product.length / itemsPerPage);

  return (
    <Box p={4}>
      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        {product.length > 0 ? (
          product?.map((product) => (
            <GridItem key={product.id}>
              <ProductCard product={product} />
            </GridItem>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </Grid>
      <Pagination
        currPage={currPage}
        totalPages={totalPages}
        setCurrPage={setCurrPage}
      />
    </Box>
  );
};
