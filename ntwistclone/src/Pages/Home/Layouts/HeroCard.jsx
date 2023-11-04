import { Box, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import './HeroCard.css'
const HeroCard = ({ image, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={cardVariants} className="slide-in-up">
      <Flex
        direction={{ base: 'column', md: 'column', lg: 'row' }}
        justify="space-between"
        align="center"
        mb={8}
        p={4}
        rounded="md"
        boxShadow="md"
        bg="white"
        m={4}
      >
        <Box w={{ base: '100%', md: '45%', lg: '45%' }} mb={{ base: 4, lg: 0 }}>
          <Image src={image} alt={title} />
        </Box>
        <Box w={{ base: '100%', md: '45%', lg: '45%' }}>
          <VStack spacing={4} align="start">
            <Heading fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>{title}</Heading>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>{description}</Text>
            <Button colorScheme="red" size="sm">
              Read More
            </Button>
          </VStack>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default HeroCard;
