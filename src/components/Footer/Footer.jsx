import React from 'react';
import { Flex, Box, Text, Image,useBreakpointValue} from '@chakra-ui/react';
import { EmailIcon } from "@chakra-ui/icons";
import { FaInstagram, FaFacebook, FaLinkedin, FaDiscord, FaMapMarkerAlt } from 'react-icons/fa';
import SocialMediaLink from './FooterSocial';

const Footer = () => {
  const linkedInLabel = useBreakpointValue({ base: "LinkedIn", md: "company/opensourceuom" });
  return (
    <Flex
      as="footer"
      direction="column"
      align="center"
      py={3}
      px={4}
      bg="rgba(0, 10, 38, 0.93)"
      width="100%"
      backdropFilter="blur(4px)"
      gap={6}
      paddingX={{ base: 6, md: 12 }}
      height={'fit-content'}
      minWidth={'fit-content'}
    >
      <Flex
        align="flex-start"
        justify="space-between"
        width="100%"
        gap={4}
        direction={{ base: "column", md: "row" }} 
      >
        <Image
          alt='Open Source UoM Logo'
          draggable={false}
          src="https://avatars.githubusercontent.com/u/109147894?s=200&v=4"
          w={{ base: "40px", md: "60px" }}
        />
        
        <Flex direction={{ base: "column", sm: "row" }} width="100%"  gap={4} >
          <Box textAlign="left" flex="1">
            <Text fontSize="sm" color="white" fontWeight="bold">
              ΕΠΙΚΟΙΝΩΝΙΑ
            </Text>
            <Text fontSize="sm" color="gray.400">
              <EmailIcon style={{ marginRight: '5px' }} /> <Text as={'span'} overflowWrap={'normal'} wordBreak={'keep-all'}>opensource@uom.edu.gr</Text>
            </Text>
            <Text fontSize="sm" color="gray.400">
              <EmailIcon style={{ marginRight: '5px' }} /> <Text as={'span'} wordBreak={'keep-all'} >linux-team@uom.edu.gr</Text>
            </Text>
          </Box>

          <Box textAlign="left" flex="1">
            <Text fontSize="sm" color="white" fontWeight="bold">
              SOCIAL MEDIA
            </Text>
            <Flex direction="column" gap={2} pt={2}>
              <SocialMediaLink
                icon={<FaInstagram size="16px" />}
                url="https://www.instagram.com/opensourceuom/"
                label="opensourceuom"
              />
              <SocialMediaLink
                icon={<FaLinkedin size="16px" />}
                url="https://www.linkedin.com/company/opensourceuom"
                label={linkedInLabel}
              />
              <SocialMediaLink
                icon={<FaFacebook size="16px" />}
                url="https://www.facebook.com/opensourceuom"
                label="opensourceuom"
              />
            </Flex>
          </Box>
        </Flex>

        <Box textAlign="left" width={{ base: "100%", md: "auto" }}>
          <Text fontSize="sm" color="white" fontWeight="bold">
            ΒΡΕΙΤΕ ΜΑΣ
          </Text>
          <Flex direction="column" gap={2} pt={2}>
            <Flex align="center" gap={1}>
              <FaMapMarkerAlt />
              <Text fontSize="sm" color="gray.400" lineHeight="normal">
                Πανεπιστήμιο Μακεδονίας, Αίθουσα 10
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Text fontSize="xs" color="gray.500" textAlign="center">
        Open Source UoM
      </Text>
    </Flex>
  );
};

export default Footer;
