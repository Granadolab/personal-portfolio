import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    useColorModeValue

  } from '@chakra-ui/react';
import { PhoneIcon, ExternalLinkIcon, EmailIcon } from '@chakra-ui/icons';

export const DataContact = () => {
    return (
        <Container>
              <Heading padding={2}>
                <Text align='center'>
                Datos de contacto
                </Text>
              </Heading>
             <Box mb={4}>
                <Box p={{ base:'4px'}} display="flex"  alignItems="baseline"> 
                    <EmailIcon/>  <Text color={useColorModeValue('gray.600', 'gray.400')}  fontSize="2xl">Correo:  granadobryan1@gmail.com</Text>
                  </Box>

                  <Box p={{ base:'4px'}} display="flex" alignItems="baseline"> 
                    <ExternalLinkIcon/>  <Text  color={useColorModeValue('gray.600', 'gray.400')}  fontSize="2xl"> Blog: dev.to/granadolab</Text>
                  </Box>

                  <Box p={{ base:'4px'}} display="flex" alignItems="baseline"> 
                    <PhoneIcon/>  <Text  color={useColorModeValue('gray.600', 'gray.400')} fontSize="2xl" > Tel: +584143032778</Text>
                  </Box>
             </Box>

        </Container>
    )
}
