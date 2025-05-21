import {Box,Flex,Text,Button,Icon,Tooltip,Image}  from "@chakra-ui/react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { ArrowForwardIcon, ArrowDownIcon ,InfoOutlineIcon} from "@chakra-ui/icons";
import { useRef,useState,useEffect } from "react";
import { Wrap, WrapItem } from '@chakra-ui/react';
import { ToolTipUnderConstruction } from "../components/ToolTipUnderConstruction";
import { LatestPosts } from "./blog/LatestPosts.jsx";
import { LatestEvent } from "./Events/LatestEvents.jsx";

import { FiUsers } from "react-icons/fi";

import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  document.title = "Αρχική - Open Source UoM";
  const navigate = useNavigate();
  const aboutSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

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
      }, 500);
  
      return () => clearTimeout(timeoutId);
    }
  }, [isVisible]);

  const MotionSpan = motion.span;

  const texts = [
    { content: "OPEN SOURCE", color: undefined },
    { content: "UOM COMMUNITY", color: "gray.500" }
  ];

  useEffect(() => {
    const animationPlayed = sessionStorage.getItem('textAnimationPlayed');
    if (!animationPlayed) {
      setShouldAnimate(true);
      sessionStorage.setItem('textAnimationPlayed', 'true');
    }
  }, []);



  
  function scrollToRef() {
    const yOffset = -150; 
    const y = aboutSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
 
    return(
    <Flex justify="start"  direction={"column"} pt={{ base: '3vh', lg: 15 }} height="fit-content" align={'center'}  >


<Box textAlign="center" fontWeight="800" lineHeight="0.9" fontFamily="Arial" mt="20vh">
  {/* <Text fontSize={{ sm:'5xl',md: '6xl', lg: '9xl' }}>
    OPEN SOURCE
  </Text>
  <Text fontSize={{ sm:'5xl',md: '6xl', lg: '9xl' }} color="gray.600">
    UOM COMMUNITY
  </Text> */}
 
    <AnimatePresence>
      {texts.map((text, index) => (
        <Text
          key={index}
          fontSize={{ sm: "5xl", md: "6xl", lg: "9xl" }}
          color={text.color}
          display="inline-block"
          userselect={'none'}
        >
          {text.content.split(" ").map((word, wordIndex) => {
            const Component = shouldAnimate ? MotionSpan : "span";
            const props = shouldAnimate
              ? {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: {
                    duration: 0.5,
                    delay: index * 0.3 + wordIndex * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              : {};

            return (
              <Component
                key={wordIndex}
                {...props}
                style={{
                  display: "inline-block",
                  marginRight: "0.25em",
                  whiteSpace: "nowrap",
                  userSelect: 'none'
                }}
              >
                {word}
              </Component>
            );
          })}
        </Text>
      ))}
    </AnimatePresence>
</Box>

<Flex direction={{ base: 'column', lg: 'row' }}  justify="center" align="center" gap={{ base: 2, lg: '8' }} mt={'10vh'} mb={10}>
  {/* <Text fontSize={{ base: 'md', lg: 'xl' }}  textAlign="center">
    Συμμετοχή στην ομάδα μας;</Text> */} 
<Button onClick={() => navigate('/register')}
        // mt={{ base: 20, lg: 12 }}
        width="fit-content"
        display="flex"
        alignItems="center"
        // gap={2}
        rightIcon={<FiUsers />}
        >Εγγραφή στην ομάδα μας
        {/* <ArrowForwardIcon style={{ fontSize: '28px', marginLeft: '2px' }} /> */}
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

    <Flex ref={aboutSectionRef}   
    direction='column'  
     mb={10} 
     marginInline={'auto'} 
     gap={2}   
    //  width={{base: '90vw', lg:'70vw'}}  
    width="100vw" 
    py={{ base:12, lg: 12 }}
    // py={8}
    //  padding={4}
    px={{sm:4,lg: 8}}
    //  borderRadius={8}  
    boxShadow="0 2px 6px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.2)"
    bg="rgba(0, 12, 45, 0.98)" 
    // backdropFilter="blur(14px)"
    // borderBlock="1px solid rgba(0, 46, 102, 0.9)" 
    // border="1px solid rgba(0, 46, 102, 0.9)" 
  mt={{ base: '25vw', lg: '12vh' }}
  transform="translateY(-2px)" 
  >
      <Text fontSize={{ base: 'lg', lg: '2xl' }} fontWeight={800}  textAlign="center" mb={{sm:2,md:4}}>Σχετικά με τη Κοινότητα Ανοιχτού Λογισμικού του Πανεπιστημίου Μακεδονίας</Text>
    <Box  as='p' textAlign="left" lineHeight="1.1"  fontFamily="Arial" px={{sm:0,md:8}} width={{base: '95%', lg:'70vw'}}  marginInline={'auto'} > 
    Η Κοινότητα Ανοιχτού Λογισμικού του Πανεπιστημίου Μακεδονίας είναι μια ομάδα οργανωμένη από φοιτητές/-τριες του Πανεπιστημίου Μακεδονίας, που σκοπό έχει να γνωστοποιήσει και να προωθήσει το Ελεύθερο Λογισμικό, Λογισμικό Ανοικτού Κώδικα (ΕΛ/ΛΑΚ) και Open Source Hardware. Η κοινότητα απαρτίζεται κυρίως από φοιτητές/-τριες του τμήματος της Εφαρμοσμένης Πληροφορικής, μπορεί όμως να συμμετέχει οποιοσδήποτε θέλει να βοηθήσει και να προσφέρει στην ομάδα, με όποιον τρόπο μπορεί.
 </Box>
    <Box  as='p' textAlign="c" lineHeight="1.1" wordBreak={'break-word'}  fontFamily="Arial" px={{sm:0,md:8}}width={{base: '95%', lg:'70vw'}}  marginInline={'auto'} > 
    Η συμμετοχή είναι εθελοντική και δεν είστε υποχρεωμένοι/-ες να καταβάλετε οποιοδήποτε χρηματικό ποσό εκτός και αν θέλετε να βοηθήσετε οικονομικά την ομάδα σε τυχόν έξοδα που προκύπτουν κατά καιρούς, είτε για αγορά απαραίτητου εξοπλισμού, είτε για την διοργάνωση εκδηλώσεων. Για περισσότερες πληροφορίες επικοινωνήστε με την ομάδα.
    </Box>

    

    <Button  marginInline={'auto'} onClick={() => navigate('/readme')} display="flex" size={{ base: 'sm', md: 'md' }}
        alignItems="center" width={{ base: 'fit-content', lg: 'fit-content' }} wordBreak={'break-word'}
        gap={2} fontSize={{ base: 'sm', lg: 'md' }} mt={4}>
          Περισσότερες πληροφορίες
          <ArrowForwardIcon style={{ fontSize: '28px', marginLeft: '2px' }} /> 
          </Button>
 </Flex>
    </Flex>

    <LatestEvent />
     
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
   