import React from 'react';
import { Flex,Box,Text,Button,Center } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'
import { EmailIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from 'react-icons/fa';
const Register = () => {
    document.title = "Επικοινωνία - Open Source UoM";
    return (
        <Flex justify="center"  pt={{ base: 10, lg: 20 }} height="fit-content" px={{ sm: 5, lg: 20 }} mb={{base: 20, lg: 20 }}>
           <Box textAlign={"center"} >
                <Text fontSize={{ base: '3xl', lg: '4xl' }} fontWeight="bold" mb={4}>
                    Θέλεις να επικοινωνήσεις μαζί μας;
                </Text>
                <Text fontSize="lg" mb={8}>
                Εδώ θα βρεις όλες τις πληροφορίες!
                </Text>
                <Flex direction={'column'} width={'fit-content'} alignItems={'center'} borderRadius={8} gap={4}
                    bg="rgba(0, 10, 38, 0.85)"
                    backdropFilter="blur(6px)"
                    boxShadow="0 8px 32px rgba(0, 0, 0, 0.5)"
                    border="1px solid rgba(255, 255, 255, 0.13)"
                    px={{ sm: 21, lg: 20 }} marginInline={'auto'}>

                <Flex direction={'column'} width={'fit-content'} alignItems={'center'}  gap={2}  padding={4}  px={{ sm: 21, lg: 20 }} marginInline={'auto'}>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="bold" mb={2}>
                    Στείλε μας email</Text>
                    <Flex direction={{base:'column', lg:'row' }}gap={2} pt={2}>                    
                <Button  as="a" 
  href="mailto:opensource@uom.edu.gr"  fontSize={{ base: 'sm', lg: '1xl' }} width={'fit-content'} ><EmailIcon mr={1}/> <Text> opensource@uom.edu.gr</Text></Button>
                <Text mt={{base:0,lg:2}}>ή</Text>
                <Button  as="a" 
  href="mailto:linux-team@uom.edu.gr"  fontSize={{ base: 'sm', lg: '1xl' }} width={'fit-content'} ><EmailIcon mr={1}/> <Text> linux-team@uom.edu.gr</Text></Button>
                
                </Flex>
                </Flex>
               
                <Flex direction={'column'} width={'fit-content'} alignItems={'center'}  gap={2}  padding={4}  px={{ sm: 21, lg: 20 }} marginInline={'auto'}>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="bold" mb={2}>
                Βρες μας από κοντά</Text>
                <Flex direction="column" gap={1} pt={2}>
                            <Flex  gap={1}>
                              <FaMapMarkerAlt />
                              {/* <Box> */}
                              <Text  onClick={() => window.open('https://www.google.gr/maps/place/University+of+Macedonia/@40.6250129,22.9579198,17z/data=!4m5!3m4!1s0x14a838febd9553d7:0xdafb4206c7c961c9!8m2!3d40.6250129!4d22.9601085', '_blank')} cursor={'pointer'} fontSize="sm" color="gray.400" lineHeight="normal">
                                Πανεπιστήμιο Μακεδονίας, Αίθουσα 10
                              </Text>
                              </Flex>
                              <Text as={'p'} fontSize="sm" color="gray.600" lineHeight="normal">
                              Κάθε Κυριακή στις 17:00 έχουμε συνάντηση.
                              </Text>
                              {/* </Box> */}
                            
                          </Flex>
                </Flex>
                </Flex>
           </Box>
        </Flex>
    );
};

export default Register;