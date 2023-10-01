import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { getcartData, removeFromCart } from "../Redux/Cart/action";

import {
  Box,
  Image,
  Text,
  Badge,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const Cart = () => {
  let userid = localStorage.getItem("userid");
  const cartData = useSelector((store) => store.cardReducer.cart);
  const dispatch = useDispatch();
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    width: "70%",
    margin: "auto"
  };

  const handelRemove = (id) => {
    let newCart = cartData.filter((el) => el.id != id)
    dispatch(removeFromCart(userid, newCart))
  }
  useEffect(() => {
    dispatch(getcartData(userid))
  }, [])

  const totalAmount = cartData.reduce((acc, item) => acc + item.price, 0);


  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handleCheckout = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePay = () => {
    setTimeout(() => {
      setPaymentSuccessful(true);
    }, 2000);
  };


  const resetPayment = () => {
    setPaymentSuccessful(false);
    setIsPaymentModalOpen(false);
  };
  return (
    <div >
      <h2>Your Cart: {totalAmount}</h2>
      {cartData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
        <div style={gridContainerStyle}>
          {cartData.map((el) => (
            <Box
              key={el.id}
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
                  Rs.{el.price}
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
              <button onClick={() => handelRemove(el.id)}>Remove</button>
            </Box>
          ))}
          
        </div>
        <Button colorScheme="teal" style={{ marginTop: "15px" }} onClick={handleCheckout}>Checkout</Button>
        </div>
        
      )}

      <Modal isOpen={isPaymentModalOpen} onClose={resetPayment}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment</ModalHeader>
          <ModalCloseButton />
          {paymentSuccessful ? (
            <ModalBody>
              <Text fontSize="xl" fontWeight="bold">
                Payment Successful!
              </Text>
            </ModalBody>
          ) : (
            <ModalBody>
              <Text fontSize="xl">Click "Pay" to process your payment.</Text>
            </ModalBody>
          )}
          <ModalFooter>
            {paymentSuccessful ? (
              <Button colorScheme="teal" onClick={resetPayment}>
                Close
              </Button>
            ) : (
              <Button colorScheme="teal" onClick={handlePay}>
                Pay
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
export { Cart }