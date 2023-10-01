import React from 'react';
import { Box, Image, Text, Badge, Flex, Button } from '@chakra-ui/react';
 
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../Redux/Cart/action';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

 

const ProductCard = ({ product}) => {
 
  const { brand, gender, id, image, name, price, rating } = product;
  const dispatch = useDispatch()
  let userId = localStorage.getItem("userid");
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const Navigate = useNavigate()

  const handleAddToCart = () => {


    if (isAuth) {
      axios.get(`https://6517e61b582f58d62d353538.mockapi.io/users/${userId}`).then((res) => {
      
     let data =[...res.data.cart,product]
        dispatch(AddToCart(userId,data));
      })
    }
    else {
      Navigate("/login")
    }

  }
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
      maxW="300px"
    >
      <Image src={image} alt={name} maxH="200px" objectFit="cover" />

      <Box mt="2">
        <Text fontWeight="semibold" fontSize="lg" lineHeight="tight" isTruncated>
          {name}
        </Text>
        <Text color="gray.500">{brand}</Text>
        <Text color="gray.700" fontSize="xl" mt="2">
          Rs.{price}
        </Text>
      </Box>

      <Flex justify="space-between" mt="4">
        <Box>
          <Badge colorScheme="blue">{gender}</Badge>
        </Box>
        <Box>
          <Badge colorScheme="green">{rating} ★</Badge>
        </Box>
      </Flex>

 
      <Button colorScheme="teal" mt="4" onClick={handleAddToCart}>
 
      {/* <Button colorScheme="teal" mt="4" > */}
 
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;