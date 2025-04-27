import {React,useEffect} from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { useLocation,location,useNavigate } from "react-router-dom";
const NotReady = () => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const allowedPaths = [
          "/blog",
          "/readme",
        ];
    
        if (!allowedPaths.includes(location.pathname)) {
          navigate("/404");
        }
      }, [location.pathname, navigate]);

    return (
        <Box
            textAlign="center"
            height={"fit-content"}
            minHeight={"90vh"}
            // ={{base: 20, lg: 20 }}
            px={{ base: 10, lg: 20 }}
            pt={{ base: 10, lg: 35 }}
            
        >
            <Heading
                fontSize={{ sm:'5xl',base: '5xl', lg: '8xl' }}
                color={'brand.dark.secondary'}
            >
                Σελίδα υπο κατασκευή
            </Heading>
            <br/>
            <Box padding='6' boxShadow='lg' bg='brand.dark.text' width={{ base: '90%', sm: '80%', md: '70%', lg: '50%' }} marginInline={'auto'} >
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
<br/>
            <Button
                as={Link}
                to="/"
                // colorScheme="teal"
                // bgGradient="linear(to-r, brand.dark.text,  brand.dark.secondary)"
                // color="white"
                variant="solid"
            >
                Μετάβαση στην αρχική σελίδα
            </Button>
            <br/>
            <br/>
        </Box>
    );
};

export default NotReady;