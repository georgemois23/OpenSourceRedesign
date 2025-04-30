import {Box,Flex,Text,Button,Icon,Tooltip,Image}  from "@chakra-ui/react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { ArrowForwardIcon, ArrowDownIcon ,InfoOutlineIcon} from "@chakra-ui/icons";
import { useRef,useState,useEffect } from "react";
import { Wrap, WrapItem } from '@chakra-ui/react';
import { ToolTipUnderConstruction } from "../components/ToolTipUnderConstruction";
import { LatestPosts } from "./blog/LatestPosts.jsx";

export default function HomePage() {
  document.title = "Αρχική - Open Source UoM";
  const navigate = useNavigate();
  const aboutSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerInstance.unobserve(entry.target);
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

  function scrollToRef() {
    const yOffset = -100; // Αρνητικό σημαίνει ότι θα ανέβει πιο πάνω κατά 100px (για το ύψος του navbar)
    const y = aboutSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
 
    return(
    <Flex justify="start"  direction={"column"} pt={{ base: '3vh', lg: 15 }} height="fit-content" align={'center'}  >


<Box textAlign="center" fontWeight="800" lineHeight="0.9" fontFamily="Arial" mt="20vh">
  <Text fontSize={{ sm:'5xl',md: '6xl', lg: '9xl' }}>
    OPEN SOURCE
    {/* ΚΟΙΝΟΤΗΤΑ ΑΝΟΙΚΤΟΥ ΛΟΓΙΣΜΙΚΟΥ */}
  </Text>
  <Text fontSize={{ sm:'5xl',md: '6xl', lg: '9xl' }} color="gray.600">
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
  userSelect={'none'}
  mt={{ base: '.5vh', lg: 0 }}
>
  Μάθε περισσότερα για την κοινότητα μας <ArrowDownIcon />
</Text>

    {/* <Box height="1px" ref={aboutSectionRef} mt={{ base: '20vw', lg: 1 }}></Box> */}
    <Flex ref={aboutSectionRef}   direction='column'   mb={10} marginInline={'auto'} gap={4}   width={{base: '90vw', lg:'70vw'}}  padding={4} borderRadius={8} bg='rgba(0, 10, 38, 0.6)' backdropFilter='blur(4px)' boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
  border="1px solid rgba(255, 255, 255, 0.05)"
  mt={{ base: '25vw', lg: '12vh' }}
  >
      <Text fontSize={{ base: 'lg', lg: '2xl' }} fontWeight={800}  textAlign="center">Σχετικά με τη Κοινότητα Ανοιχτού Λογισμικού του Πανεπιστημίου Μακεδονίας</Text>
    <Box  as='p' textAlign="left" lineHeight="0.9"  fontFamily="Arial" px={{ sm: 5, lg: 20 }}  width={{base: '90vw', lg:'70vw'}}  marginInline={'auto'} > 
    Η Κοινότητα Ανοιχτού Λογισμικού του Πανεπιστημίου Μακεδονίας είναι μια ομάδα οργανωμένη από φοιτητές/-τριες του Πανεπιστημίου Μακεδονίας, που σκοπό έχει να γνωστοποιήσει και να προωθήσει το Ελεύθερο Λογισμικό, Λογισμικό Ανοικτού Κώδικα (ΕΛ/ΛΑΚ) και Open Source Hardware. Η κοινότητα απαρτίζεται κυρίως από φοιτητές/-τριες του τμήματος της Εφαρμοσμένης Πληροφορικής, μπορεί όμως να συμμετέχει οποιοσδήποτε θέλει να βοηθήσει και να προσφέρει στην ομάδα, με όποιον τρόπο μπορεί.
 </Box>
    <Box  as='p' textAlign="left" lineHeight="0.9" wordBreak={'break-word'}  fontFamily="Arial" px={{ sm: 5, lg: 20 }}  width={{base: '90vw', lg:'70vw'}}  marginInline={'auto'} > 
    Η συμμετοχή είναι εθελοντική και δεν είστε υποχρεωμένοι/-ες να καταβάλετε οποιοδήποτε χρηματικό ποσό εκτός και αν θέλετε να βοηθήσετε οικονομικά την ομάδα σε τυχόν έξοδα που προκύπτουν κατά καιρούς, είτε για αγορά απαραίτητου εξοπλισμού, είτε για την διοργάνωση εκδηλώσεων. Για περισσότερες πληροφορίες επικοινωνήστε με την ομάδα.
    </Box>

    

    <Button width={'fit-content'} marginInline={'auto'} onClick={() => navigate('/readme')} display="flex"
        alignItems="center"
        gap={2}><ToolTipUnderConstruction where={"Περισσότερες πληροφορίες"} /> <ArrowForwardIcon style={{ fontSize: '28px', marginLeft: '2px' }} /></Button>
 </Flex>
    </Flex>

    <Wrap
      justify="center"
      spacing="40px"
      p={{ sm: 5, lg: 10 }}
      marginInline="auto"
      
    >
      <WrapItem>
        <Image draggable="false" src="https://opensource.uom.gr/storage/2023/08/eellak.png" alt="KDE logo" width={{ base: '550px', lg: '550px' }} height='auto' />
      </WrapItem>
      <WrapItem>
        <Image draggable="false" src="https://opensource.uom.gr/storage/2023/07/University_of_Macedonia_logo-white-768x458-1.png" alt="KDE logo" width={{ base: '300px', lg: '300px' }} height='auto' />
      </WrapItem>
    </Wrap>

    <LatestPosts />
    </Flex>

    );
  }