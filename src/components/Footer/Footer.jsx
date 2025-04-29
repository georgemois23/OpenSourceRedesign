// import React from 'react';
// import { Flex, Box, Text, Image,useBreakpointValue} from '@chakra-ui/react';
// import { EmailIcon } from "@chakra-ui/icons";
// import { FaInstagram, FaFacebook, FaLinkedin, FaDiscord, FaMapMarkerAlt } from 'react-icons/fa';
// import SocialMediaLink from './FooterSocial';

// const Footer = () => {
//   const linkedInLabel = useBreakpointValue({ base: "LinkedIn", md: "company/opensourceuom" });
//   return (
//     <Flex
//       as="footer"
//       direction="column"
//       align="center"
//       py={3}
//       px={4}
//       bg="rgba(0, 10, 38, 0.93)"
//       width="100%"
//       backdropFilter="blur(4px)"
//       gap={6}
//       paddingX={{ base: 6, md: 12 }}
//       height={'fit-content'}
//       minWidth={'fit-content'}
//     >
//       <Flex
//         align="flex-start"
//         justify="space-between"
//         width="100%"
//         gap={4}
//         direction={{ base: "column", md: "row" }} 
//       >
//         <Image
//           alt='Open Source UoM Logo'
//           draggable={false}
//           src="/logo.png"
//           loading="eager" 
//           height="auto"
//           w={{ base: "40px", md: "60px" }}
//         />
        
//         <Flex direction={{ base: "column", sm: "row" }} width="100%"  gap={4} >
//           <Box textAlign="left" flex="1">
//             <Text fontSize="sm" color="white" fontWeight="bold">
//               ΕΠΙΚΟΙΝΩΝΙΑ
//             </Text>
//             <Text fontSize="sm" color="gray.400">
//               <EmailIcon style={{ marginRight: '5px' }} /> <Text as={'span'} overflowWrap={'normal'} wordBreak={'keep-all'}>opensource@uom.edu.gr</Text>
//             </Text>
//             <Text fontSize="sm" color="gray.400">
//               <EmailIcon style={{ marginRight: '5px' }} /> <Text as={'span'} wordBreak={'keep-all'} >linux-team@uom.edu.gr</Text>
//             </Text>
//           </Box>

//           <Box textAlign="left" flex="1">
//             <Text fontSize="sm" color="white" fontWeight="bold">
//               SOCIAL MEDIA
//             </Text>
//             <Flex direction="column" gap={2} pt={2}>
//               <SocialMediaLink
//                 icon={<FaInstagram size="16px" />}
//                 url="https://www.instagram.com/opensourceuom/"
//                 label="opensourceuom"
//               />
//               <SocialMediaLink
//                 icon={<FaLinkedin size="16px" />}
//                 url="https://www.linkedin.com/company/opensourceuom"
//                 label={linkedInLabel}
//               />
//               <SocialMediaLink
//                 icon={<FaFacebook size="16px" />}
//                 url="https://www.facebook.com/opensourceuom"
//                 label="opensourceuom"
//               />
//             </Flex>
//           </Box>
//         </Flex>

//         <Box textAlign="left" width={{ base: "100%", md: "auto" }} >
//           <Text fontSize="sm" color="white" fontWeight="bold">
//             ΒΡΕΙΤΕ ΜΑΣ
//           </Text>
//           <Flex direction="column" gap={2} pt={2} >
//             <Flex align={'center'} gap={1}>
//               <FaMapMarkerAlt />
//               <Text onClick={() => window.open('https://www.google.gr/maps/place/University+of+Macedonia/@40.6250129,22.9579198,17z/data=!4m5!3m4!1s0x14a838febd9553d7:0xdafb4206c7c961c9!8m2!3d40.6250129!4d22.9601085', '_blank')} cursor={'pointer'} fontSize="sm" color="gray.400" lineHeight="normal" whiteSpace="pretty" >
//                 Πανεπιστήμιο Μακεδονίας, Αίθουσα 10
//               </Text>
//             </Flex>
//           </Flex>
//         </Box>
//       </Flex>

