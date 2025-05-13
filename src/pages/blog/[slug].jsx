import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Image, Link, Flex,UnorderedList,OrderedList, List,ListItem, HStack,Wrap,Tag,TagLabel,Button } from "@chakra-ui/react";
import { client } from "../../sanity/client"; // assuming the client is set up correctly
import { useParams } from "react-router-dom"; // for getting the slug from the URL
import imageUrlBuilder from "@sanity/image-url"; // Import the image URL builder
import { useNavigate } from "react-router-dom"; // for navigation
import { IoIosArrowRoundBack } from "react-icons/io";
import { Spinner } from '@chakra-ui/react'
import { RichTextRenderer } from "../../sanity/RichTextRenderer";
import useSWR from 'swr';
import LoadingThreeDotsPulse from "../../components/Loading";
import { FaTag } from "react-icons/fa";



const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const fetcher = ([query, params]) => {
  const cacheKey = `sanity:${query}:${JSON.stringify(params)}`;
  const cached = sessionStorage.getItem(cacheKey);
  
  if (cached) {
    const parsed = JSON.parse(cached);
    // Return cached data immediately
    return Promise.resolve(parsed);
  }

  return client.fetch(query, params)
    .then(data => {
      sessionStorage.setItem(cacheKey, JSON.stringify(data));
      return data;
    });
};




const builder = imageUrlBuilder(client); // Create the builder using the Sanity client
const urlFor = (source) => builder.image(source); // Use the builder to create the image URL

const CACHE_DURATION = 10 * 60 * 1000;

const PostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate(); 


  const { data: post, error, isLoading } = useSWR(
    [POST_QUERY, { slug }], // Query + parameters
    fetcher,                // Sanity client fetcher
    {
      revalidateOnFocus: true,  // Enable revalidation when window gains focus
    revalidateOnReconnect: true,  // Enable revalidation when regaining network
    revalidateIfStale: true,  // Automatically revalidate even if not stale
    refreshInterval: 0,       // Disable automatic refresh (use manual revalidation)
    dedupingInterval: 2000,
    }
  );


  
  // if(!post) navigate('/404', {replace:true});
 


  if (isLoading){ 
    const timeout = setTimeout(() => {
      window.location.reload();
    }, 7000);
    return (<Flex justifyContent="center" alignItems="center" height="80vh" mb={'10vh'} direction={'column'} gap={4}>
    {/* <Spinner speed='0.65s' thickness='3px' /> */}
    {/* <Text textAlign={'center'} fontSize={{sm: 'md',md:'xl'}}>Φόρτωση του άρθρου...</Text>  */}
    <LoadingThreeDotsPulse />
    </Flex>);}


if(!post){
  document.title = 'Δεν βρέθηκε το άρθρο - Open Source UoM';
return (<Flex justifyContent="center" alignItems="center" height="80vh" mb={'10vh'} direction={'column'} gap={4}>
  <Heading as="h3" size="lg" mb={4} textAlign={"center"}>Το άρθρο δεν βρέθηκε</Heading>
   <Text color={'gray.500'} mb={6} textAlign={'center'} >
                  Το άρθρο που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.
              </Text>
  <Button onClick={() => navigate('/blog')}  mt={4}>
    Πίσω στο Blog
  </Button>
  </Flex>);
  }
else{


{post.title && (document.title = `${post.title} - Open Source UoM`)};

  // Use the image URL builder to create the image URL with width and height
  const postImageUrl = post.image
  ? urlFor(post.image)
      .width(800)  
      .fit('max')  
      .auto('format') 
      .url()
  : null;

  const inputDate= new Date(post.publishedAt).toLocaleDateString('en-GB')
  const [day, month, year] = inputDate.split("/");
  
  const monthsGR = [
    "Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαΐου", "Ιουνίου",
    "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"
  ];
  
  const date= `${Number(day)} ${monthsGR[Number(month) - 1]} ${year}`;
  

  return (
    <Box maxWidth="4xl" mx="auto" p={4} minHeight="100vh" width={"90%"} >
      
         <Flex
      align="center"
      fontSize="lg"
      onClick={() => navigate('/blog')}
      cursor="pointer"
      _hover={{ color: 'brand.dark.secondary' }}
      width="fit-content"
      userSelect="none"
      mb={4}
    >
      <IoIosArrowRoundBack size={40} style={{ marginRight: '6px' }} />
      <Text>Πίσω στο Blog</Text>
    </Flex>

    
        <Heading as="h1" fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" mb={6}>
        {post.title}
        </Heading>
     
      {postImageUrl && (
  <Image
    draggable={false}
    loading='eager'
    src={postImageUrl}
    alt={post.title}
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
  />
)}

      

      <Text fontSize="md" color="gray.500" mb={6} userSelect={'none'}>
        Δημοσιεύθηκε: <span>{date}</span>
        <br />
        {post.author && (
        <Text fontSize={{base:'sm', md: 'md' }} >Από {post.author}</Text>
      )}
      </Text>
      

      <Box 
              // mb={8} borderRadius={8}
              // bg="rgba(0, 10, 38, 0.55)"
              // backdropFilter="blur(6px)"
              // boxShadow="0 8px 32px rgba(0, 0, 0, 0.6)"
              // border="1px solid rgba(255, 255, 255, 0.13)" p={{sm:4, md:8}}
              // textAlign={'left'}
              >
      
        <Box fontSize={{base:'sm', md: 'lg' }} >
          <RichTextRenderer content={post.body} />
        </Box>

      </Box>
      {post.tags && post.tags.length > 0  &&(
        <Box mt={12} mb={8} 
        userSelect={'none'}>
        <HStack spacing={2} mb={3}>
          <FaTag />
          <Text fontSize="lg" fontWeight="semibold">Ετικέτες:</Text>
        </HStack>  <Wrap spacing={3}>
            {post.tags.map((tag) => (
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
                cursor= 'default'
                // _hover={{
                //   bg: 'blue.50',
                  
                // }}
                // onClick={() => navigate(`/blog/tag/${tag.toLowerCase()}`)}
              >
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
          </Wrap>
        </Box>
      )}
    </Box>
  );}
};

export default PostPage;
