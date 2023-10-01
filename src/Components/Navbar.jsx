import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Link,
  IconButton,
  useDisclosure,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  Button,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
  DrawerFooter
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState,useEffect } from 'react';
import styled from 'styled-components';
export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolling(currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  const navbarStyle = {

    transform: scrolling ? 'translateY(-100%)' : 'translateY(0)',
    transition: 'transform 0.3s ease-in-out',
  };
const Navigate=useNavigate()
  return (
      <Flex
  as="nav"
  align="center"
  justify="space-around"
  padding={{ base: 4, md: 6, lg: 8 }}
  backgroundColor="gray.800"
  color="white"
  height={'auto'}
  className={`navbar`}
  style={navbarStyle}
>
  <Link href="#" marginLeft={'50px'} fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" _hover={{ transform: 'scale(1.1)' }}>
    clickIt
  </Link>
  
  {isLargerThanTablet && (
    <>
      <Spacer />
      <Box display={'flex'} width={"30%"} justifyContent={'space-around'}>
        <Link href="/product" _hover={{ color: 'teal.500' }} marginX="2">
          Store
        </Link>
        <Link href="/cart" _hover={{ color: 'teal.500' }} marginX="2" >
          Cart
        </Link>
        <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">
          Profile
        </Link>
        <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">
          Wishlist
        </Link>
      </Box>
      <Spacer />
    </>
  )}
  <Box display={{ base: 'none', md: 'block' }} mr={"50px"}>
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>}
      />
      <Input type="text" placeholder="Search" marginRight="2" />
    </InputGroup>
  </Box>
  
  <Button onClick={()=>Navigate("/login")}
    marginRight={'50px'}
    _hover={{ transform: 'scale(1.1)', color: 'teal.500' }}
    display={{ base: 'none', md: 'block' }}
    // onClick={onClose}
  >
    Login
  </Button>
  {!isLargerThanTablet && (
    <IconButton
      icon={<HamburgerIcon />}
      aria-label="Open Menu"
      fontSize="24px"
      onClick={onOpen}
    />
  )}
<Drawer placement="right" onClose={onClose} isOpen={isOpen}>
  <DrawerOverlay>
    <DrawerContent bgColor="gray.700" color="white" p="4">
      <DrawerCloseButton />
      <DrawerHeader>Menu</DrawerHeader>
      <DrawerBody>
        <List>
          <ListItem>
            <Link href="#" _hover={{ color: 'teal.500' }}>
              Women
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" _hover={{ color: 'teal.500' }}>
              Men
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" _hover={{ color: 'teal.500' }}>
              Kids
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" _hover={{ color: 'teal.500' }}>
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" _hover={{ color: 'teal.500' }}>
              Your Profile
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" _hover={{ color: 'teal.500' }}>
              Contact
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" _hover={{ color: 'teal.500' }}>
              Wishlist
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" _hover={{ color: 'teal.500' }}>
              LogIn
            </Link>
          </ListItem>
        </List>
      </DrawerBody>
      <DrawerFooter>
        <Button
          onClick={onClose}
          variant="outline"
          borderColor="teal.500"
          color="teal.500"
          width="100%"
          _hover={{ bg: 'teal.500', color: 'white' }}
        >
          Close
        </Button>
      </DrawerFooter>
    </DrawerContent>
  </DrawerOverlay>
</Drawer>

</Flex>
  )
}
