import React from 'react';
import { Flex,Box,Text,Button,Center,Image } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'
import { EmailIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Wrap, WrapItem } from '@chakra-ui/react';
const Register = () => {
    return (
        <Flex justify="center"  pt={{ base: 10, lg: 20 }} height="fit-content" px={{ sm: 5, lg: 20 }} mb={{base: 20, lg: 20 }} minHeight={{base:'90vh',lg:'60vh'}} userSelect={"none"}>
           <Box textAlign={"center"} >
                <Text fontSize={{ base: '3xl', lg: '4xl' }} fontWeight="bold" mb={4}>
                    Ευχαριστούμε για τη στήριξη σας στην κοινότητα μας!
                </Text>
                <Text fontSize="lg" mb={8}>
                {/* Οι χορηγοί μας */}
                </Text>
                <Wrap
  justify="center"
  spacing="30px"
  p={{ sm: 5, lg: 10 }}
  marginInline="auto"
  
>
  <WrapItem>
    <Image draggable="false" src="https://opensource.uom.gr/storage/2023/10/KDE_logo.svg_-300x300.png" alt="KDE logo" width={{ base: '100px', lg: '100px' }} height={{ base: '100px', lg: '100px' }} />
  </WrapItem>
  <WrapItem>
    <Image draggable="false" src="https://opensource.uom.gr/storage/2023/10/download.png" alt="logo" width={{ base: '180px', lg: '363px' }} height={{ base: '50px', lg: '139px' }} />
  </WrapItem>
  <WrapItem>
    <Image draggable="false" src="https://opensource.uom.gr/storage/2023/09/qt_logo.png" alt="qt logo" width={{ base: '100px', lg: '300px' }} height={{ base: '100px', lg: '300px' }} />
  </WrapItem>
  <WrapItem>
    <Image  draggable="false" src="https://opensource.uom.gr/storage/2023/06/ONLYOFFICE_logo.png" alt="ONLYOFFICE logo" width={{ base: '100px', lg: '300px' }} height={{ base: '100px', lg: '300px' }} />
  </WrapItem>
  <WrapItem>
    <Image  draggable="false" src="https://opensource.uom.gr/storage/2023/07/banana-pi-logo.png" alt="banana-pi logo" width={{ base: '100px', lg: '300px' }} height={{ base: '100px', lg: '300px' }} />
  </WrapItem>
  <WrapItem>
    <Image  draggable="false" src="https://opensource.uom.gr/storage/2023/09/codethink-logo-opengraph-1200x600-1.png" alt="codethink logo" width={{ base: '100px', lg: '300px' }} height={{ base: '100px', lg: '300px' }} />
  </WrapItem>
  <WrapItem>
    <Image  draggable="false" src="https://opensource.uom.gr/storage/2023/10/Nextcloud_Logo.svg_-1536x1090.png" alt="Nextcloud logo" width={{ base: '100px', lg: '200px' }} height={{ base: '100px', lg: '200px' }} />
  </WrapItem>
  <WrapItem>
    <Image  draggable="false" src="https://opensource.uom.gr/storage/2023/09/Screenshot-from-2023-09-20-16-31-57.png" alt="logo" width={{ base: '200px', lg: '590px' }} height={{ base: '100px', lg: '300px' }} />
  </WrapItem>
</Wrap>
           </Box>     
       
        </Flex>
    );
};

export default Register;