import React from 'react';
import { Flex,Box,Text,Button,Center } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'
const Register = () => {
    return (
        <Flex justify="center"  pt={{ base: 10, lg: 20 }} height="fit-content" px={{ sm: 5, lg: 20 }} mb={{base: 20, lg: 20 }}>
           <Box textAlign={"center"} >
                <Text fontSize={{ base: '3xl', lg: '4xl' }} fontWeight="bold" mb={4}>
                    Ενδιαφέρεσαι να γίνεις μέλος της κοινότητας μας;
                </Text>
                <Text fontSize="lg" mb={8}>
                Εδώ θα βρεις τις φόρμες συμμετοχής στην ομάδα!
                </Text>
                <Flex direction={'column'} width={'fit-content'} alignItems={'center'}  gap={4} border={'1px solid'} borderColor={'brand.dark.secondary'} borderRadius={8} padding={4} bg='rgba(0, 10, 38, 0.3)' backdropFilter='blur(4px)'  px={{ sm: 21, lg: 20 }} marginInline={'auto'}>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="bold" mb={4}>
                    Εγγραφή στην ομάδα Open Source UoM</Text>                    
                <Button fontSize={{ base: 'sm', lg: '1xl' }} width={'fit-content'} >Φόρμα Εγγραφής στην ομάδα</Button>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="bold" mb={4}>
                Συμμετοχή σε project της ομάδας</Text>
                <Button fontSize={{ base: 'sm', lg: '1xl' }} >Φόρμα Συμμετοχής σε Project</Button>
                </Flex>
                {/* Add your registration form here */} 
           </Box>
        </Flex>
    );
};

export default Register;