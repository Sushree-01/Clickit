// import React from 'react'
// // import login from ""
// // import {Link} from "react-router-dom"
// import {
//   Box,
//   Flex,
//   Link,
//   IconButton,
//   useDisclosure,
//   useMediaQuery,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerHeader,
//   DrawerBody,
//   List,
//   ListItem,
//   Button,
//   Spacer
// } from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';
// export const Navbar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');

//   return (
//     <Flex
//     as="nav"
//     align="center"
//     justify="space-between"
//     padding={{ base: 4, md: 6, lg: 8 }}
//     backgroundColor="gray.800"
//     color="white"
//     height={'auto'}
//   >
//     <Link href="#" marginLeft={"50px"} fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" _hover={{ transform: 'scale(1.1)' }}>
//       clickIt
//     </Link>
//     {isLargerThanTablet && (
//       <>
//         <Spacer />
//         <Box>
//    <Link href="/product" _hover={{ color: 'teal.500' }} marginX="2">New Arrivals</Link>

//   <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Women</Link>
//   <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Men</Link>
//   <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Kids</Link>
//   <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Cart</Link>
//   <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Your Profile</Link>
//   <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Contact</Link>
//   <Link href="#" _hover={{ color: 'teal.500' }} marginX="2">Wishlist</Link>
  
// </Box>
//         <Spacer />
//       </>
//     )}
//       {/* <Button
//       marginRight={"50px"}
//         _hover={{ transform: 'scale(1.1)', color: 'teal.500' }}
//         display={{ base: 'none', md: 'block' }}
//         onClick={onClose}
//       >
//         Login
        
//       </Button> */}
//       <Link to="../Pages/Login">
//         <Button
//           marginRight={'50px'}
//           _hover={{ transform: 'scale(1.1)', color: 'teal.500' }}
//           display={{ base: 'none', md: 'block' }}
//           onClick={onClose}
//         >
//           Login
//         </Button>
//       </Link>
//     {!isLargerThanTablet && (
//       <IconButton
//         icon={<HamburgerIcon />}
//         aria-label="Open Menu"
//         fontSize="24px"
//         onClick={onOpen}
//       />
//     )}
//     <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
//       <DrawerOverlay>
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Menu</DrawerHeader>
//           <DrawerBody>
//             <List>
//               <ListItem>
//                 <Link href="#">Women</Link>
//               </ListItem>
//               <ListItem>
//                 <Link href="#">Men</Link>
//               </ListItem>
//               <ListItem>
//                 <Link href="#">Kids</Link>
//               </ListItem>
//               <ListItem>
//                 <Link href="#">Cart</Link>
//               </ListItem>
//               <ListItem>
//                 <Link href="#">Your Profile</Link>
//               </ListItem>
//               <ListItem>
//                 <Link href="#">Contact</Link>
//               </ListItem>
//               <ListItem>
//                 <Link href="#">Wishlist</Link>
//               </ListItem>
//               <ListItem>
//                 <Link href="#">LogIn</Link>
//               </ListItem>
//             </List>
//             <Button
//               onClick={onClose}
//               variant="ghost"
//               marginTop="2"
//               width="100%"
//               _hover={{ bg: 'transparent' }}
//             >
//               Close
//             </Button>
//           </DrawerBody>
//         </DrawerContent>
//       </DrawerOverlay>
//     </Drawer>
//   </Flex>
   

//   )
// }




import React from 'react';
import {
  Box,
  Flex,
  Link as ChakraLink, // Rename Chakra UI's Link to avoid conflicts
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
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink from React Router

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
      <RouterLink to="/"> {/* Use RouterLink to navigate to the home page */}
        <ChakraLink
          marginLeft={'50px'}
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          _hover={{ transform: 'scale(1.1)' }}
        >
          clickIt
        </ChakraLink>
      </RouterLink>

      {isLargerThanTablet && (
        <>
          <Spacer />
          <Box>
            <ChakraLink as={RouterLink} to="/product" _hover={{ color: 'teal.500' }} marginX="2">
              New Arrivals
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/women" _hover={{ color: 'teal.500' }} marginX="2">
              Women
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/men" _hover={{ color: 'teal.500' }} marginX="2">
              Men
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/kids" _hover={{ color: 'teal.500' }} marginX="2">
              Kids
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/cart" _hover={{ color: 'teal.500' }} marginX="2">
              Cart
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/profile" _hover={{ color: 'teal.500' }} marginX="2">
              Your Profile
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/contact" _hover={{ color: 'teal.500' }} marginX="2">
              Contact
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/wishlist" _hover={{ color: 'teal.500' }} marginX="2">
              Wishlist
            </ChakraLink>
          </Box>
          <Spacer />
        </>
      )}

      <RouterLink to="/login"> {/* Use RouterLink to navigate to the Login page */}
        <Button
          marginRight={'10px'}
          _hover={{ transform: 'scale(1.1)', color: 'teal.500' }}
          display={{ base: 'none', md: 'block' }}
          onClick={onClose}
        >
          Login
        </Button>
      </RouterLink>

      <RouterLink to="/signup"> {/* Use RouterLink to navigate to the Login page */}
        <Button
          marginRight={'50px'}
          _hover={{ transform: 'scale(1.1)', color: 'teal.500' }}
          display={{ base: 'none', md: 'block' }}
          onClick={onClose}
        >
          Signup
        </Button>
      </RouterLink>
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
                {/* Define links for the menu items here */}
                <ListItem>
                  <ChakraLink as={RouterLink} to="/women">
                    Women
                  </ChakraLink>
                </ListItem>
                <ListItem>
                  <ChakraLink as={RouterLink} to="/men">
                    Men
                  </ChakraLink>
                </ListItem>
                <ListItem>
                  <ChakraLink as={RouterLink} to="/kids">
                    Kids
                  </ChakraLink>
                </ListItem>
                <ListItem>
                  <ChakraLink as={RouterLink} to="/cart">
                    Cart
                  </ChakraLink>
                </ListItem>
                <ListItem>
                  <ChakraLink as={RouterLink} to="/profile">
                    Your Profile
                  </ChakraLink>
                </ListItem>
                <ListItem>
                  <ChakraLink as={RouterLink} to="/contact">
                    Contact
                  </ChakraLink>
                </ListItem>
                <ListItem>
                  <ChakraLink as={RouterLink} to="/wishlist">
                    Wishlist
                  </ChakraLink>
                </ListItem>
                <ListItem>
                  <ChakraLink as={RouterLink} to="/login">
                    Login
                  </ChakraLink>
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
  );
};
