import React from 'react';
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';

const TopComponent = () => {
  return (
    <Flex
      position="relative"
      backgroundImage="url('https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100vw"
      height="100vh"
      justifyContent="space-around"
      alignItems="center"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box p={8} textAlign="center" mb={{ base: 8, md: 0 }}>
        <Heading color="white" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} mb={4}>
          Data-powered solutions
        </Heading>
        <Heading color="white" fontSize={{ base: 'md', md: 'xl', lg: '2xl' }} mb={8}>
          for Industrial Excellence
        </Heading>
        <Button colorScheme="teal" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
          Read More
        </Button>
      </Box>
      <Box p={4}>
        <Image
          w={{ base: '100%', md: '600px', lg: '800px' }} 
          h={{ base: 'auto', md: '500px', lg: '500px' }} 
          src='https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png'
          alt="image"
        />
      </Box>
    </Flex>
  );
};

export default TopComponent;
