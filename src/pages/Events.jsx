import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Heading, 
  SimpleGrid, 
  Text, 
  Image,
  HStack,
  Flex,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  Spinner,
  Tag,
  TagLabel,
  TagLeftIcon,
  useColorModeValue,
  Wrap,WrapItem,
} from '@chakra-ui/react';
import { client } from '../sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { FaCalendarAlt, FaUserFriends, FaTag,FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EVENTS_QUERY = `*[_type == "event"] | order(eventDate desc)[0...12]{
  _id,
  title,
  slug,
  eventDate,
  location {name, address},
  organizer,
  "mainImage": images[0] {
    asset->{
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    },
    alt
  },
  tags,
  body
}`;

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

export default function EventList() {
  document.title = "Events - Open Source UoM";
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastFetchTime, setLastFetchTime] = useState(0);
  const navigate = useNavigate();
  const tagColor = useColorModeValue('blue.500', 'blue.200');

  useEffect(() => {
    const CACHE_DURATION =  60 * 1000; 
    const cachedData = localStorage.getItem('eventsData');
    const cachedTime = localStorage.getItem('eventsDataTime');

    if (cachedData && cachedTime && Date.now() - parseInt(cachedTime) < CACHE_DURATION) {
      setEvents(JSON.parse(cachedData));
      setIsLoading(false);
      return;
    }

    client.fetch(EVENTS_QUERY)
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
        localStorage.setItem('eventsData', JSON.stringify(data));
        localStorage.setItem('eventsDataTime', Date.now().toString());
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        if (cachedData) {
          setEvents(JSON.parse(cachedData));
        }
      });
  }, []);

  const formatDate = (dateString) => {
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (isLoading) {
    return (
      <Box p={4}  minH={"100vh"}>
        <Heading size="lg" mb={6}>Προσεχής εκδηλώσεις</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {[...Array(6)].map((_, i) => (
            <Box key={i} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Skeleton height="200px" mb={4} />
              <SkeletonText noOfLines={2} spacing="4" />
              <HStack mt={4}>
                <SkeletonCircle size="4" />
                <Skeleton width="100px" height="20px" />
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    );
  }

  if (events.length === 0) {
    return (
      <Flex textAlign="center" direction='column' justifyContent={'center'}  p={2} minH={"80vh"} h={'fit-content'} mb={10} >
        <Heading size="lg" mb={4}>Δεν υπάρχουν προσεχής εκδηλώσεις</Heading>
        <Text>Προσπαθήστε ξανά αργότερα ή ακολουθήστε μας στο <Link to='https://www.instagram.com/opensourceuom/' style={{textDecoration:'underline'}}>Instagram</Link>  για να ενημερώνεστε!</Text>
      </Flex>
    );
  }

  return (
    <Box p={4} minH={"100vh"} h={'100vh'} mb={10} height='fit-content'>
      <Heading size="lg" mb={6}>Προσεχής εκδηλώσεις</Heading>
       <Wrap spacing={8} justify="center"  mx={'auto'} width={{ base: '100%', md: '90%', lg: '100%' }} > 
        {events.map((event) => (
          <WrapItem key={event._id} width={{ sm: '100%',sm2: '75%', md: '45%', lg: '30%' }} minW={'200px'} display="flex"
                      justifyContent="center" >
                        <Box
                                      key={event._id} 
                                      borderWidth={1}
                                      p={4}
                                      h={'fit-content'}
                                      width={{ base: '100%', md: '90%', lg: '95%' }}
                                      borderRadius={8}
                                      bg="rgba(0, 10, 38, 0.95)"
                                      // backdropFilter="blur(6px)"
                                      // boxShadow="0 8px 32px rgba(0, 0, 0, 0.5)"
                                      boxShadow="0 8px 32px rgba(0, 0, 0, 0.6)"
                                      border="1px solid rgba(255, 255, 255, 0.13)"
                                      // bg="linear-gradient(135deg, rgba(0, 10, 38, 0.6), rgba(25, 35, 55, 0.8))"
                                      // backdropFilter="blur(4px)"
                                      // boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
                                      // border="1px solid rgba(255, 255, 255, 0.09)"
                                      _hover={{ 
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)'
                                      }}
                                      transition="all 0.3s ease"
                                        user-select='none'
                        
                                      flexDirection="column"
                                      
                                      
            cursor="pointer"
            onClick={() => navigate(`/events/${event.slug.current}`)}
                                      
                                    >
         
            {event.mainImage && (
              <Image
                src={urlFor(event.mainImage).width(400).url()}
                alt={event.mainImage.alt || event.title}
                objectFit="cover"
                  borderRadius={8}
                  mb={4}
                  height="auto"
                  width={{base:"100%", lg:"100%"}}
                  transform={'scale(0.9)'}
                  marginInline={{base: 'none', lg: 'auto'}}
                fallbackSrc={event.mainImage.asset.metadata.lqip}
              />
            )}
            <Heading size="md" mb={2}>{event.title}</Heading>
            
            <HStack spacing={2} mb={2}>
              <FaCalendarAlt size="14px" />
              <Text fontSize="sm">{formatDate(event.eventDate)}</Text>
            </HStack>
            
         
         {event.location && (
         <Flex
           align="baseline"
           mb={3}
           fontSize="sm"
         >
           <Box as={FaMapMarkerAlt} boxSize="12px" mr="6px" mt="1px" />
           <Text flex="1" whiteSpace="normal">
             Τοποθεσία:{" "}
             <Text as="span" fontWeight="medium">
               {event.location.name}
             </Text>
             {event.location.address && (
               <Text as="span">, {event.location.address}</Text>
             )}
           </Text>
         </Flex>
         
         
         )}
            
            
          </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}