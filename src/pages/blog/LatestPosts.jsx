import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Image, HStack, Flex, Wrap, WrapItem, Spinner,Button } from '@chakra-ui/react';
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { client } from '../../sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

const LATEST_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3]{
  _id, 
  title, 
  slug, 
  publishedAt,
  image {
    asset->{
      _id,
      url
    }
  },
  author,
  body
}`;

export const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const CACHE_KEY = 'latest-posts';
    const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(`${CACHE_KEY}-time`);

    // Use cache if it exists and isn't expired
    if (cached && cachedTime && Date.now() - parseInt(cachedTime) < CACHE_DURATION) {
      setPosts(JSON.parse(cached));
      setIsLoading(false);
    }

    // Always fetch fresh data
    client.fetch(LATEST_POSTS_QUERY)
      .then(data => {
        setPosts(data);
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(`${CACHE_KEY}-time`, Date.now().toString());
      })
      .catch(err => {
        console.error("Error fetching posts:", err);
        if (cached) setPosts(JSON.parse(cached)); // Fallback to cache if available
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <Flex justify="center" gap={8} py={8}>
        {[...Array(3)].map((_, i) => (
          <Box 
            key={i} 
            width={{ base: '90%', md: '45%', lg: '30%' }}
            borderWidth={1}
            p={4}
            borderRadius={8}
            bg="rgba(0, 10, 38, 0.85)"
            border="1px solid rgba(255, 255, 255, 0.13)"
          >
            <Spinner size="xl" />
          </Box>
        ))}
      </Flex>
    );
  }

  return (
    <Box py={8} px={4}>
      <Heading as="h2" size="xl" mb={8} textAlign="center">Τελευταία Νέα</Heading>
      <Wrap spacing={8} justify="center">
        {posts.map(post => {
          const excerpt = post.body
            ?.filter(b => b._type === "block")
            ?.flatMap(b => b.children.map(c => c.text))
            ?.join(" ").split(" ").slice(0, 20).join(" ") + "…";
            
          return (
            <WrapItem 
              key={post._id}
              width={{ base: '100%', md: '45%', lg: '30%' }}
              onClick={() => navigate(`/blog/${post.slug.current}`)}
              cursor="pointer"
              userSelect={'none'}
              
            >
              <Box
                borderWidth={1}
                p={4}
                width="100%"
                borderRadius={8}
                bg="rgba(0, 10, 38, 0.85)"
                backdropFilter="blur(6px)"
                boxShadow="0 8px 32px rgba(0, 0, 0, 0.5)"
                border="1px solid rgba(255, 255, 255, 0.13)"
                _hover={{ 
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)'
                }}
                transition="all 0.3s ease"
              >
                {post.image && (
                  <Image
                    src={urlFor(post.image).width(800).url()}
                    alt={post.title}
                    borderRadius="md"
                    mb={4}
                    width="100%"
                    height="auto"
                    objectFit="cover"
                  />
                )}
                <Heading as="h3" size="lg" mb={3}>{post.title}</Heading>
                <Text mb={4} color="gray.300">{excerpt}</Text>
                <Flex justify="space-between" color="brand.dark.secondary">
                  <HStack spacing={2}>
                    <FaCalendarAlt />
                    <Text>{new Date(post.publishedAt).toLocaleDateString("en-GB")}</Text>
                  </HStack>
                  {post.author && (
                    <HStack spacing={2}>
                      <FaUser />
                      <Text>{post.author}</Text>
                    </HStack>
                  )}
                </Flex>
              </Box>
            </WrapItem>
          );
        })}
      </Wrap>
      <Text textAlign={'center'}>
      <Button marginInline={'auto'} textAlign={'center'} my={6} onClick={() => navigate('/blog')} >Περισσότερα στο Blog</Button>
      </Text>
    </Box>
  );
};