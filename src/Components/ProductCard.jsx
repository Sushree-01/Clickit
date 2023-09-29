import { Box, Image, Text, Badge, Flex, Stack } from '@chakra-ui/react';

const ProductCard = ({ product }) => {
  const { brand, gender, id, image, name, price, rating } = product;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
      maxW="300px"
    >
      <Image src={image} alt={name} maxH="200px" objectFit="cover" />

      <Box mt="2">
        <Text fontWeight="semibold" fontSize="lg" lineHeight="tight" isTruncated>
          {name}
        </Text>
        <Text color="gray.500">{brand}</Text>
        <Text color="gray.700" fontSize="xl" mt="2">
          ${price}
        </Text>
      </Box>

      <Flex justify="space-between" mt="4">
        <Box>
          <Badge colorScheme="blue">{gender}</Badge>
        </Box>
        <Box>
          <Badge colorScheme="green">{rating} ★</Badge>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductCard;
