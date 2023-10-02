import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
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
import { LOGOUT } from '../Redux/Login/actionType';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Navbar = () => {
  // const [searchparams, setSearchparams] = useSearchParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const initialSearch = searchparams.get('search');
  const Navigate = useNavigate()

  const [search, setsearch] = useState("")
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const handleLogout = () => {
    dispatch({ type: LOGOUT })
    localStorage.clear();
  }
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
      zIndex={"-1"}
    >
      <Link href="/" marginLeft={'50px'} fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" _hover={{ transform: 'scale(1.1)' }}>
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
          />
          <Input type="text" placeholder="Search" marginRight="2" value={search}
            onChange={(e) => setsearch(e.target.value)} />
          <Link href={`/product/${search}`} alignSelf={"center"}><button>Search</button></Link>
        </InputGroup>
      </Box>
      {
        isAuth ? <Button onClick={handleLogout}
          marginRight={'50px'}
          _hover={{ transform: 'scale(1.1)', color: 'teal.500' }}
          display={{ base: 'none', md: 'block' }}

        >
          Logout
        </Button> : <Button
          marginRight={'50px'}
          onClick={() => Navigate("/login")}
          _hover={{ transform: 'scale(1.1)', color: 'teal.500' }}
          display={{ base: 'none', md: 'block' }}
        >
          Login
        </Button>
      }

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
                  {isAuth ? <Link href="#" _hover={{ color: 'teal.500' }} onClick={handleLogout}>
                    LogOut
                  </Link> :
                    <Link href="#" _hover={{ color: 'teal.500' }} onClick={() => Navigate("/login")}>
                      LogIn
                    </Link>}

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
