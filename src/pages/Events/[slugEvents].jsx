import React from "react";
import { Box, Heading, Text, Image, Flex, HStack, Wrap, Tag, TagLabel, Button, Spinner,Link } from "@chakra-ui/react";
import { client } from "../../sanity/client";
import { useParams, useNavigate } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RichTextRenderer } from "../../sanity/RichTextRenderer";
import useSWR from 'swr';
import LoadingThreeDotsPulse from "../../components/Loading";
import { FaTag, FaUserFriends, FaCalendarAlt,FaMapMarkerAlt } from "react-icons/fa";

const EVENT_QUERY = `*[_type == "event" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  shortDescription,
  eventDate,
  organizer,
  body,
  location {
    name,
    mapsLink,
    address
  },
  images[] {
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
  tags
}`;

const fetcher = ([query, params]) => {
  const cacheKey = `sanity:${query}:${JSON.stringify(params)}`;
  const cached = sessionStorage.getItem(cacheKey);
  
  if (cached) {
    return Promise.resolve(JSON.parse(cached));
  }

  return client.fetch(query, params)
    .then(data => {
      sessionStorage.setItem(cacheKey, JSON.stringify(data));
      return data;
    });
};

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

const EventPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: event, error, isLoading } = useSWR(
    [EVENT_QUERY, { slug }],
   fetcher,                // Sanity client fetcher
    {
      revalidateOnFocus: true,  
    revalidateOnReconnect: true,  
    revalidateIfStale: true,  
    refreshInterval: 0,      
    dedupingInterval: 2000,
    
    }
  );

  if (isLoading) {
    const timeout = setTimeout(() => {
    //   window.location.reload();
    }, 7000);
    return (
      <Flex justifyContent="center" alignItems="center" height="80vh" mb={'10vh'} direction={'column'} gap={4}>
        <LoadingThreeDotsPulse />
      </Flex>
    );
  }

  if (!event) {
    document.title = 'Δεν βρέθηκε η εκδήλωση - Open Source UoM';
    return (
      <Flex justifyContent="center" alignItems="center" height="80vh" mb={'10vh'} direction={'column'} gap={4}>
        <Heading as="h3" size="lg" mb={4} textAlign={"center"}>Η εκδήλωση δεν βρέθηκε</Heading>
        <Text color={'gray.500'} mb={6} textAlign={'center'}>
          Η εκδήλωση που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.
        </Text>
        <Button onClick={() => navigate('/events')} mt={4}>
          Πίσω στις Εκδηλώσεις
        </Button>
      </Flex>
    );
  }

  document.title = `${event.title} - Open Source UoM`;

  // Format event date
  const eventDate = new Date(event.eventDate);
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Athens',
      hour12: false,
  };
  const formattedDate = eventDate.toLocaleDateString('el-GR', options);

  return (
    <Box maxWidth="4xl" mx="auto" p={4} minHeight="100vh" width={"90%"} >
      <Flex
        align="center"
        fontSize="lg"
        onClick={() => navigate('/events')}
        cursor="pointer"
        _hover={{ color: 'brand.dark.secondary' }}
        width="fit-content"
        userSelect="none"
        mb={4}
      >
        <IoIosArrowRoundBack size={40} style={{ marginRight: '6px' }} />
        <Text>Όλες οι Εκδηλώσεις</Text>
      </Flex>
       {new Date(event.eventDate).getTime() < Date.now() && <Text color={"brand.dark.secondary"} fontSize="lg" opacity={1} mb={4}>Έγινε η εκδήλωση</Text>}
      <Heading as="h1" fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" mb={6}>
        {event.title}
      </Heading>

     {(event.location ) && (
    <HStack
  onClick={() => window.open(event.location.mapsLink)}
  cursor="pointer"
  spacing={2}
  align="center"
  wrap="wrap"
  _hover={{ color: "brand.dark.secondary" }}
  mb={4}
>
  <Box as={FaMapMarkerAlt} boxSize={4} />
  <Text as="span" fontWeight="medium">
    Τοποθεσία:
  </Text>
  <Text>
    {event.location.name}
    {event.location.address && `, ${event.location.address}`}
  </Text>
</HStack>



        )}

      <Flex direction="column" gap={4} mb={6} color="gray.400">
        <HStack>
          <FaCalendarAlt />
          <Text>Ημερομηνία: {formattedDate}</Text>
        </HStack>
        {event.organizer?.length > 0 && (
  <HStack align="flex-start">
    <Box pt={1}>
      <FaUserFriends size={18} />
    </Box>
    <Box>
      <Text mb={1}>Οργάνωση:</Text>
      <Wrap spacing={2}>
        {event.organizer.map((organizer, index) => (
          <Text key={index} fontSize="sm">
            {organizer}{index !== event.organizer.length - 1 ? ',' : ''}
          </Text>
        
        ))}
      </Wrap>
    </Box>
  </HStack>
)}

      </Flex>

      {event.images?.length > 0 && (
        <Image
          draggable={false}
          loading='eager'
          src={urlFor(event.images[0]).width(800).url()}
          alt={event.images[0]?.alt || event.title}
          borderRadius="md"
          mb={6}
          maxW="100%"
          w={{sm:'80%', md:'80%', lg:'30%'}}
          h="auto"
          mx="auto"
          css={{
            aspectRatio: 'auto 16/9', 
            objectFit: 'contain'
          }}
          fallbackSrc={event.images[0]?.asset?.metadata?.lqip}
        />
      )}

      {event.shortDescription && (
        <Text fontSize="lg" mb={6} fontWeight="medium">
          {event.shortDescription}
        </Text>
      )}

      <Box fontSize={{base: 'sm', md: 'lg'}}>
        <RichTextRenderer content={event.body} />
      </Box>

      {event.tags?.length > 0 && (
        <Box mt={12} mb={8} userSelect={'none'}>
          <HStack spacing={2} mb={3}>
            <FaTag />
            <Text fontSize="lg" fontWeight="semibold">Ετικέτες:</Text>
          </HStack>
          <Wrap spacing={3}>
            {event.tags.map((tag) => (
              <Tag 
                key={tag}
                size="md"
                variant="subtle"
                colorScheme="blue"
                borderRadius="full"
                px={4}
                py={2}
                border="1px solid"
                borderColor="blue.200"
                cursor='default'
              >
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
          </Wrap>
        </Box>
      )}
    </Box>
  );
};

export default EventPage;