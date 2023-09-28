import React from 'react'
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
  Spacer
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');

  return (
    <Flex
    as="nav"
    align="center"
    justify="space-between"
    padding={{ base: 4, md: 6, lg: 8 }}
    backgroundColor="gray.800"
    color="white"
    height={'auto'}
  >
    <Link href="#" marginLeft={"50px"} fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" _hover={{ transform: 'scale(1.1)' }}>
      clickIt
    </Link>
    {isLargerThanTablet && (
      <>
        <Spacer />
        <Box>
  <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Women</Link>
  <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Men</Link>
  <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Kids</Link>
  <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Cart</Link>
  <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Your Profile</Link>
  <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Contact</Link>
  <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Wishlist</Link>
</Box>
        <Spacer />
      </>
    )}
      <Button
      marginRight={"50px"}
        _hover={{ transform: 'scale(1.1)', color: 'teal.500' }}
        display={{ base: 'none', md: 'block' }}
        onClick={onClose}
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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <List>
              <ListItem>
                <Link href="#">Women</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Men</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Kids</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Cart</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Your Profile</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Contact</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Wishlist</Link>
              </ListItem>
              <ListItem>
                <Link href="#">LogIn</Link>
              </ListItem>
            </List>
            <Button
              onClick={onClose}
              variant="ghost"
              marginTop="2"
              width="100%"
              _hover={{ bg: 'transparent' }}
            >
              Close
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </Flex>
   

  )
}
