import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Image, Link, Flex,UnorderedList,OrderedList, List,ListItem, HStack } from "@chakra-ui/react";
import { client } from "../../sanity/client"; // assuming the client is set up correctly
import { useParams } from "react-router-dom"; // for getting the slug from the URL
import imageUrlBuilder from "@sanity/image-url"; // Import the image URL builder
import { useNavigate } from "react-router-dom"; // for navigation
import { IoIosArrowRoundBack } from "react-icons/io";
import { Spinner } from '@chakra-ui/react'

import { RichTextRenderer } from "../../sanity/RichTextRenderer";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const builder = imageUrlBuilder(client); // Create the builder using the Sanity client
const urlFor = (source) => builder.image(source); // Use the builder to create the image URL

const PostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate(); // Initialize the navigate function
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.fetch(POST_QUERY, { slug });
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [slug]);

  if (!post ) return (<Flex justifyContent="center" alignItems="center" height="100vh" direction={'column'} gap={4}>
    <Spinner speed='0.65s' thickness='3px' />
    <Text textAlign={'center'} fontSize={{sm: 'xl',md:'3xl'}}>Φόρτωση του άρθρου...</Text> </Flex>);

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
      
        <Text fontSize="lg" onClick={()=>navigate('/blog')} cursor={'pointer'}  mb={4}>
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
    w={"80%"}
    h="auto"
    mx="auto"
    css={{
      aspectRatio: 'auto 16/9', // Default aspect ratio
      objectFit: 'contain'
    }}
  />
)}

      

      <Text fontSize="md" color="gray.500" mb={6}>
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
        <HStack spacing={2} mb={4}>
          <Text fontSize='md'>Ετικέτες:</Text>
      <Box bg={'brand.dark.secondary'} width={"fit-content"} p={1} borderRadius={8}>{post.tag}</Box>
      </HStack>
      )}
    </Box>
  );
};

export default PostPage;
