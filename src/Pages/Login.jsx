 import React from 'react';
import { Button, Flex, FormControl, FormLabel, Input, Stack, Avatar, Text, Link, useToast } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { LOGIN_SUCCESS } from "../Redux/Login/actionType"
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const toast = useToast();
    const dispatch = useDispatch();
    const clickitStyle = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '1.5rem',
        textShadow: '2px 0px 0px #4299E1',
    };
    const handleSubmit = async () => {
        try {
            const response = await fetch(`https://6517e61b582f58d62d353538.mockapi.io/users?email=${email}`);
            const data = await response.json();
            if (data[0].password === password) {
                localStorage.setItem("userid", data[0].userID);    
                localStorage.setItem("isAuth", true);
                dispatch({ type: LOGIN_SUCCESS });
                toast({
                    title: 'Account Login.',
                    description: `Account Login successfully ${data[0].name}.`,
                    status: 'success',
                    duration: 1000,
                    isClosable: true,
                    onCloseComplete: () => {
                        Navigate("/");
                    },
                });
            } else {
                toast({
                    title: 'Error Account Login.',
                    description: "Kindly Check Your Password.",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                });
            }
        } catch (error) {
            toast({
                title: 'Error Account Login.',
                description: "Kindly Check Your Credential...",
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg="white">
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

                <Text style={clickitStyle} fontSize="xl" fontWeight="bold" mb={4} color="black">Clickit</Text>
                <FormControl id="userName">
                    <Avatar size="xl" src="https://bit.ly/dan-abramov"></Avatar>
                </FormControl>
                <FormControl id="email" isRequired color="black">
                    <FormLabel>Email address</FormLabel>
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
                    <FormLabel>Password</FormLabel>
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
                        }}>
                        Cancel
                    </Button>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={handleSubmit}>
                        Submit
                    </Button>
                </Stack>
                <Stack>
                    <Text mt={4} textAlign="center" fontSize="sm" color="black">
                        Don't have an account?
                        <Link as={RouterLink} to="/signup" color="blue" marginLeft={2}>
                            Sign up
                        </Link>
                    </Text>
                </Stack>
            </Stack>
        </Flex>
    )
};
export default Login;