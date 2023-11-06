import React from 'react';
import { Flex, Heading, Button, Box } from '@chakra-ui/react';
// import './BottomNav.css'; // Import your custom CSS file

const BottomNav = () => {
    return (
        <Box width={"100%"} bg={'black'} style={{
            //position: '-webkit-sticky',
            position: 'sticky',
            top: 0,
            fontSize: '20px',
            zIndex : "1000"
        }}>
        <Flex
            zIndex={100}
            style={{
                //position: '-webkit-sticky',
                position: 'sticky',
                top: 0,
                fontSize: '20px'
            }}
            justifyContent="space-between"
            alignItems="center"
            bg={"black"}
            w="90%"
            m={"auto"}
            p={4}
            color="white"
        >
            <Flex gap={7}>
                <Heading fontSize="xl">Productivity</Heading>
                <Heading fontSize="xl">Collaboration</Heading>
                <Heading fontSize="xl">Security</Heading>
            </Flex>
            <Flex>
                <Button colorScheme="purple" variant="solid" mr={4}>
                    Start A Free Trial
                </Button>
                <Button colorScheme="purple" variant="solid">
                    Sign Up on GitHub
                </Button>
            </Flex>
        </Flex>
        </Box>
    );
};

export default BottomNav;
