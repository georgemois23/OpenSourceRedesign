import React, { useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import YouTube from 'react-youtube';
import LoadingThreeDotsPulse from './Loading';

const ResponsiveYouTube = ({ videoId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleReady = (event) => {
    setIsLoading(false);
  };

  const handleError = (error) => {
    setIsLoading(false);
    setHasError(true);
    console.error('YouTube Player Error:', error);
  };

  return (
    <Box 
      position="relative" 
      width="100%" 
      maxWidth="100vw" 
      paddingTop="56.25%" 
      overflow="hidden"
    >
      <Box 
        position="absolute" 
        top="0" 
        left="0" 
        width="100%" 
        height="100%"
      >
        {isLoading && (
          <Center width="100%" height="100%" borderRadius="md">
            <LoadingThreeDotsPulse />
          </Center>
        )}
        
        {hasError ? (
          <Center width="100%" height="100%" borderRadius="md">
            <Box textAlign="center" p={4}>
              Δυστυχώς δεν είναι δυνατή η αναπαραγωγή του βίντεο. Προσπαθήστε ξανά αργότερα.
            </Box>
          </Center>
        ) : (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            width="100%"
            height="100%"
            transform="translate(-50%, -50%)"
          >
            <YouTube 
              videoId={videoId} 
              opts={opts} 
              onReady={handleReady} 
              onError={handleError}
              style={{ 
                display: isLoading ? 'none' : 'block',
                width: '100%',
                height: '100%'
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ResponsiveYouTube;