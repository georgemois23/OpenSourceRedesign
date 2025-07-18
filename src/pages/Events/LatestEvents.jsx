import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, HStack, Flex, Spinner, Button,Divider } from '@chakra-ui/react';
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

  let result = {};
  
  return {
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }


  // let result = "";
  
  // if (months > 0) {
  //   result = ${months}mo ${days}d ${hours}h;
  // } else if (days > 0) {
  //   result = ${days}d ${hours}h ${minutes}m ${seconds}s;
  // } else {
  //   result = ${hours}h ${minutes}m ${seconds}s;
  // }

  // return {
  //   text: result,
  //   isPast: false
  // };
};

export const LatestEvent = () => {
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(null);
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
            setCountdown(initialCountdown);
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
      // setCountdown(result.text);
      setCountdown(result);
      if (result.isPast) {
  clearInterval(timer);
  setCountdown(null);
}
    }, 1000);

    return () => clearInterval(timer);
  }, [event?.eventDate]);

  if (isLoading) return <LoadingThreeDotsPulse />;
  if (!event || countdown === "Event has passed") return null;

    const excerpt = event.shortDescription || event.body?.slice(0, 100) + "...";



  const isSmall = window.innerWidth < 768;

  return (
 <Box textAlign="center" px={{ base: 4, md: 6 }} mt={{sm:12,md:8}} mb={{xs:'18vh',sm:'28vh',lg:8}} userSelect={'none'} >
  <Heading size={{ base: "lg", md: "xl" }} mb={8}>
    Επόμενη εκδήλωση
  </Heading>

  <Box
     boxShadow="0 2px 6px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.4)"
    bg="rgba(0, 12, 45, 0.98)" 
    // backdropFilter="blur(14px)"
    border="1px solid rgba(0, 46, 102, 0.96)" 
    borderRadius={'xl'}
    m={1}
    p={{ base: 5, md: 8 }}
    maxW="lg"
    mx="auto"
    // w={{ base: "80%", md: "100%" }}
  >

     <Heading size={{ base: "md", md: "lg" }} mb={3}>
      {event.title}
    </Heading>

    <Text
      fontSize={{ base: "2xl", md: "3xl" }}
      fontWeight="bold"
      mb={3}
      color="brand.dark.secondary"
    >
      {/* {countdown ? countdown : "--d --h --m --s"} */}
  {countdown ? (
  <Flex
    justify="center"
    align="center"
    wrap="wrap"
    px={{ base: 1, md: 2 }}
    py={{ base: 1, md: 2 }}
    gap={{ base: 2, md: 4 }}
  >
    {[
      { value: countdown.months, label: "μήνες" },
      { value: countdown.days, label: "μέρες" },
      { value: countdown.hours, label: "ώρες" },
      { value: countdown.minutes, label: "λεπτά" },
      { value: countdown.seconds, label: "δευτερόλεπτα" },
    ]
      .filter(({ value }) => value !== null && value !== undefined)
      .slice(0, isSmall ? 4 : 5)
      .map(({ value, label }, index, arr) => (
        <React.Fragment key={index}>
          <Flex
            direction="column"
            align="center"
            minW={{ base: "32px", md: "40px" }}
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
            >
              {value.toString().padStart(2, "0")}
            </Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              color="gray.500"
            >
              {label}
            </Text>
          </Flex>

          {index < arr.length - 1 && (
            <Divider
              orientation="vertical"
              borderColor="gray.600"
              h={{ base: 5, md: 6 }}
            />
          )}
        </React.Fragment>
      ))}
  </Flex>
) : (
  <Flex justify="center" align="center">
    <Text>Loading countdown...</Text>
  </Flex>
)}

    </Text>



{event.location && (
<Flex align="baseline" mb={3} fontSize="sm">
  <Text flex="1" whiteSpace="normal" fontSize={{ base: "xs", md: "sm" }}>
    <Box as={FaMapMarkerAlt} display="inline" boxSize="12px" mr="4px"  />
    Τοποθεσία:{" "}
    <Text as="span" fontWeight="medium" fontSize={{ base: "xs", md: "sm" }}>
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
    size="sm" onClick={() =>  navigate(`/events/${event.slug.current}`)}
  >
    Μάθε περισσότερα
  </Button>
    {/* <Button size="sm" onClick={() => navigate(/events/${event.slug.current})}>
      Μάθε περισσότερα
    </Button> */}
  </Box>
 
</Box>


  );
};