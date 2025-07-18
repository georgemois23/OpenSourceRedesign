import React from 'react';
import { Flex,Box,Text,Button,Center,Image, Heading, color,Link} from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'
import { EmailIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Wrap, WrapItem } from '@chakra-ui/react';
import ResponsiveYouTube from '../components/ResponsiveYT';

const Videos = () => {
    document.title = "Βίντεο - Open Source UoM";
    const opts = {
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };
    
    return (
      
       <Box minH={'100vh'} px={4} py={8} mb={'10vh'} >
            <Heading as="h1" ml={4}  fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }} mb={8} userSelect={'none'} >
              Τα βίντεο μας
            </Heading>
       
           <Box textAlign={"center"} justify="center" mx={'auto'}  flex="1"  p={{ sm: 5, lg: 10 }} >
                <Flex marginInline={"auto"} justify='center' align="center"   gap={{base:20, lg:20}}  mt={25} direction={{sm:'column',lg:'row'}} pb={'20vh'}>




                <Box
                 
                >                                
                    <Heading as="h3" size={{sm:'md',md:'lg'}} pb={'5vh'}  textAlign={"center"}><Link  href={'https://www.ertnews.gr/roi-idiseon/to-pamak-sto-kinito-me-ti-dorean-efarmogi-myuom/'} isExternal color='brand.dark.secondary'>ΕΡΤ3</Link> για την εφαρμογή <Link href='https://my.uom.gr' isExternal color={'brand.dark.secondary'}>myUoM</Link></Heading>
                    <ResponsiveYouTube videoId="6zewoEmEfT8" />
                </Box>    
                <Box
               >                                
                    <Heading as="h3" size={{sm:'md',md:'lg'}} pb={'1vh'} textAlign={"center"}><Link  href={'https://news.tv4e.gr/to-panepistimio-makedonias-sto-kinito-kathe-foititi-kai-foititrias-me-ti-dorean-efarmogi-myuom/'} isExternal color='brand.dark.secondary'>4Ε</Link> για την εφαρμογή <Link href='https://my.uom.gr' isExternal color={'brand.dark.secondary'}>myUoM</Link></Heading>
                    <ResponsiveYouTube videoId="RH5aXb9ydPw" />
                </Box>  
                </Flex>
           </Box>     
          
        </Box>
      
    );
};

export default Videos;