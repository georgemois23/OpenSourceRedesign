import React from 'react';
import { Flex,Box,Text,Button,Center } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'
const Register = () => {
    document.title = "Εγγραφή - Open Source UoM";
    return (
        <Flex justify="center"  pt={{ base: 10, lg: 20 }} height="fit-content" px={{ sm: 5, lg: 20 }} mb={{base: 20, lg: 20 }}>
           <Box textAlign={"center"} >
                <Text fontSize={{ base: '3xl', lg: '4xl' }} fontWeight="bold" mb={4}>
                    Ενδιαφέρεσαι να γίνεις μέλος της κοινότητας μας;
                </Text>
                <Text fontSize="lg" mb={8}>
                Εδώ θα βρεις τις φόρμες συμμετοχής στην ομάδα!
                </Text>
              <Flex direction={'column'} 
                width={'fit-content'} 
                align={'center'} 
                justify={'center'}
                borderRadius="12px" // Slightly larger radius for modern look
                gap={4}
                bg="rgba(0, 15, 45, 0.98)" // Slightly brighter/lighter than page bg
                backdropFilter="blur(12px)"
                border="1px solid rgba(120, 150, 255, 0.15)" // More visible border
                my={{ sm: 21, lg: 20 }} 
                marginInline={'auto'}
                py={{ sm: 5, lg: 5 }}
                textAlign={'center'}>
                <Flex direction={'column'} width={'fit-content'} alignItems={'center'}  gap={2}  padding={4} py={{sm:0,lg:5}}  px={{ sm: 21, lg: 20 }} marginInline={'auto'}>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="bold" mb={2}>
                    Εγγραφή στην ομάδα Open Source UoM</Text>                    
                <Button fontSize={{ base: 'sm', lg: '1xl' }} width={'fit-content'} onClick={()=>window.open('https://forms.gle/hER2GgCSzEu96Xus8')} >Φόρμα Εγγραφής στην ομάδα</Button>
                </Flex>
                <Flex direction={'column'} width={'fit-content'} alignItems={'center'}  gap={2}  padding={4}  px={{ sm: 21, lg: 20 }} marginInline={'auto'}>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="bold" mb={2}>
                Συμμετοχή σε project της ομάδας</Text>
                <Button fontSize={{ base: 'sm', lg: '1xl' }} onClick={()=>window.open('https://forms.gle/QEYxctvkyJhW3GSUA')} >Φόρμα Συμμετοχής σε Project</Button>
                </Flex>
                </Flex>
                {/* Add your registration form here */} 
           </Box>
        </Flex>
    );
};

export default Register;