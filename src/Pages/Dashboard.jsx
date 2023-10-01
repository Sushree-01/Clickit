import React from 'react'
import {
  Box,
  Text,
  Button,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Grid,
  Link,
  Container,
  useBreakpointValue
} from "@chakra-ui/react";
import { useState,useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import axios from 'axios';
import { motion, isValidMotionProp } from 'framer-motion'
export const Dashboard = () => {
  const images=["https://m.media-amazon.com/images/G/31/img21/MA2023/AW23/AF/AW_2023_Desktop_Men._SX3000_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/BOTW23/27thsept/Men_2_3000x900_1695858530844_0._CB577170120_.png"
,"https://m.media-amazon.com/images/G/31/img21/MA2023/Sept/world-cup/updated/woMen_Desktop_800._CB578332367_.jpg"]
const images2 = [
  'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Van-Heusen_2._SX846_QL85_FMpng_.png',
  'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Allen-Solly_47._SX846_QL85_FMpng_.png',
  'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/USPA_14._SX846_QL85_FMpng_.png',
  'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/brandsinfocus/Peter-England_17._SX846_QL85_FMpng_.png',
  'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/brandsinfocus/Pepe-Jeans_19._SX846_QL85_FMpng_.png',
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Arrow_37._SX846_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/sports/Adidas_2._SX846_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Lee_3._SX846_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/Dennis-Lingo._SX846_QL85_.jpg",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/brandsinfocus/Symbol_52._SX846_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Levi-s_54._SX846_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/brandsinfocus/PUMA_29._SX846_QL85_FMpng_.png"

];
const bloginfo = [
  {
    title: "Handlooms from Bharat",
    image: "https://indbiz.gov.in/wp-content/uploads/2018/10/109.jpg",
    date: "Sept 17, 2023",
    desc: "Discover the rich handloom heritage of Bharat in our latest collection."
  },
  {
    title: "Paris Fashion Week",
    image: "https://www.filmibeat.com/img/2023/09/pfwmain1-1695646750.jpg",
    date: "August 17, 2023",
    desc: "Explore the latest trends and highlights from the glamorous Paris Fashion Week."
  },
  {
    title: "Gucci Expanding in India",
    image: "https://wwd.com/wp-content/uploads/2016/12/41a2739.jpg?w=1000&h=563&crop=1&resize=1000%2C563",
    date: "May 17, 2023",
    desc: "Gucci's exciting expansion plans in India: What's in store for fashion enthusiasts."
  },
  {
    title: "Fashion in the '80s",
    image: "https://preview.redd.it/jgb50tzskklb1.jpg?width=960&crop=smart&auto=webp&s=5fbcf3f3b6c1905a22d624d6d22b69762b30a4fc",
    date: "Feb 17, 2023",
    desc: "A nostalgic journey back to the fashion trends that defined the '80s era."
  }
];
const carousaal=[""]
const [currentIndex, setCurrentIndex] = useState(0);
const [cardsData,setcarddata]=useState([])
const [activeCategory, setActiveCategory] = useState("male");
const[filtereddata,setfiltereddata]=useState([])
const [currentProductIndex, setCurrentProductIndex] = useState(Math.floor(Math.random() * 51));
const fontSize = useBreakpointValue({ base: "10px", md: "md", lg: "lg" });
const imageSize = useBreakpointValue({ base: "100%", md: "80%", lg: "60%" });
useEffect(() => {
  axios.get(`https://65151b4adc3282a6a3cddbd1.mockapi.io/products`)
  .then((res)=>{
    setcarddata(res.data)
    setfiltereddata(res.data.filter((e)=>e.gender===activeCategory))
  })
  .catch((err)=>[
    console.log(err)
  ])
  const interval = setInterval(() => {
    goToNextSlide();
    setCurrentProductIndex(Math.floor(Math.random() * 50)
  );
  }, 5000);

  return () => {
    clearInterval(interval);
    
  };
}, [activeCategory]);
const goToNextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const goToPrevSlide = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
};

const handleSwipe = (e) => {
  if (e.deltaX > 50) {
    goToPrevSlide();
  } else if (e.deltaX < -50) {
    goToNextSlide();
  }
};
const handletab=(e)=>{
  setActiveCategory(e)
}
const [currentPage, setCurrentPage] = useState(0);
const cardsPerPage = 3;
const totalPages = Math.ceil(cardsData.length / cardsPerPage);
const handleNextPage = () => {
  if (currentPage < totalPages - 1) {
    setCurrentPage(currentPage + 1);
  }
};

const handlePrevPage = () => {
  if (currentPage > 0) {
    setCurrentPage(currentPage - 1);
  }
};
const renderCards = () => {
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  return filtereddata.slice(startIndex, endIndex).map((card) => (
     <CARDDIV key={card.id}>
        <Box
    className="card"
    borderWidth="1px"
    borderRadius="md"
    p="4"
    boxShadow="md"
    mb="4"
    textAlign="left"
  >
    <Image src={card.image} alt={card.name} className="image" />
    <Text className='name' fontWeight="bold" mt="2">
      {card.name}
    </Text>
    <Text color="gray.600" className='brand'>
      {card.brand}
    </Text>
    <Text display="flex" textAlign={'center'} className='rating'>
    <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>{card.rating}
    </Text>
    <Text color="teal.500" mt="2" display="flex" className='price'>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z"/></svg>{card.price}
    </Text>
    <div className='buttons'>
      <button className='buttonadd'>Add</button>
      <button className='buttonbuy'>Buy</button>
    </div>
  </Box>
     </CARDDIV>
  ))
};
const blogsPerPage = 3;
const [currentPage1, setCurrentPage1] = useState(0);

  const nextSlide = () => {
    if (currentPage1 < bloginfo.length - blogsPerPage) {
      setCurrentPage1(currentPage1 + blogsPerPage);
    }
  };
  const prevSlide = () => {
    if (currentPage1 > 0) {
      setCurrentPage1(currentPage1 - blogsPerPage);
    }
  };
  function rotateImage(element, rotate) {
    if (rotate) {
      element.style.transform = 'rotate(10deg)';
      element.parentNode.style.borderRadius = '50%';
      element.parentNode.style.overflow = 'hidden';
    } else {
      element.style.transform = 'rotate(0deg)';
      element.parentNode.style.borderRadius = '0';
      element.parentNode.style.overflow = 'visible';
    }
  }
  const currentData = bloginfo.slice(currentPage1, currentPage1 + blogsPerPage);
  return (
    <>
    <script src="https://kit.fontawesome.com/6374a7542c.js" crossorigin="anonymous"></script>
    <CARTICON>
    <Box
      position="fixed"       
      right="0"     
      transform="translateY(-50%)" 
      zIndex="9999" 
      display={'flex'}
      justifyContent={'end'}
      cursor={'pointer'}   
    >
      
      <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
      
    </Box>
    </CARTICON>
      <Box position="relative" overflow="hidden" onTouchMove={handleSwipe} mt={"20px"}>
      <Carousel
       selectedItem={currentIndex}
       onChange={setCurrentIndex}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
    </Box>
    <DIV1>
    <Box className="section-container" backgroundColor="gray.700">
      <Text className="section-title">
        Elevate Your Style, <br /> Embrace the Extraordinary.
      </Text>
      <Text className="section-text">
        Pioneering the fashion frontier, our platform brings together style enthusiasts, designers, and brands, igniting a revolution in unique, ownable fashion finds.
      </Text>
      <Button className="section-button">
        Shop Now
      </Button>
    </Box>
    </DIV1>
    <DIV>
    <Box textAlign="center" padding="2rem">
  <Text
    fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
    fontWeight="bold"
    color="green.500"
  >
    We Got You Covered
  </Text>
</Box>
<DIV10>
<div className="image-container">
        <div>
          <div className='image-wrap'>
          <img
            src="https://m.media-amazon.com/images/I/71etIJtcrBL._AC_UF226,226_FMjpg_.jpg"
            alt="1"
            className="responsive-image"
            onMouseEnter={(e)=>{rotateImage(e.target, true)}}
            onMouseLeave={(e)=>{rotateImage(e.target, false)}}
          />
          </div>
          <p className="image-text">Something For Partner?</p>
        </div>
        <div className="image-card">
        <div className='image-wrap'>
          <img
            src="https://m.media-amazon.com/images/I/71jmhrRaSmL._AC_UF226,226_FMjpg_.jpg"
            alt="1"
            className="responsive-image"
            onMouseEnter={(e)=>{rotateImage(e.target, true)}}
            onMouseLeave={(e)=>{rotateImage(e.target, false)}}
          />
          </div>
          <p className="image-text">Something For Siblings?</p>
        </div>
        <div>
        <div className='image-wrap'>
          <img
            src="https://m.media-amazon.com/images/I/71KXIckY8PL._AC_UF226,226_FMjpg_.jpg"
            alt="1"
            className="responsive-image"
            onMouseEnter={(e)=>{rotateImage(e.target, true)}}
            onMouseLeave={(e)=>{rotateImage(e.target, false)}}
          />
          </div>
          <p className="image-text">Or For Family?</p>
        </div>
      </div>
</DIV10> 
    </DIV>
   {cardsData.length>0?<DIVFADE>
      <div><Text fontSize={"xl"} mb={'20px'} color={'green.400'}  fontWeight={'bold'}>Top Picks For You</Text>
       <Box
      borderWidth="1px"
      borderRadius="md"
      p="2"
      boxShadow="md"
      mb="4"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="70%"
      margin="auto"
      fontSize={fontSize}
      cursor={"pointer"}
    >
      <Image
        src={cardsData[currentProductIndex].image}
        alt={cardsData[currentProductIndex].name}
        style={{ width: imageSize, alignSelf: 'center', height: 'auto' }}
        
      />
      <Text className='name' fontWeight="bold" mt="2">
        {cardsData[currentProductIndex].name}
      </Text>
      <Text color="gray.600" className='brand'>
        {cardsData[currentProductIndex].brand}
      </Text>
      <Text display="flex" textAlign="center" className='rating'>
      <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
        {cardsData[currentProductIndex].rating}
      </Text>
      <Text color="teal.500" mt="2" display="flex" className='price'>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z"/></svg>
        {cardsData[currentProductIndex].price}
      </Text>
    </Box></div>
    <div><Text fontSize={"xl"} mb={'20px'} color={'green.400'}  fontWeight={'bold'}>Just Arrived</Text>
       <Box
      borderWidth="1px"
      borderRadius="md"
      p="2"
      boxShadow="md"
      mb="4"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="70%"
      margin="auto"
      fontSize={fontSize}
      cursor={"pointer"}
    >
      <Image
        src={cardsData[currentProductIndex+2].image}
        alt={cardsData[currentProductIndex+2].name}
        style={{ width: imageSize, alignSelf: 'center', height: 'auto' }}
        
      />
      <Text className='name' fontWeight="bold" mt="2">
        {cardsData[currentProductIndex+2].name}
      </Text>
      <Text color="gray.600" className='brand'>
        {cardsData[currentProductIndex+2].brand}
      </Text>
      <Text display="flex" textAlign="center" className='rating'>
      <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
        {cardsData[currentProductIndex+2].rating}
      </Text>
      <Text color="teal.500" mt="2" display="flex" className='price'>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z"/></svg>
        {cardsData[currentProductIndex+2].price}
      </Text>
    </Box></div>
     </DIVFADE>:""}
    <Box textAlign="center" padding="2rem">
  <Text
    fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
    fontWeight="bold"
    color="green.500"
  >
    Top Brands From Around The Globe
  </Text>
</Box>
    <div style={imageContainerStyles}>
      {images2.map((imagep, index) => (
        <Imagep key={index} href="#">
          <Image src={imagep} alt={`Image ${index + 1}`} />
        </Imagep>
      ))}
    </div>
    <div>
    <Box textAlign="center" padding="2rem">
  <Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="green.500">
    TOP INTERESTING
  </Text>
  <Text
    fontSize={{ base: "md", md: "lg", lg: "xl" }}
    color="gray.600"
    mt="1rem"
  >
    Browse the collection of our dark best-selling and top interesting products.
    You’ll definitely find what you are looking for.
  </Text>
</Box>
<Tabs
      isFitted
      isLazy
      variant="enclosed"
      colorScheme="blue"
      alignContent="center"
      w="80%"
      margin="auto"
    >
      <TabList
        w="100%"
        fontSize="xl"
        display="flex"
        justifyContent="space-between"
        bg="gray.200"
        borderRadius="md"
      >
        <Tab
          w="100%"
          onClick={() => handletab('male')}
          _selected={{ bg: 'green.500', color: 'white' }}
        >
          Men
        </Tab>
        <Tab
          w="100%"
          onClick={() => handletab('female')}
          _selected={{ bg: 'green.500', color: 'white' }}
        >
          Women
        </Tab>
        <Tab
          w="100%"
          onClick={() => handletab('kids')}
          _selected={{ bg: 'green.500', color: 'white' }}
        >
          Kids
        </Tab>
      </TabList>
        <TabPanels>
        <TabPanel>
        <TABDIV>
        <div className="card-carousel" >
          <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={4}>{renderCards()}</Grid>
          </div>
      {currentPage > 0 && (
        <button className="prev-button" onClick={handlePrevPage}>
         <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button className="next-button" onClick={handleNextPage}>
          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>
        </button>
      )}
        </TABDIV>
        </TabPanel>
          <TabPanel>
          <TABDIV>
          <div className="card-carousel" >
          <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={4}>{renderCards()}</Grid>
          </div>
          {currentPage > 0 && (
        <button className="prev-button" onClick={handlePrevPage}>
         <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button className="next-button" onClick={handleNextPage}>
          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>
        </button>
      )}
    </TABDIV>
          </TabPanel>
          <TabPanel>
          <TABDIV>
          <div className="card-carousel" >
          <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={4}>{renderCards()}</Grid>
          </div>
          {currentPage > 0 && (
        <button className="prev-button" onClick={handlePrevPage}>
         <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button className="next-button" onClick={handleNextPage}>
          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>
        </button>
      )}
    </TABDIV>
      </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  <DIV5>
  <div className="image-container">
    <div className="image-wrapper">
      <img src="https://xstore.8theme.com/demos/dark/wp-content/uploads/sites/5/2016/05/banner-man.jpg" alt="1" className="animated-image"/>
      <div  className="overlay">
      <div className="text">HOME TO BRANDS FROM AROUND THE WORLD</div>
      </div>
    </div>
    <div className="image-wrapper">
      <img src="https://xstore.8theme.com/demos/dark/wp-content/uploads/sites/5/2016/05/banner-x.jpg" alt=" 2" className="animated-image"/>
      <div className="overlay">
      <div className="text">MIN 30% OFF ON ALL PRODUCTS</div>
      </div>
    </div>
    <div className="image-wrapper">
      <img src="https://xstore.8theme.com/demos/dark/wp-content/uploads/sites/5/2016/05/banner-girl.jpg" alt=" 3" className="animated-image"/>
      <div className="overlay">
      <div className="text">BRACE YOURSELF WINTER 2023 SALE IS HERE</div>
      </div>
    </div>
  </div>
  </DIV5>
  <Box m={"20px"} mt={"30px"}> 
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2023/PD23/sbcheader/Ethnic-Auto_Hero_Scroll-_PC.gif" alt='banner'/>
  </Box>
  <DIV6>
  <Box textAlign="center" padding="2rem">
  <Text
    fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
    fontWeight="bold"
    color="green.500"
  >
    Best In The Business
  </Text>
</Box>
    <div className='maindiv'>
      
    <div>
      <h2>1.</h2>
      <h3>Place Order</h3>
      <h4>Explore our vast selection of products to make your order truly unique.</h4>
      <button>Read More</button>
    </div>
    <div>
      <h2>2.</h2>
      <h3>Payment process</h3>
      <h4>Enjoy a seamless and secure payment process for your fashion choices.</h4>
      <button>Read More</button>
    </div>
    <div>
      <h2>3.</h2>
      <h3>24 Hours Delivery</h3>
      <h4>Experience lightning-fast 24-hour delivery for your fashion desires</h4>
      <button>Read More</button>
    </div>
    </div>
  </DIV6>
  <DIV7>
  <div>
  <Box textAlign="center" py="4" color="black">
  <Text
  color="green.500"
    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
    fontWeight="bold"
  >
    Our Blogs
  </Text>
  <Text
    fontSize={{ base: "md", md: "lg", lg: "xl" }}
    color="black"
    mt="1rem"
  >
    We explore the world of fashion every month and bring the best stories from around the world for our readers.
  </Text>
</Box>
  <div className="blog-container">
      <div className="navigation">
        {currentPage1 > 0 && (
          <button className="prev-button" onClick={prevSlide}>
           {`<`}
          </button>
        )}
         <div className="blog-slides">
        {currentData.map((blog, index) => (
            <Box
            key={index}
            className="blog"
            borderWidth="1px"
            borderRadius="md"
            p="4"
            boxShadow="md"
            mb="4"
            textAlign="left"
          >
            <Image src={blog.image} alt={blog.title} className="image" />
            <Text fontSize="lg" fontWeight="bold" mt="2">
              {blog.title}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {blog.date}
            </Text>
            <Text fontSize="md" mt="2">
              {blog.desc}
            </Text>
            <Text fontSize="sm" color="teal.500" mt="2">
              Continue reading...
            </Text>
          </Box>
        ))}
      </div>
        {currentPage1 < bloginfo.length - blogsPerPage && (
          <button className="next-button" onClick={nextSlide}>
           {`>`}
          </button>
        )}
      </div>
    </div>
</div>
</DIV7>
<Box backgroundColor="gray.800" color="white" justifyContent={"space-around"}>
      <Container maxW="container.xl" py="8">
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Box flexBasis={{ base: '100%', md: '30%' }} mb={{ base: '4', md: '0' }}>
            <Text fontSize="xl" fontWeight="bold" align={"start"}>clickit</Text>
            <Text fontSize={"lg"} align={"start"} mt={"10px"}>Discover globally renowned brands at incredibly competitive prices, with swift delivery right to your doorstep.</Text>
            <Text fontSize={"sm"}  align={"start"} mt={"10px"}>Shop 2, Trillium Mall, Medical Square, Kurla, Mumbai-400070</Text>
          </Box>
          <Box  m={"10px"}>
  <Text fontWeight="bold" mb="2" align={"start"} >Quick Links</Text>
  <Flex flexDirection="column" align={"start"}>
    <Box mb="2">
      <Link href="#">Home</Link>
    </Box>
    <Box mb="2">
      <Link href="#">About Us</Link>
    </Box>
    <Box mb="2">
      <Link href="#">Delivery Info</Link>
    </Box>
    <Box mb="2">
      <Link href="#">Conditions</Link>
    </Box>
    <Box mb="2">
      <Link href="#">Order Tracking</Link>
    </Box>
    <Box mb="2">
      <Link href="#">My Account</Link>
    </Box>
    <Box mb="2">
      <Link href="#">My Wishlist</Link>
    </Box>
    <Box mb="2">
      <Link href="#">Careers</Link>
    </Box>
  </Flex>
</Box>
          <Box flexBasis={{ base: '100%', md: '25%' }} mb={{ base: '4', md: '0' }}>
            <Text fontWeight="bold" mb="2" align={"start"} textAlign={'center'} w={'80%'}>Latest Posts</Text>
            <Box align={"start"} mt={'10px'} border={'1px'} textAlign={'center'} w={'80%'}>
              <Text className="title">Indian handlooms</Text>
              <Text className="date">Sept 17, 2023</Text>
            </Box>
            <Box align={"start"} mt={'10px'} border={'1px'} textAlign={'center'} w={'80%'}>
              <Text className="title">Paris Fashion Week</Text>
              <Text className="date">August 17, 2023</Text>
            </Box>
            <Box align={"start"} mt={'10px'} border={'1px'} textAlign={'center'} w={'80%'}>
              <Text className="title">Gucci expanding in India</Text>
              <Text className="date">Feb 17, 2023</Text>
            </Box>
          </Box>
          
          <Box flexBasis={{ base: '100%', md: '25%' }} mb={{ base: '4', md: '0' }}>
            <Text fontWeight="bold" mb="2">Tags</Text>
            <Flex flexWrap="wrap">
              <Button variant="solid" size="sm" mr="2" mb="2">accessories</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">black</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">fashion</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">menfashion</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">sale</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">menfashion</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">jacket</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">denim</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">shirt</Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
      <Box backgroundColor="gray.700" textAlign="center" py={['2', '4']}>
      <Container maxW="container.xl" py={['2', '4']}>
        <Flex justifyContent={['center', 'space-between']} alignItems="center" flexWrap="wrap">
          <Text fontSize="sm" color="white" textAlign={['center', 'left']} mb={['2', '0']}>Copyright 2023 of clickit</Text>
          <Flex alignItems="center" justifyContent="flex-end">
            <Text fontSize="sm" color="white" mr="2">Payments Accepted</Text>
            <DIVIMG>
            <Image className='img'  src="https://cdn.myshoptet.com/usr/www.led-grower.eu/user/documents/upload/img/logo-platebni-karty.png" alt="payments" />
            </DIVIMG>
          </Flex>
        </Flex>
      </Container>
    </Box>
    </Box>
    </>
  
  )
}
const DIV = styled.div`
* {
  text-align: center;
}
h1 {
  margin: 2rem 0;
  font-size: 100px;
  background-color: tomato;
}
.image-container {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  font-size: 100px;
  width: 80%;
  margin: auto;
}
.responsive-image {
  width: 0 0 0 33%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: rotate(10deg);
  }
}
.image-text {
  background-color: teal;
  color: white;
  text-align: center;
}
@media screen and (max-width: 499px) {
  .image-container{
    font-size: 8px;
  }
  h1{
    font-size: 20px;
  }

}
@media screen and (min-width: 500px) and (max-width: 1023px) {
  .image-container{
    font-size: 15px;
  }
  h1{
    font-size: 30px;
  }
}
@media screen and (min-width: 1024px) {
  .image-container{
    font-size: 20px;
  }
}
`

