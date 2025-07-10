import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, SimpleGrid, Text, Image,HStack ,Flex,Wrap,WrapItem,Skeleton,SkeletonText,SkeletonCircle} from '@chakra-ui/react';
import { client } from '../sanity/client';
import imageUrlBuilder from '@sanity/image-url'; 
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
  const [isLoading, setIsLoading] = useState(true);
  const [lastFetchTime, setLastFetchTime] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {

  const CACHE_DURATION = 1 * 60 * 1000;
  const cachedData = localStorage.getItem('blogPosts');
    const cachedTime = localStorage.getItem('blogPostsTime');

    if (cachedData && cachedTime && Date.now() - parseInt(cachedTime) < CACHE_DURATION) {
      setPosts(JSON.parse(cachedData));
      setIsLoading(false);
      return; 
    }

    
    client.fetch(POSTS_QUERY)
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
        // Save to cache
        localStorage.setItem('blogPosts', JSON.stringify(data));
        localStorage.setItem('blogPostsTime', Date.now().toString());
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        if (cachedData) {
          setPosts(JSON.parse(cachedData));
        }
      });
  }, []);
  
  const renderSkeletons = () => (
    <Wrap spacing={8} justify="center" align="center" marginInline={'auto'} width={{ base: '100%', md: '90%', lg: '100%' }}>
      {[...Array(6)].map((_, i) => (
        <WrapItem key={i} width={{ base: '100%', md: '45%', lg: '30%' }} marginInline={'auto'}>
          <Box
            marginInline={'auto'}
            borderWidth={1}
            p={4}
            width={{ base: '90%', md: '90%', lg: '100%' }}
            borderRadius={8}
            bg="rgba(0, 10, 38, 0.85)"
            border="1px solid rgba(255, 255, 255, 0.13)"
          >
            <Skeleton height="200px" borderRadius={8} mb={4} />
            
            <Skeleton height="30px" mb={4} />
            
            <SkeletonText noOfLines={3} spacing="3" mb={4} />
            
            <Skeleton height="20px" width="100px" mb={4} />
            
            <Flex justifyContent="space-between" alignItems="center">
              <HStack spacing={2}>
                <SkeletonCircle size="18px" /> {/* Calendar Icon */}
                <Skeleton height="20px" width="80px" /> {/* Date */}
              </HStack>
              
              <HStack spacing={2}>
                <SkeletonCircle size="18px" /> {/* User Icon */}
                <Skeleton height="20px" width="60px" /> {/* Author */}
              </HStack>
            </Flex>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );

// if (!posts ) return (<Flex justifyContent="center" alignItems="center" height="100vh" direction={'column'} gap={4}>
//     <Spinner speed='0.65s' thickness='3px' />
//     <Text textAlign={'center'} fontSize={{sm: 'xl',md:'3xl'}}>Φόρτωση...</Text> </Flex>);

  return (
    <Box minH={'100vh'} px={4} py={8} mb={'10vh'} >
      <Heading as="h1" ml={4}  fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }} mb={8} userSelect={'none'} >
        Blog
      </Heading>
      {/* <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}> */}


      {isLoading ? (
        renderSkeletons()
      ) : (
      <Wrap spacing={8} justify="center"  mx={'auto'} width={{ base: '100%', md: '90%', lg: '100%' }} > 
        {posts.map((post) => {
          const postImageUrl = post.image
  ? urlFor(post.image)
      .width(800)  
      .fit('max')  
      .auto('format') 
      .url()
  : null;

          return (
            <WrapItem key={post._id} width={{ sm: '100%',sm2: '75%', md: '45%', lg: '30%' }} minW={'200px'} display="flex"
            justifyContent="center" 
            onClick={()=> navigate(`/blog/${post.slug.current}`)} cursor={'pointer'}
            // mb={'10vh'}
            // marginInline={'auto'}
            >
            <Box
              key={post._id}
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


              flexDirection="column"
              
              
              // onClick={()=> navigate(`/blog/${post.slug.current}`)} cursor={'pointer'}
              
            >
               

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
                  width={{base:"100%", lg:"100%"}}
                  transform={'scale(0.9)'}
                  marginInline={{base: 'none', lg: 'auto'}}
                  onClick={()=> navigate(`/blog/${post.slug.current}`)} cursor={'pointer'}
                />
              ) }

            <Heading as="h3" size="md" mb={4} >
                  {post.title}
                </Heading>
              <Text >
              {Array.isArray(post.body) && (
  <Text onClick={(e) => e.stopPropagation()} cursor={'auto'}>
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
  width="full"  
  gap={4}      
  flexWrap="wrap" 
>
  <HStack spacing={2} flexShrink={0}> 
    <FaCalendarAlt size={18} />
    <Text fontSize={{base: 'sm', md: 'md'}} userSelect={'none'}>
      {new Date(post.publishedAt).toLocaleDateString("en-GB")}
    </Text>
  </HStack>
  
  {post.author && (
    <HStack spacing={2} flexShrink={0}> 
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
      </Wrap>)}
    </Box>
  );
}
