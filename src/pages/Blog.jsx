import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, SimpleGrid, Text, Image,HStack ,Flex,Wrap,WrapItem} from '@chakra-ui/react';
import { client } from '../sanity/client'; // Sanity client
import imageUrlBuilder from '@sanity/image-url'; // Import the image URL builder
import { FaUser,FaCalendarAlt  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; 
import { Spinner } from '@chakra-ui/react'

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, 
image {
    asset->{
      _id,
      url
    }
  },author,body}`;

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

export default function BlogList() {
  document.title = "Blog - Open Source UoM";
  const [posts, setPosts] = useState([]);
  const [textteaser, setText] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    client.fetch(POSTS_QUERY).then(setPosts).catch((err) => console.error(err));
  }, []);

if (!posts ) return (<Flex justifyContent="center" alignItems="center" height="100vh" direction={'column'} gap={4}>
    <Spinner speed='0.65s' thickness='3px' />
    <Text textAlign={'center'} fontSize={{sm: 'xl',md:'3xl'}}>Φόρτωση...</Text> </Flex>);

  return (
    <Box minH={'100vh'} px={4} py={8} >
      <Heading as="h1" size="2xl" mb={8} userSelect={'none'} >
        Blog
      </Heading>
      {/* <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}> */}
      <Wrap spacing={8} justify="center" align="center" marginInline={'auto'} width={{ base: '100%', md: '90%', lg: '100%' }}> 
        {posts.map((post) => {
          console.log(post);
          const postImageUrl = post.image
  ? urlFor(post.image)
      .width(800)  
      .fit('max')  
      .auto('format') 
      .url()
  : null;

          return (
            <WrapItem key={post._id} width={{ base: '100%', md: '45%', lg: '30%' }} marginInline={'auto'}>
            <Box
              key={post._id}
              borderWidth={1}
              p={4}
              h={'fit-content'}
              width={{ base: '90%', md: '90%', lg: '100%' }}
              marginInline={'left'}
              borderRadius={8}
              bg="rgba(0, 10, 38, 0.85)"
              backdropFilter="blur(6px)"
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.5)"
              border="1px solid rgba(255, 255, 255, 0.13)"
              // bg="linear-gradient(135deg, rgba(0, 10, 38, 0.6), rgba(25, 35, 55, 0.8))" // New color gradient (deep blue to darker blue)
              // backdropFilter="blur(4px)" // Blur effect to match
              // boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)" // Lighter shadow for a subtle effect
              // border="1px solid rgba(255, 255, 255, 0.09)"



              flexDirection="column"
              
              
              // onClick={()=> navigate(`/blog/${post.slug.current}`)} cursor={'pointer'}
              
            >
               

              {/* Render image if available */}
              {postImageUrl && (
                <Image
                draggable={false}
                loading='eager'
                  src={postImageUrl}
                  alt={post.title}
                  objectFit="cover"
                  borderRadius={8}
                  mb={4}
                  height="auto"
                  width="80%"
                />
              ) }

            <Heading as="h2" size="lg" mb={4} >
                  {post.title}
                </Heading>
              <Text >
              {Array.isArray(post.body) && (
  <Text>
    {
      post.body
        .filter(b => b._type === "block" && Array.isArray(b.children))
        .flatMap(b => b.children.map(c => c.text))
        .join(" ")
        .split(" ")
        .slice(0, 30)
        .join(" ") + "…"
    }
  </Text>
)}
                        </Text>
                        <Text mb={2} color={'brand.dark.secondary'} onClick={()=> navigate(`/blog/${post.slug.current}`)} cursor={'pointer'} userSelect={'none'} >Περισσότερα »</Text>
                        <Flex 
  justifyContent="space-between" 
  alignItems="center" 
  marginTop="auto"
  width="full"  // Ensure it takes full width
  gap={4}       // Add gap between items
  flexWrap="wrap" // Allow wrapping on small screens
>
  <HStack spacing={2} flexShrink={0}>  {/* Prevent shrinking */}
    <FaCalendarAlt size={18} />
    <Text fontSize={{base: 'sm', md: 'md'}} userSelect={'none'}>
      {new Date(post.publishedAt).toLocaleDateString("en-GB")}
    </Text>
  </HStack>
  
  {post.author && (
    <HStack spacing={2} flexShrink={0}>  {/* Prevent shrinking */}
      <FaUser size={18} />
      <Text fontSize={{base: 'sm', md: 'md'}} userSelect={'none'}>
        {post.author}
      </Text>
    </HStack>
  )}
</Flex>
              </Box>
            </WrapItem>
          );
        })}
      {/* </SimpleGrid> */}
      </Wrap>
    </Box>
  );
}
