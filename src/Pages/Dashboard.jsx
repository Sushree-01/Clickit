import React from 'react'
import {
  Box,
  Text,
  Button,
  Flex
} from "@chakra-ui/react";
import { useState,useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
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
const images3 = [
  'https://xstore.8theme.com/demos/dark/wp-content/uploads/sites/5/2016/05/banner-man.jpg',
  'https://xstore.8theme.com/demos/dark/wp-content/uploads/sites/5/2016/05/banner-x.jpg',
  'https://xstore.8theme.com/demos/dark/wp-content/uploads/sites/5/2016/05/banner-girl.jpg',
];
const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    goToNextSlide();
  }, 3000);

  return () => {
    clearInterval(interval);
  };
}, []);

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
const handleImageHover = (e) => {
  const image = e.target;
  const stripe = image.nextElementSibling;
  image.style.transform = 'scale(1.05)';
  if (stripe) {
    stripe.style.transform = 'translateX(0)';
  }
};

const handleImageLeave = (e) => {
  const image = e.target;
  const stripe = image.nextElementSibling;
  image.style.transform = 'scale(1)'; // Reset zoom
  if (stripe) {
    stripe.style.transform = 'translateX(-100%)'; // Reset stripe position
  }
};
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
const Image2 = styled.img`
  &:hover {
    transform: scale(1.2);
  }
`;
const ImageLink = styled.a(responsiveImageStyles);
const imageContainerStyles2 = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  width:"85%",
  margin:'auto'
};

const imageStyles = {
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.3s, box-shadow 0.3s',
};

const stripeStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to bottom right, transparent 49.5%, white 50%, transparent 50.5%)',
  transform: 'translateX(-100%)',
  transition: 'transform 0.3s',
};
const ImageContainer = styled.div(imageStyles);

const Image = styled.img`
  width: 90%;
  height: auto;
  &:hover {
    transform: scale(1.1);
  }
`;

const Stripe = styled.div(stripeStyles);
  return (
    <>
      <Box position="relative" overflow="hidden" onTouchMove={handleSwipe}>
      <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
    </Box>
    <DIV1>
    <Box className="section-container">
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
    <Div>
    <Flex h={'auto'} justify="center" mt="8" className="image-container">
      <Image
        src="https://m.media-amazon.com/images/I/71etIJtcrBL._AC_UF226,226_FMjpg_.jpg"
        alt="1"
        className="responsive-image"
        cursor="pointer"
            borderRadius="md"
            onMouseEnter={(e)=>{ e.target.style.transform = "rotate(10deg)";}}
            onMouseLeave={(e) => {
              e.target.style.transform = "rotate(0deg)";
            }}
      />
      <Image
        src="https://m.media-amazon.com/images/I/71jmhrRaSmL._AC_UF226,226_FMjpg_.jpg"
        alt="2"
        className="responsive-image"
        cursor="pointer"
            borderRadius="md"
            onMouseEnter={(e)=>{ e.target.style.transform = "rotate(10deg)";}}
            onMouseLeave={(e) => {
              e.target.style.transform = "rotate(0deg)";
            }}
      />
      <Image
        src="https://m.media-amazon.com/images/I/71KXIckY8PL._AC_UF226,226_FMjpg_.jpg"
        alt="3"
        className="responsive-image"
        cursor="pointer"
            borderRadius="md"
            onMouseEnter={(e)=>{ e.target.style.transform = "rotate(10deg)";}}
            onMouseLeave={(e) => {
              e.target.style.transform = "rotate(0deg)";
            }}
      />
    </Flex>
    </Div>
    <div style={imageContainerStyles}>
      {images2.map((imageLink, index) => (
        <ImageLink key={index} href="#">
          <Image src={imageLink} alt={`Image ${index + 1}`} />
        </ImageLink>
      ))}
    </div>
    <div style={imageContainerStyles2}>
      {images3.map((imageLink, index) => (
        <ImageContainer
          key={index}
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        >
          <Image2 src={imageLink} alt={`Image ${index + 1}`} />
          <Stripe />
        </ImageContainer>
      ))}
    </div>
    </>
  
  )
}
const Div=styled.div`
@media screen and (max-width: 767px) {
  .image-container {
    flex-direction: column;
    align-items: center;
  }
  .responsive-image {
    width: 80%;
    margin-bottom: 1rem;
    max-width: 200px; 
  }

}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .responsive-image {
    width: 50%;
    margin-right: 1rem;
    max-width: 200px;
  }
}

@media screen and (min-width: 1024px) {
  .responsive-image {
    width: 30%;
    margin-right: 1rem;
    max-width: 300px;
  }
}

`
const DIV1=styled.div`
.section-container {
  text-align: center;
  background-color: #333;
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
}

.section-button {
  border: 2px solid yellow;
  color: white;
  background-color: transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.section-button:hover {
  transform: scale(1.1);
  color: blue;
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