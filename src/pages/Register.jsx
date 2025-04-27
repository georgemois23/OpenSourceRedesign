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
              <Flex direction={'column'} width={'fit-content'} alignItems={'center'} borderRadius={8} gap={4} bg='rgba(0, 10, 38, 0.6)' backdropFilter='blur(4px)' boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
                border="1px solid rgba(251, 125, 30, 0.18)"  px={{ sm: 21, lg: 20 }} marginInline={'auto'}>
                <Flex direction={'column'} width={'fit-content'} alignItems={'center'}  gap={2}  padding={4} py={{sm:0,lg:5}}  px={{ sm: 21, lg: 20 }} marginInline={'auto'}>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="bold" mb={2}>
                    Εγγραφή στην ομάδα Open Source UoM</Text>                    
                <Button fontSize={{ base: 'sm', lg: '1xl' }} width={'fit-content'} >Φόρμα Εγγραφής στην ομάδα</Button>
                </Flex>
                <Flex direction={'column'} width={'fit-content'} alignItems={'center'}  gap={2}  padding={4}  px={{ sm: 21, lg: 20 }} marginInline={'auto'}>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="bold" mb={2}>
                Συμμετοχή σε project της ομάδας</Text>
                <Button fontSize={{ base: 'sm', lg: '1xl' }} >Φόρμα Συμμετοχής σε Project</Button>
                </Flex>
                </Flex>
                {/* Add your registration form here */} 
           </Box>
        </Flex>
    );
};

export default Register;