import React from 'react';
import {Flex, Box, Text} from '@chakra-ui/react';
const Footer = () => {
    return (
        <Flex as="footer" justify="center" align="center" py={4} bg='rgba(0, 10, 38, 0.93)' position="relative" bottom={0} width="100%"  backdropFilter='blur(4px)'>
            <Box textAlign="center" fontSize="sm" fontFamily="Arial">
                <Text>Open Source UoM Community</Text>
                <Text>Contact:</Text>
            <Text>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</Text>
            </Box>
        </Flex>
    );
};

export default Footer;