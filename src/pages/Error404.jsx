import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <Box
            textAlign="center"
            height={"100vh"}
            px={{ base: 10, lg: 20 }}
            pt={{ base: 40, lg: 40 }}
            
        >
            <Heading
                fontSize={{ sm:'6xl',base: '5xl', lg: '8xl' }}
                color={'brand.dark.secondary'}
            >
                404
            </Heading>
            <Text fontSize={{ sm:'1xl',base: '2xl', lg: '3xl' }} mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6}>
                The page you're looking for does not seem to exist.
            </Text>

            <Button
                as={Link}
                to="/"
                // colorScheme="teal"
                // bgGradient="linear(to-r, brand.dark.text,  brand.dark.secondary)"
                // color="white"
                variant="solid"
            >
                Go to Home
            </Button>
        </Box>
    );
};

export default Error404;