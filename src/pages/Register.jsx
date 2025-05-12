import React from 'react';
import { Flex,Box,Text,Button,Center, IconButton, Icon } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Divider } from '@chakra-ui/react'
const Register = () => {
    document.title = "Εγγραφή - Open Source UoM";
    return (
        <Flex justify="center"  pt={{ base: 10, lg: 20 }} height="fit-content" px={{ sm: 5, lg: 20 }} mb={{base: 20, lg: 20 }}>
           <Box textAlign={"center"} >
                <Text fontSize={{ base: 'xl', lg: '4xl' }} fontWeight="bold" mb={4}>
                    Ενδιαφέρεσαι να γίνεις μέλος της κοινότητας μας;
                </Text>
                <Text fontSize={{ base: 'md', lg: 'lg' }}  mb={8} color={'gray.500'}>
                Εδώ θα βρεις τις φόρμες συμμετοχής στην ομάδα!
                </Text>
              <Flex direction={'column'} 
                width={'fit-content'} 
                align={'center'} 
                justify={'center'}
                borderRadius="16px" // Slightly larger radius for modern look
                gap={4}
                boxShadow="0 2px 6px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.4)"
                bg="rgba(0, 12, 45, 0.98)" 
                backdropFilter="blur(14px)"
                border="1px solid rgba(0, 46, 102, 0.96)"
                my={{ sm: 21, lg: 20 }} 
                marginInline={'auto'}
                py={{ sm: 5, lg: 5 }}
                textAlign={'center'}>
                <Flex direction={'column'} width={'fit-content'} alignItems={'center'}  gap={2}  padding={4} py={{sm:0,lg:5}}  px={{ sm: 21, lg: 20 }} marginInline={'auto'}>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="bold" mb={2}>
                    Εγγραφή στην ομάδα Open Source UoM</Text>                    
                <Button rightIcon={<ExternalLinkIcon />} fontSize={{ base: 'sm', lg: '1xl' }} width={'fit-content'} onClick={()=>window.open('https://forms.gle/hER2GgCSzEu96Xus8')} >Φόρμα Εγγραφής στην ομάδα</Button>
              
  
  
                </Flex>
                <Divider mt={1} width={'85%'} borderColor="blue.600" opacity="0.5" />
                <Flex direction={'column'} width={'fit-content'} alignItems={'center'}  gap={2}  padding={4}  px={{ sm: 21, lg: 20 }} marginInline={'auto'}>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="bold" mb={2}>
                Συμμετοχή σε project της ομάδας</Text>
                <Button rightIcon={<ExternalLinkIcon />} fontSize={{ base: 'sm', lg: '1xl' }} onClick={()=>window.open('https://forms.gle/QEYxctvkyJhW3GSUA')} >Φόρμα Συμμετοχής σε Project</Button>
                </Flex>
                </Flex>
                {/* Add your registration form here */} 
           </Box>
        </Flex>
    );
};

export default Register;