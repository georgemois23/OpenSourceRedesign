import {Box,Flex,Text,Button,Icon}  from "@chakra-ui/react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { useRef,useState,useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const aboutSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerInstance.unobserve(entry.target); // 👉 σταματάει να παρακολουθεί
        }
      },
      { threshold: 0.3 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 500); // 500ms για να προλάβει να γίνει το fade out
  
      return () => clearTimeout(timeoutId);
    }
  }, [isVisible]);

  function scrollToRef(e) {
    aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }
 
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
  
  
  
  <Text
  cursor="pointer"
  onClick={scrollToRef}
  fontSize={{ base: 'md', lg: 'xl' }}
  textAlign="center"
  sx={{ transition: "all 0.3s ease-in-out" }}
  opacity={isVisible ? 0 : 1} 
  pointerEvents={isVisible ? 'none' : 'auto'} 
>
  Μάθε περισσότερα για την κοινότητα μας <ArrowDownIcon />
</Text>

    <Box  ref={aboutSectionRef} mt={{ base: '23vw', lg: '5vh' }}></Box>
    <Flex  direction='column' mt={{ base: '25vw', lg: '6vh' }} mb={10} marginInline={'auto'} gap={4}   width={{base: '90vw', lg:'70vw'}}  padding={4} borderRadius={8} bg='rgba(0, 10, 38, 0.3)' backdropFilter='blur(4px)'  >
      <Text fontSize={{ base: 'lg', lg: '2xl' }} fontWeight={800}  textAlign="center">Σχετικά με τη Κοινότητα Ανοιχτού Λογισμικού του Πανεπιστημίου Μακεδονίας</Text>
    <Box  as='p' textAlign="left" lineHeight="0.9"  fontFamily="Arial" px={{ sm: 5, lg: 20 }}  width={{base: '90vw', lg:'70vw'}}  marginInline={'auto'} > 
    Η Κοινότητα Ανοιχτού Λογισμικού του Πανεπιστημίου Μακεδονίας είναι μια ομάδα οργανωμένη από φοιτητές/-τριες του Πανεπιστημίου Μακεδονίας, που σκοπό έχει να γνωστοποιήσει και να προωθήσει το Ελεύθερο Λογισμικό, Λογισμικό Ανοικτού Κώδικα (ΕΛ/ΛΑΚ) και Open Source Hardware. Η κοινότητα απαρτίζεται κυρίως από φοιτητές/-τριες του τμήματος της Εφαρμοσμένης Πληροφορικής, μπορεί όμως να συμμετέχει οποιοσδήποτε θέλει να βοηθήσει και να προσφέρει στην ομάδα, με όποιον τρόπο μπορεί.
 </Box>
    <Box  as='p' textAlign="left" lineHeight="0.9" wordBreak={'break-word'}  fontFamily="Arial" px={{ sm: 5, lg: 20 }}  width={{base: '90vw', lg:'70vw'}}  marginInline={'auto'} > 
    Η συμμετοχή είναι εθελοντική και δεν είστε υποχρεωμένοι/-ες να καταβάλετε οποιοδήποτε χρηματικό ποσό εκτός και αν θέλετε να βοηθήσετε οικονομικά την ομάδα σε τυχόν έξοδα που προκύπτουν κατά καιρούς, είτε για αγορά απαραίτητου εξοπλισμού, είτε για την διοργάνωση εκδηλώσεων. Για περισσότερες πληροφορίες επικοινωνήστε με την ομάδα.
    </Box>
    <Button width={'fit-content'} marginInline={'auto'} onClick={() => navigate('/readme')} display="flex"
        alignItems="center"
        gap={2}>ΠΕΡΙΣΣΟΤΕΡΕΣ ΠΛΗΡΟΦΟΡΙΕΣ <ArrowForwardIcon style={{ fontSize: '28px', marginLeft: '2px' }} /></Button>
 </Flex>
    </Flex>
    </Flex>

    );
  }