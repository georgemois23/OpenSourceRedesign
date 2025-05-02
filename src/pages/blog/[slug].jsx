import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Image, Link, Flex,UnorderedList,OrderedList, List,ListItem, HStack } from "@chakra-ui/react";
import { client } from "../../sanity/client"; // assuming the client is set up correctly
import { useParams } from "react-router-dom"; // for getting the slug from the URL
import imageUrlBuilder from "@sanity/image-url"; // Import the image URL builder
import { useNavigate } from "react-router-dom"; // for navigation
import { IoIosArrowRoundBack } from "react-icons/io";
import { Spinner } from '@chakra-ui/react'
import { RichTextRenderer } from "../../sanity/RichTextRenderer";
import useSWR from 'swr';
import LoadingThreeDotsPulse from "../../components/Loading";



const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const fetcher = ([query, params]) => {
  // Check if we have cached data
  const cacheKey = `sanity:${query}:${JSON.stringify(params)}`;
  const cached = sessionStorage.getItem(cacheKey);
  
  if (cached) {
    const parsed = JSON.parse(cached);
    // Return cached data immediately
    return Promise.resolve(parsed);
  }

  // Fetch fresh data and cache it
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
  const navigate = useNavigate(); // Initialize the navigate function
  // const [post, setPost] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);


  const { data: post, error, isLoading } = useSWR(
    [POST_QUERY, { slug }], // Query + parameters
    fetcher,                // Sanity client fetcher
    {
      refreshInterval: 10000,
      revalidateOnMount: true,       // Always check for updates
      revalidateOnFocus: false,      // No refetch on tab focus
      shouldRetryOnError: false,     // No automatic retries
      dedupingInterval: 10000,       // Avoid duplicate requests for 10s
      loadingTimeout: 2000 
    }
  );

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const data = await client.fetch(POST_QUERY, { slug });
  //       setPost(data);
  //     } catch (error) {
  //       console.error("Error fetching post:", error);
  //     }
  //   };
  //   fetchPost();
  // }, [slug]);


  if (isLoading) return (<Flex justifyContent="center" alignItems="center" height="80vh" mb={'10vh'} direction={'column'} gap={4}>
    {/* <Spinner speed='0.65s' thickness='3px' /> */}
    {/* <Text textAlign={'center'} fontSize={{sm: 'md',md:'xl'}}>Φόρτωση του άρθρου...</Text>  */}
    <LoadingThreeDotsPulse />
    </Flex>);

document.title = `${post.title} - Open Source UoM`;

  // Use the image URL builder to create the image URL with width and height
  const postImageUrl = post.image
  ? urlFor(post.image)
      .width(800)  
      .fit('max')  
      .auto('format') 
      .url()
  : null;

  return (
    <Box maxWidth="3xl" mx="auto" p={4} minHeight="100vh" >
      
        <Text fontSize="lg" onClick={()=>navigate('/blog')} cursor={'pointer'} _hover={{color:'brand.dark.secondary'}}width={'fit-content'} userSelect={'none'} mb={4}>
        <IoIosArrowRoundBack size={40}/> Πίσω στο Blog
        </Text>

    
        <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={6}>
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
    w={"50%"}
    h="auto"
    mx="auto"
    
    css={{
      aspectRatio: 'auto 16/9', // Default aspect ratio
      objectFit: 'contain'
    }}
  />
)}

      

      <Text fontSize="md" color="gray.500" mb={6} userSelect={'none'}>
        Δημοσιεύθηκε: {new Date(post.publishedAt).toLocaleDateString('en-GB')}
        <br />
        {post.author && (
        <Text fontSize={{base:'sm', md: 'md' }} >Από {post.author}</Text>
      )}
      </Text>
      

      <Box className="prose" mb={8} borderRadius={8}
              bg="rgba(0, 10, 38, 0.45)"
              backdropFilter="blur(6px)"
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.5)"
              border="1px solid rgba(255, 255, 255, 0.13)" p={{sm:4, md:8}}
              textAlign={'left'}
              >
              
        {/* Assuming post.body is a rich text field from Sanity */}
        {/* {Array.isArray(post.body) && post.body.map((block, index) => (
          <Text key={index}>{block.children[0].text}</Text>
        ))} */}
<Box fontSize={{base:'sm', md: 'lg' }} >
        <RichTextRenderer content={post.body} />
      </Box>

      </Box>
      {post.tag &&(
        <HStack spacing={2} mb={4} userSelect={'none'}>
          <Text fontSize='md' >Ετικέτες:</Text>
      <Box bg={'brand.dark.secondary'} width={"fit-content"} p={1} borderRadius={8}>{post.tag}</Box>
      </HStack>
      )}
    </Box>
  );
};

export default PostPage;
