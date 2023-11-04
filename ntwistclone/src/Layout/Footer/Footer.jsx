import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { footerNavData } from '../../Data/FooterData';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bg="#031129">
      <Center>
        <Image w={['80px', '100px']} h={['80px', '100px']} src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png' />
      </Center>
      <Center>
        <Flex gap={8} boxSizing='border-box' flexWrap={['wrap', 'nowrap']}>
          {footerNavData.map((item, index) => (
            <Box key={index} color='white' mb={[2, 0]}>
              {item}
            </Box>
          ))}
        </Flex>
      </Center>
      <Center>
        <Text m={4} color='white'>
          9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
        </Text>
      </Center>
      <Center>
        <Flex gap={4} m={3}>
          <AiFillLinkedin color='white' size={30} />
          <AiFillTwitterCircle  />
        </Flex>
      </Center>
      <Center>
        <Text mt={4} color='white'>
          © 2022. Ntwist Inc.
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
