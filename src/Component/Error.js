import React from 'react'
import { useHistory, useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Center,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  

const Error = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/')
      };

    const bgColor = useColorModeValue('gray.50', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    
    <>
     <Box bg={bgColor} h="100vh">
      <Center h="100%">
        <Box textAlign="center">
          <Heading size="2xl" mb={6} color={textColor}>
            404 Error: Page Not Found
          </Heading>
          <Text fontSize="xl" mb={6} color={textColor}>
            Sorry, the page you are looking for does not exist.
          </Text>
          <Button onClick={handleGoBack} colorScheme="blue">
            Go Back
          </Button>
        </Box>
      </Center>
    </Box>
    </>
  )
}

export default Error