//       <Text fontSize="xs" color="gray.500" textAlign="center">
//         Open Source UoM
//       </Text>
//     </Flex>
//   );
// };

// export default Footer;
import React from 'react';
import { Flex, Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import { EmailIcon } from "@chakra-ui/icons";
import { FaInstagram, FaFacebook, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import SocialMediaLink from './FooterSocial';

const Footer = () => {
 

  return (
    <Flex
      as="footer"
      direction="column"
      align="center"
      py={3}
      px={{ base: 4, md: 8 }}
      bg="rgba(0, 10, 38, 0.93)"
      width="100%"
      backdropFilter="blur(4px)"
      gap={6}
      minH="fit-content"
    >
      <Flex
        align="flex-start"
        justify="center"
        width="100%"
        maxW="container.xl"
        gap={8}
        direction={{ base: "column", md: "row" }}
        flexWrap="wrap"
      >
        
        <Box flexShrink={0}>
          <Image
            alt='Open Source UoM Logo'
            draggable={false}
            src="/logo.png"
            loading="eager"
            height="auto"
            w={{ base: "40px", md: "60px" }}
          />
        </Box>
        
        <Flex 
          direction="row" 
          gap={{ base: 6, md: 12 }}
          flex="1"
          flexWrap="wrap"
        >
          
          <Box flex="1" minW="160px">
            <Text fontSize="sm" color="white" fontWeight="bold" mb={3}>
              ΕΠΙΚΟΙΝΩΝΙΑ
            </Text>
            <Flex direction="column" gap={2}>
              <Flex align="center" gap={2}>
                <EmailIcon boxSize={4} />
                <Text fontSize="sm" color="gray.400" wordBreak="break-word">
                  opensource@uom.edu.gr
                </Text>
              </Flex>
              <Flex align="center" gap={2}>
                <EmailIcon boxSize={4} />
                <Text fontSize="sm" color="gray.400" wordBreak="break-word">
                  linux-team@uom.edu.gr
                </Text>
              </Flex>
            </Flex>
          </Box>


          <Box flex="1" minW="200px">
            <Text fontSize="sm" color="white" fontWeight="bold" mb={3}>
              SOCIAL MEDIA
            </Text>
            <Flex direction="column" gap={3}>
              <SocialMediaLink
                icon={<FaInstagram size="16px" />}
                url="https://www.instagram.com/opensourceuom/"
                label="opensourceuom"
              />
              <SocialMediaLink
                icon={<FaLinkedin size="16px" />}
                url="https://www.linkedin.com/company/opensourceuom"
                label='company/opensourceuom'
              />
              <SocialMediaLink
                icon={<FaFacebook size="16px" />}
                url="https://www.facebook.com/opensourceuom"
                label="opensourceuom"
              />
            </Flex>
          </Box>
        </Flex>


        <Box flex="1" minW={{ base: "100%", md: "160px" }}>
          <Text fontSize="sm" color="white" fontWeight="bold" mb={3}>
            ΒΡΕΙΤΕ ΜΑΣ
          </Text>
          <Flex align="flex-start" gap={2}>
            <Box pt={1}>
              <FaMapMarkerAlt size="16px" />
            </Box>
            <Text 
              onClick={() => window.open('https://www.google.gr/maps/place/University+of+Macedonia/@40.6250129,22.9579198,17z/data=!4m5!3m4!1s0x14a838febd9553d7:0xdafb4206c7c961c9!8m2!3d40.6250129!4d22.9601085', '_blank')} 
              cursor="pointer" 
              fontSize="sm" 
              color="gray.400"
              lineHeight="tall"
            >
              Πανεπιστήμιο Μακεδονίας, Αίθουσα 10
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Text fontSize="xs" color="gray.500" textAlign="center" mt={4}>
        {/* © {new Date().getFullYear()}  */}
        Open Source UoM
      </Text>
    </Flex>
  );
};

export default Footer;