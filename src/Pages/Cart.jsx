import { useDispatch, useSelector } from "react-redux";
import store from "../Redux/store";
import { useEffect } from "react";
import { getcartData, removeFromCart } from "../Redux/Cart/action";
import { Box, Image, Text, Badge, Flex} from '@chakra-ui/react';
const Cart = () => {
  let userid = localStorage.getItem("userid");
  const cartData = useSelector((store) => store.cardReducer.cart);
  const dispatch = useDispatch()
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    width: "70%",
    margin: "auto"
  };

  const handelRemove = (id)=>{
    let newCart = cartData.filter((el)=>el.id!=id)
    dispatch(removeFromCart(userid,newCart))
  }
  useEffect(() => {
    dispatch(getcartData(userid))
  }, [])
  return (
    <div >
      <h2>Your Cart</h2>
      {cartData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={gridContainerStyle}>
          {cartData.map((el) => (
            <Box
            key={el.id }
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="4"
            boxShadow="md"
            maxW="300px"
          >
            <Image src={el.image} alt={el.name} maxH="200px" objectFit="cover" />
      
            <Box mt="2">
              <Text fontWeight="semibold" fontSize="lg" lineHeight="tight" isTruncated>
                {el.name}
              </Text>
              <Text color="gray.500">{el.brand}</Text>
              <Text color="gray.700" fontSize="xl" mt="2">
                ${el.price}
              </Text>
            </Box>
      
            <Flex justify="space-between" mt="4">
              <Box>
                <Badge colorScheme="blue">{el.gender}</Badge>
              </Box>
              <Box>
                <Badge colorScheme="green">{el.rating} ★</Badge>
              </Box>
            </Flex>
            <button onClick={()=>handelRemove(el.id)}>Remove</button>
          </Box>
          ))}
        </div>
      )}
    </div>
  );
}
export { Cart }