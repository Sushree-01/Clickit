import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { SideBar } from '../Components/SideBar';
import { Product } from '../Components/Product';

export const NewArrivals = () => {
  return (
    <Flex>
      <Box w="20%">
        <SideBar />
      </Box>
      <Box w="80%">
        <Product />
      </Box>
    </Flex>
  );
};