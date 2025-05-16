import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, HStack, Flex, Spinner, Button } from '@chakra-ui/react';
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { client } from '../../sanity/client';
import LoadingThreeDotsPulse from "../../components/Loading";
import { FaMapMarkerAlt } from "react-icons/fa";

const LATEST_EVENT_QUERY = `*[_type == "event" && eventDate > now()] | order(eventDate asc)[0]{
  _id,
  title,
  slug,
  location {name, address},
  shortDescription,
  eventDate,
  organizer,
  body
}`;


const formatCountdown = (dateString) => {
  const countDownDate = new Date(dateString).getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    return { text: "Event has passed", isPast: true };
  }

  const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let result = "";
  
  if (months > 0) {
    result = `${months}mo ${days}d ${hours}h`;
  } else if (days > 0) {
    result = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    result = `${hours}h ${minutes}m ${seconds}s`;
  }

  return {
    text: result,
    isPast: false
  };
};

export const LatestEvent = () => {
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const CACHE_KEY = 'latest-event';
    const CACHE_DURATION = 30 * 60 * 1000;
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(`${CACHE_KEY}-time`);

    if (cached && cachedTime && Date.now() - parseInt(cachedTime) < CACHE_DURATION) {
      setEvent(JSON.parse(cached));
      setIsLoading(false);
    }

    client.fetch(LATEST_EVENT_QUERY)
      .then(data => {
        if (data) {
          setEvent(data);
          localStorage.setItem(CACHE_KEY, JSON.stringify(data));
          localStorage.setItem(`${CACHE_KEY}-time`, Date.now().toString());
          if (data.eventDate) {
            const initialCountdown = formatCountdown(data.eventDate);
            setCountdown(initialCountdown.text);
          }
        }
      })
      .catch(err => {
        console.error("Error fetching event:", err);
        if (cached) setEvent(JSON.parse(cached));
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!event?.eventDate) return;

    const timer = setInterval(() => {
      const result = formatCountdown(event.eventDate);
      setCountdown(result.text);
      if (result.isPast) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [event?.eventDate]);

  if (isLoading) return <LoadingThreeDotsPulse />;
  if (!event || countdown === "Event has passed") return null;

    const excerpt = event.shortDescription || event.body?.slice(0, 100) + "...";

  return (
 <Box textAlign="center" px={{ base: 4, md: 6 }} mt={{sm:12,md:8}} mb={{sm:'18vh',lg:8}} userSelect={'none'} >
  <Heading size={{ base: "lg", md: "xl" }} mb={8}>
    Επόμενη εκδήλωση
  </Heading>

  <Box
     boxShadow="0 2px 6px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.4)"
    bg="rgba(0, 12, 45, 0.98)" 
    // backdropFilter="blur(14px)"
    border="1px solid rgba(0, 46, 102, 0.96)" 
    borderRadius={'xl'}
    p={{ base: 5, md: 8 }}
    maxW="lg"
    mx="auto"
  >

     <Heading size={{ base: "md", md: "xl" }} mb={3}>
      {event.title}
    </Heading>

    <Text
      fontSize={{ base: "2xl", md: "3xl" }}
      fontWeight="bold"
      mb={3}
      color="brand.dark.secondary"
    >
      {countdown ? countdown : "--d --h --m --s"}
    </Text>



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

   
   <Button
    bg="transparent"
    color='brand.dark.secondary'
    fontWeight="bold"
    letterSpacing="1.2px"
    border="2px solid"
    borderColor='brand.dark.secondary'
    borderRadius="4px"
    _hover={{
      bg: "brand.dark.secondary",
      // color: "brand.dark.text",
      color: "brand.dark.primary",
      // boxShadow: "0 0 8px",
    }}
    transition="all 0.3s ease"
    size="sm" onClick={() => navigate(`/events/${event.slug.current}`)}
  >
    Μάθε περισσότερα
  </Button>
    {/* <Button size="sm" onClick={() => navigate(`/events/${event.slug.current}`)}>
      Μάθε περισσότερα
    </Button> */}
  </Box>
 
</Box>


  );
};