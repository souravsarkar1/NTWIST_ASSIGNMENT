// import { Box, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { herData } from '../HomeData/TopData';
import { Flex } from '@chakra-ui/react';
import HeroCard from './HeroCard';
import HeroCardReverse from './HeroCardReverse';

const Hero = () => {
    return (
        <Flex direction="column" mx={{ base: 4, md: 12, lg: 20 }} m={10}>
            <HeroCard key={herData[0].id} image={herData[0].image} description={herData[0].description} title={herData[0].title} />
            <HeroCardReverse key={herData[1].id} image={herData[1].image} description={herData[1].description} title={herData[1].title} />
            <HeroCard key={herData[2].id} image={herData[2].image} description={herData[2].description} title={herData[2].title} />
            <HeroCardReverse key={herData[3].id} image={herData[3].image} description={herData[3].description} title={herData[3].title} />
        </Flex>

    );
};

export default Hero;