const DIV1=styled.div`
.section-container {
  text-align: center;
  padding: 2rem;
}
.section-title {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
}
.section-text {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 2rem;
  width: 70%;
  margin: auto;
}
.section-button {
  border: 2px solid black;
  color: white;
  background-color: transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}
.section-button:hover {
  transform: scale(1.1);
  color: #000000;
}
@media screen and (max-width: 767px) {
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .section-text {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .section-button {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .section-text {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .section-button {
    font-size: 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .section-text {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .section-button {
    font-size: 1.2rem;
  }
}
`
const imageContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '1rem',
  padding: '1rem',
  
};
const responsiveImageStyles = {
  width: '100%',
  height: 'auto',
  maxWidth: '100%',
  borderRadius: '8px',
  textDecoration: 'none',
};
const Imagep = styled.a(responsiveImageStyles);
const Image = styled.img`
  width: 90%;
  height: auto;
  &:hover {
    transform: scale(1.1);
  }
`
const CARDDIV=styled.div`
.card {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
}
.buttons {
  display: flex;
  justify-content: space-around;
}

.buttonadd,
.buttonbuy {
  background-color: #e7e7e7;
  color: #000000;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  border-radius: 10px;
}

.buttonadd:hover,
.buttonbuy:hover {
  background-color: #f53737;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .card {
    width: 80%;
  }
}
@media screen and (max-width: 767px) {
  .card {
    width: 80%;
  }
}

`
const TABDIV=styled.div`
 .card-carousel{
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
 }
 @media screen and (max-width: 767px) {
  .card-carousel{
    flex-direction: column;
  }
 }
`
const DIV5=styled.div`
.image-container {
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-around;
  
}
.image-container img {
  width: 100%;
  height: 100%;
}
.image-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.animated-image {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
}
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000000;
  font-size: 38px;
  z-index: 1;
  font-weight: bolder;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ffffff 5%, transparent 90%);
  background-size: 150% 150%;
  transition: transform 0.3s ease-in-out;
  transform-origin: 0 100%;
  transform: scaleX(0);
}

.image-wrapper:hover .animated-image {
  transform: scale(1.5);
}

.image-wrapper:hover .overlay {
  transform: scaleX(1);
}

.overlay::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  top: 50%;
  transform-origin: 0 10%;
  animation: slideStripe 2s linear infinite;
  opacity: 0.8;
}

@keyframes slideStripe {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
@media screen and (max-width: 767px) {
    .image-container {
      flex-direction: column;
      align-items: center;
    }

    .image-wrapper {
      width: 100%;
      max-width: 300px;
    }
  }
`
const DIV6=styled.div`

.maindiv {
  background-color: #ffffff;
  color: #000000;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  font-size: 80px;
}

h2 {
  font-size: 70%;
  color: tomato;
}
h1{
   font-size: 50px;
}
h3{
  font-size: 50%;
}
h4{
  font-size: 30%;
}

button {
  background-color: transparent;
  color: #000000;
  border: 2px solid #000000;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 30%;
}

button:hover {
  transform: scale(1.1);
  background-color: tomato;
  color: #fff;
}
@media screen and (max-width: 767px) {
  .maindiv{
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 40px;
  }
  div > div:not(:last-child) {
    margin-bottom: 2rem;
  }
  h1{
   font-size: 30px;
}
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  div > div {
    width: 50%;
    margin-right: 0;
    text-align: center
  }
  .maindiv{
    font-size: 50px;
  }
  h1{
   font-size: 30px;
}
}
@media screen and (min-width: 1024px) {
  div > div {
    width: 30%;
    margin-right: 1rem;
    text-align: center;
  }
  .maindiv{
    font-size: 80px;
  }
}
`
const DIV7=styled.div`
.blog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 80px;
  width: 100%;
  background-color: #ffffff;
}
.image{
  width: 100%;
}
.blog:hover .image{
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
.title{
  font-size: 30%;
}
.date{
  font-size: 15%;
}
.description{
  font-size: 20%;
}
.continue{
  font-size: 15%;
  font-weight: bold;
}
.continue:hover{
  color: tomato;
}
.blog-slides {
  display: flex;
  width: 100%;
  gap: 10px;
}
.blog {
  flex: 0 0 31%;
  width: 100%;
  background-color: #ffffff;
  cursor: pointer;
  color: #000000;
  margin:10px;
  border: 2px solid white;
  border-radius: 10px;
  overflow: hidden;
}

.slide-left {
  transform: translateX(-33.33%);
}

.slide-right {
  transform: translateX(33.33%);
}

.navigation {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 20px 0;
}

.prev-button,
.next-button {
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 20%;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .blog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #000000;
}
.blog-slides {
  display: flex;
  flex-direction: column;
}
.blog{
  width: 50%;
  margin: auto;
  overflow: visible;
}
}
@media screen and (max-width: 767px) {
  .blog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 30px;
  width: 100%;
  background-color: #ffffff;
  color: #ffffff;
}
.blog-slides {
  display: flex;
  flex-direction: column;
}
.blog{
  width: 50%;
  margin: auto;
  overflow: visible;
}
}
`
const DIVIMG=styled.div`
.img{
  width: 15%;
}

`
const DIV10=styled.div`
margin-bottom: 50px;
  .image-container {
   text-align: center;
}
.image-wrap {
  display: inline-block;
  border: 2px solid #3498db;
  overflow: hidden;
  transition: border-radius 0.3s ease-in-out;
}

.responsive-image {
  width: 226px;
  height: 226px;
}
.image-text {
  text-align: center;
}
@media screen and (max-width: 767px) {
  .image-container {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
}
`
const DIVFADE=styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin: auto;
  @media screen and (max-width: 500px) {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
`

const CARTICON=styled.div`
  
`