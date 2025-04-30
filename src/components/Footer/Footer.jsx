import React from 'react';
import { Flex, Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import { EmailIcon } from "@chakra-ui/icons";
import { FaInstagram, FaFacebook, FaLinkedin, FaMapMarkerAlt,FaDiscord } from 'react-icons/fa';
import SocialMediaLink from './FooterSocial';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted to fix layout issues that happen before hydration
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Box h="80px" w="100%" />;
  }

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
            <Text fontSize="sm" color="white" fontWeight="bold" mb={3} userSelect={'none'}>
              ΕΠΙΚΟΙΝΩΝΙΑ
            </Text>
            <Flex direction="column" gap={2}>
              <Flex align="center" gap={2}>
                <EmailIcon boxSize={4} />
                <Text as="a" href="mailto:opensource@uom.edu.gr" fontSize="sm" color="gray.400" wordBreak="break-word">
                  opensource@uom.edu.gr
                </Text>
              </Flex>
              <Flex align="center" gap={2}>
                <EmailIcon boxSize={4} />
                <Text as="a" href="mailto:linux-team@uom.edu.gr"  fontSize="sm" color="gray.400" wordBreak="break-word">
                  linux-team@uom.edu.gr
                </Text>
              </Flex>
            </Flex>
          </Box>


          <Box flex="1" minW="200px">
            <Text fontSize="sm" color="white" fontWeight="bold" mb={3} userSelect={'none'}>
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
              <SocialMediaLink
                icon={<FaDiscord size="16px" />}
                url="https://discord.gg/nzMJpRYxp6"
                label="discord"
              />
            </Flex>
          </Box>
        </Flex>


        <Box flex="1" minW={{ base: "100%", md: "160px" }}>
          <Text fontSize="sm" color="white" fontWeight="bold" mb={3} userSelect={'none'}>
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

      <Text fontSize="xs" color="gray.500" textAlign="center" mt={4} userSelect={'none'}>
       
        Open Source UoM I  © All rights reserved {new Date().getFullYear()} 
      </Text>
    </Flex>
  );
};

export default Footer;