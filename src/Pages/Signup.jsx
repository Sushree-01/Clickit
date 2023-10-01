import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Avatar,
  Text,
  Link
} from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clickitStyle = {
      fontFamily: 'Pacifico, cursive',
      fontSize: '1.5rem',
      textShadow: '2px 0px 0px #4299E1',
  };

  const handleSubmit =  (e) => {
      e.preventDefault();
      console.log("click");
      fetch(`https://6517e61b582f58d62d353538.mockapi.io/users?email=${email}`)
          .then(response => response.json())
          .then(data => {
              if (data.length > 0) {
                  alert("Email is Already Present in Our System");
                  window.location.reload();
              }
              else {                    
                      const otp_val = Math.floor(Math.random() * 10000);
                      const emailKey = email;
                      const emailbody = `<h1>Please Verify Your OTP</h1> <br>
      <h2>Your OTP is </h2>${otp_val}`;
                      window.Email.send({
                          SecureToken: "3a0f5131-cd12-4011-98fc-17d850be133a",
                          To: emailKey,
                          From: "senas17941@byorby.com",
                          Subject: "Welcome to Clickit, OTP verification",
                          Body: emailbody
                      }).then(
                          message => {
                              if (message === "OK") {
                                  Navigate("/verifyOTP", { state: { otp_val, email, name, password } })
                              }
                          }
                      );          
              }
          })
          .catch(error => console.error(error));
  };

  const handleCancle = () => {
      Navigate('/');
  }
  return (
      <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg="white"
      >
          <Stack
              spacing={4}
              w={'full'}
              maxW={'md'}
              bg="transparent"
              border="2px solid black"
              rounded={'xl'}
              boxShadow={'lg'}
              p={6}
              my={12}>
              <Text style={clickitStyle} fontSize="xl" fontWeight="bold" color="black" mb={4}>Clickit</Text>

              <form>
                  <FormControl id="userName">
                      <Avatar size="xl" src="https://bit.ly/sage-adebayo"></Avatar>
                  </FormControl>

                  <FormControl id="name" isRequired color="black">
                      <FormLabel>Name</FormLabel>
                      <Input
                          placeholder="Enter Your Name"
                          _placeholder={{ color: 'gray.500' }}
                          type="text"
                          value={name}
                          color="black"
                          onChange={(e) => setName(e.target.value)}
                           
                      />
                  </FormControl>

                  <FormControl id="email" isRequired color="black">
                      <FormLabel marginTop={2}>Email address</FormLabel>
                      <Input
                          placeholder="your-email@example.com"
                          _placeholder={{ color: 'gray.500' }}
                          type="email"
                          value={email}
                          color="black"
                          onChange={(e) => setEmail(e.target.value)}
                         
                      />
                  </FormControl>

                  <FormControl id="password" isRequired color="black">
                      <FormLabel marginTop={2}>Password</FormLabel>
                      <Input
                          placeholder="password"
                          _placeholder={{ color: 'gray.500' }}
                          type="password"
                          value={password}
                          color="black"
                          onChange={(e) => setPassword(e.target.value)}
                          
                      />
                  </FormControl>

                  <Stack spacing={6} direction={['column', 'row']}>
                      <Button
                          bg={'red.400'}
                          color={'white'}
                          w="full"
                          _hover={{
                              bg: 'red.500',
                          }}
                          marginTop={3}
                          onClick={handleCancle}
                      >
                          Cancel
                      </Button>


                      <Button
                          bg={'blue.400'}
                          color={'white'}
                          w="full"
                          _hover={{
                              bg: 'blue.500',
                          }}
                          marginTop={3}
                          type='submit'
                          onClick={handleSubmit}
                      >
                          Submit
                      </Button>
                  </Stack>
              </form>

              <Text mt={4} textAlign="center" fontSize="sm" color="black">Already have an account?
                  <Link as={RouterLink} to="/login" color="blue.500" marginLeft={2}>
                      Log in
                  </Link>
              </Text>
          </Stack>
      </Flex>
  )
}