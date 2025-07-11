import React from 'react';
import { Flex,Box,Text,Button,Center,Image } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'
import { EmailIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Wrap, WrapItem } from '@chakra-ui/react';
import qtLogo from '../assets/images/qt.png';
import bpiLogo from '../assets/images/bpi.png';
import onlyOfficeLogo from '../assets/images/onlyoffice.png';
import nextcloudLogo from '../assets/images/nextcloud.png';
import codethinkLogo from '../assets/images/codethink.png';
import kdeLogo from '../assets/images/kde.png';
import canonicalLogo from '../assets/images/canonical.png';
import fotoAnalysisLogo from '../assets/images/foto-analysis.png';


const Register = () => {
    document.title = "Χορηγοί - Open Source UoM";
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
  <Image
    draggable="false"
    src={kdeLogo}
    alt="KDE logo"
    width={{ base: '100px', lg: '150px' }}
    height="auto"
  />
</WrapItem>
<WrapItem>
  <Image
    draggable="false"
    src={canonicalLogo}
    alt="Canonical logo"
    width={{ base: '180px', lg: '363px' }}
    height="auto"
  />
</WrapItem>
<WrapItem>
  <Image
    draggable="false"
    src={qtLogo}
    alt="qt logo"
    width={{ base: '100px', lg: '300px' }}
    height={{ base: '100px', lg: '300px' }}
  />
</WrapItem>
<WrapItem>
  <Image
    draggable="false"
    src={onlyOfficeLogo}
    alt="ONLYOFFICE logo"
    width={{ base: '188px', lg: '208px' }}
    height="auto"
  />
</WrapItem>
<WrapItem>
  <Image
    draggable="false"
    src={bpiLogo}
    alt="banana-pi logo"
    width={{ base: '178px', lg: '300px' }}
    height="auto"
  />
</WrapItem>
<WrapItem>
  <Image
    draggable="false"
    src={codethinkLogo}
    alt="CodeThink Logo"
    loading="lazy"
    decoding="async"
    w={{ base: "250px", lg: "400px" }}
    height="auto"
    objectFit="contain"
  />
</WrapItem>
<WrapItem>
  <Image
    draggable="false"
    src={nextcloudLogo}
    alt="Nextcloud logo"
    width={{ base: '150px', lg: '300px' }}
    height="auto"
  />
</WrapItem>
<WrapItem>
  <Image
    draggable="false"
    src={fotoAnalysisLogo}
    alt="Foto Analysis logo"
    width={{ base: '290px', lg: '590px' }}
    height="auto"
  />
</WrapItem>
</Wrap>

           </Box>     
       
        </Flex>
    );
};

export default Register;