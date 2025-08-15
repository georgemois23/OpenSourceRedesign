import React from 'react';
import { Box, Heading, Text, Button,Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import animation from '../config/Animation.jsx';
import pageNotFound from '../assets/icons/page-not-found.svg';
import ThemedIcon from '../components/PageNotFoundSVG.jsx';

const Error404 = () => {
    const navigate = useNavigate(); 
    document.title = "Η σελίδα δεν βρέθηκε - Open Source UoM";
    return (
        <Box
            textAlign="center"
            height={"fit-content"}
            minHeight={"90vh"}
            px={{ base: 10, lg: 20 }}
            pt={{ base: '10vh', lg: '20vh' }}
            mb={{ base: 20, lg: 20 }}
            
        >
            
            
            <Text fontSize={{ sm:'xl',base: '2xl', lg: '3xl' }} mt={3} >
               Δεν βρέθηκε η σελίδα
            </Text>
            {/* <Image src={pageNotFound} alt="Page Not Found" mx="auto" width={'300px'} mb={6} /> */}
            <ThemedIcon />
            <Text color={'gray.500'} mb={6}>
                Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.
            </Text>

            <Button
                onClick={() => navigate("/")}
                // colorScheme="teal"
                // bgGradient="linear(to-r, brand.dark.text,  brand.dark.secondary)"
                // color="white"
                variant="solid"
                whiteSpace={"stable"}
                p={{ xxs: 10,sm: 2}}
            >
                Μετάβαση στην αρχική σελίδα
            </Button>

            {/* <Box mt={'50vh'} mb={'50vh'}>
                <animation >
            <Heading
                fontSize={{ sm:'6xl',base: '5xl', lg: '8xl' }}
                color={'brand.dark.secondary'}
            >
                404
            </Heading>
            </animation>
        </Box> */}
        </Box>
    );
};

export default Error404;