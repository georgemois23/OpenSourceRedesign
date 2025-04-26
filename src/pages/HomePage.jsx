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
    <Flex direction='column'  justify="center" align="center" gap={{ base: 1, lg: 0.5 }} mt={{ base: '7vw', lg: '6vh' }} mb={10}>
  {/* <Text fontSize={{ base: 'lg', lg: '2xl' }}  textAlign="center" >
    Δεν είσαι σίγουρος; </Text> */}
    <Text  fontSize={{ base: 'md', lg: 'xl' }}  textAlign="center" >Μάθε περισσότερα για την κοινότητα μας <ArrowDownIcon  /> </Text>

    <Flex direction='column' mt={{ base: '17vw', lg: '6vh' }} mb={10} marginInline={'auto'} gap={4}>
      <Text fontSize={{ base: 'lg', lg: '2xl' }} fontWeight={800}  textAlign="center">Σχετικά με τη Κοινότητα Ανοιχτού Λογισμικού του Πανεπιστημίου Μακεδονίας</Text>
    <Box  as='p' textAlign="left" lineHeight="0.9"  fontFamily="Arial" px={{ sm: 5, lg: 20 }}  width={{base: '90vw', lg:'70vw'}}  marginInline={'auto'} > 
    Η Κοινότητα Ανοιχτού Λογισμικού του Πανεπιστημίου Μακεδονίας είναι μια ομάδα οργανωμένη από φοιτητές/-τριες του Πανεπιστημίου Μακεδονίας, που σκοπό έχει να γνωστοποιήσει και να προωθήσει το Ελεύθερο Λογισμικό, Λογισμικό Ανοικτού Κώδικα (ΕΛ/ΛΑΚ) και Open Source Hardware. Η κοινότητα απαρτίζεται κυρίως από φοιτητές/-τριες του τμήματος της Εφαρμοσμένης Πληροφορικής, μπορεί όμως να συμμετέχει οποιοσδήποτε θέλει να βοηθήσει και να προσφέρει στην ομάδα, με όποιον τρόπο μπορεί.
 </Box>
    <Box  as='p' textAlign="left" lineHeight="0.9" wordBreak={'break-word'}  fontFamily="Arial" px={{ sm: 5, lg: 20 }}  width={{base: '90vw', lg:'70vw'}}  marginInline={'auto'} > 
    Η συμμετοχή είναι εθελοντική και δεν είστε υποχρεωμένοι/-ες να καταβάλετε οποιοδήποτε χρηματικό ποσό εκτός και αν θέλετε να βοηθήσετε οικονομικά την ομάδα σε τυχόν έξοδα που προκύπτουν κατά καιρούς, είτε για αγορά απαραίτητου εξοπλισμού, είτε για την διοργάνωση εκδηλώσεων. Για περισσότερες πληροφορίες επικοινωνήστε με την ομάδα.
    </Box>
 </Flex>
    </Flex>
    </Flex>

    );
  }