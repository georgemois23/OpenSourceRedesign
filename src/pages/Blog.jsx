import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, SimpleGrid, Text, Image,HStack ,Flex,Wrap,WrapItem,Skeleton,SkeletonText,SkeletonCircle, Input, Divider, VStack, Button, Center} from '@chakra-ui/react';
import { client } from '../sanity/client';
import imageUrlBuilder from '@sanity/image-url'; 
import { FaUser,FaCalendarAlt  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; 
import { Spinner } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';

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

 const [searchTerm, setSearchTerm] = React.useState("");

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
    post.body
        .filter(b => b._type === "block" && Array.isArray(b.children))
        .flatMap(b => b.children.map(c => c.text))
        .join(" ").toLowerCase().includes(searchTerm.toLowerCase().trim())
        || post.author?.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const renderPosts = (postArray) => (
  <Wrap spacing={8} justify="center" mx="auto" width={{ base: '100%', md: '90%', lg: '100%' }}>
    {postArray.map((post) => {
      const postImageUrl = post.image
        ? urlFor(post.image).width(800).fit('max').auto('format').url()
        : null;

      return (
        <WrapItem
          key={post._id}
          width={{ sm: '100%', sm2: '75%', md: '45%', lg: '30%' }}
          minW="200px"
          display="flex"
          justifyContent="center"
          onClick={() => navigate(`/blog/${post.slug.current}`)}
          cursor="pointer"
        >
          <Box
            borderWidth={1}
            p={4}
            h="fit-content"
            width={{ base: '100%', md: '90%', lg: '95%' }}
            borderRadius={8}
            bg="rgba(0, 10, 38, 0.95)"
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.6)"
            border="1px solid rgba(255, 255, 255, 0.13)"
            _hover={{ transform: 'translateY(-5px)', boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)' }}
            transition="all 0.3s ease"
            flexDirection="column"
          >
            {postImageUrl && (
              <Image
                draggable={false}
                loading="eager"
                src={postImageUrl}
                alt={post.title}
                objectFit="cover"
                borderRadius={8}
                mb={4}
                height="auto"
                width={{ base: '100%', lg: '100%' }}
                transform="scale(0.9)"
                marginInline={{ base: 'none', lg: 'auto' }}
              />
            )}

            <Heading as="h3" size="md" mb={4}>
              {post.title}
            </Heading>

            <Text>
              {Array.isArray(post.body) && (
                <Text onClick={(e) => e.stopPropagation()} cursor="auto">
                  {post.body
                    .filter((b) => b._type === 'block' && Array.isArray(b.children))
                    .flatMap((b) => b.children.map((c) => c.text))
                    .join(' ')
                    .split(' ')
                    .slice(0, 30)
                    .join(' ') + '…'}
                </Text>
              )}
            </Text>

            <Text
              mb={2}
              color="brand.dark.secondary"
              onClick={() => navigate(`/blog/${post.slug.current}`)}
              cursor="pointer"
              userSelect="none"
            >
              Περισσότερα »
            </Text>

            <Flex justifyContent="space-between" alignItems="center" mt="auto" width="full" gap={4} flexWrap="wrap">
              <HStack spacing={2} flexShrink={0}>
                <FaCalendarAlt size={18} />
                <Text fontSize={{ base: 'sm', md: 'md' }} userSelect="none">
                  {new Date(post.publishedAt).toLocaleDateString('en-GB')}
                </Text>
              </HStack>
              {post.author && (
                <HStack spacing={2} flexShrink={0}>
                  <FaUser size={18} />
                  <Text fontSize={{ base: 'sm', md: 'md' }} userSelect="none">
                    {post.author}
                  </Text>
                </HStack>
              )}
            </Flex>
          </Box>
        </WrapItem>
      );
    })}
  </Wrap>
);


  return (
    <Box minH={'100vh'} px={4} py={8} mb={'10vh'} >
      <Heading as="h1" ml={4}  fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }} mb={8} userSelect={'none'} >
        Blog
      </Heading>

      
       <Box display="flex" justifyContent="flex-end">
            <Input
              type="text"
              placeholder="Αναζήτηση άρθρου..."
              width={{ base: '100%', md: '50%', lg: '30%' }}
              mb={6}
              mr={{ base: 0, md: 4 }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>
              </Box>


     {isLoading ? (
  renderSkeletons()
) : searchTerm.trim() !== '' ? (
  filteredPosts.length === 0 ? (
    <Box>
      <VStack spacing={6} align="center" mt={"15vh"} mb={'15vh'}>
  <SearchIcon boxSize={6} color="gray.400" />
  <Text textAlign="center" fontSize="xl" color="gray.400" mb={8}>
    Δε βρέθηκαν άρθρα με αυτόν τον τίτλο ή περιεχόμενο.
  </Text>
</VStack>
        <Divider my={8} width={{base: '85%',md:'70%'}} mx={'auto'} mb={20} />
        <Text textAlign="center" fontSize="lg" color="gray.200" mb={8}>
        Δείτε περισσότερα άρθρα
        </Text>
        {renderPosts(posts.slice(0, 3))}
        <Center>
          <Button mt={12} onClick={() => setSearchTerm('')}>Δείτε όλα τα  άρθρα</Button>
        </Center>

  </Box>
  ) : (
    renderPosts(filteredPosts)
  )
) : (
  renderPosts(posts)
)}
</Box>
)};