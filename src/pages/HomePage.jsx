import {Box,Flex,Text,Button,Icon}  from "@chakra-ui/react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons";
export default function HomePage() {
  const navigate = useNavigate();
    return(
    <Flex justify="start" direction={"column"} pt={{ base: '8vh', lg: 15 }} height="fit-content" align={'center'}  >


<Box textAlign="center" fontWeight="800" lineHeight="0.9" fontFamily="Arial" mt="20vh">
  <Text fontSize={{ sm:'5xl',base: '5xl', lg: '9xl' }}>
    OPEN SOURCE
    {/* ΚΟΙΝΟΤΗΤΑ ΑΝΟΙΚΤΟΥ ΛΟΓΙΣΜΙΚΟΥ */}
  </Text>
  <Text fontSize={{ sm:'5xl',base: '5xl', lg: '9xl' }} color="gray.600">
    UOM COMMUNITY
    {/* ΠΑΝΕΠΙΣΤΗΜΙΟ ΜΑΚΕΔΟΝΙΑΣ */}
  </Text>
</Box>

<Flex direction={{ base: 'column', lg: 'row' }}  justify="center" align="center" gap={{ base: 2, lg: '8' }} mt={'10vh'} mb={10}>
  {/* <Text fontSize={{ base: 'md', lg: 'xl' }}  textAlign="center">
    Συμμετοχή στην ομάδα μας;</Text> */} 
<Button onClick={() => navigate('/register')}
        // mt={{ base: 20, lg: 12 }}
        width="fit-content"
        display="flex"
        alignItems="center"
        gap={2}>Εγγραφή στην ομάδα μας
        <ArrowForwardIcon style={{ fontSize: '28px', marginLeft: '2px' }} />
        </Button>

    </Flex>
    <Flex direction='column'  justify="center" align="center" gap={{ base: 1, lg: 0.5 }} mt={{ base: '2vw', lg: '6vh' }} mb={10}>
  <Text fontSize={{ base: 'lg', lg: '2xl' }}  textAlign="center" >
    Δεν είσαι σίγουρος; </Text>
    <Text  fontSize={{ base: 'md', lg: 'xl' }}  textAlign="center" >Μάθε περισσότερα για την κοινότητα μας <ArrowDownIcon  /> </Text>


    </Flex>
    </Flex>

    );
  }