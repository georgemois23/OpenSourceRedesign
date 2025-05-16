import React from 'react';
import { Flex,Box,Text,Button,Center } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'
import { EmailIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from 'react-icons/fa';
import Form from '../components/Form';
const Register = () => {
    document.title = "Επικοινωνία - Open Source UoM";
    return (
        <Flex justify="center"   pt={{ base: 10, lg: 20 }} height="fit-content" px={{ sm: 5, lg: 20 }} mb={{base: 20, lg: 20 }}>
           <Box textAlign={"center"}  marginInline={'auto'} >
                <Text fontSize={{ base: 'xl', lg: '4xl' }} fontWeight="bold" mb={4}>
                    Θέλεις να επικοινωνήσεις μαζί μας;
                </Text>
                <Text fontSize={{ base: 'md', lg: 'lg' }} mb={8} color={'gray.500'}>
                Εδώ θα βρεις όλες τις πληροφορίες!
                </Text>

                <Flex 
                direction={'column'} 
                width={'fit-content'} 
                align={'center'} 
                justify={'center'}
                borderRadius="12px" 
                gap={4}
                boxShadow="0 2px 6px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.4)"
                bg="rgba(0, 12, 45, 0.98)" 
                // backdropFilter="blur(14px)"
                border="1px solid rgba(0, 46, 102, 0.96)"
                my={{ sm: 21, lg: 20 }} 
                marginInline={'auto'}
                textAlign={'center'}
                
               >
                <Form/>
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
                              <Text as={'p'} fontSize="sm" color="gray.500" lineHeight="normal">
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