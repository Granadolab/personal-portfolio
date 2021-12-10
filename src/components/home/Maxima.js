import React from 'react'
import {
    Box,
    Image,
    Text,
    Container,
    VStack,
    useColorModeValue,
    Spacer

  } from '@chakra-ui/react';
  import code from '../images/code_typing.gif';

export const Maxima = () => {
    return (
        
      <VStack spacing='15px'>
        <Box padding={8} >
            <Text as="i" fontSize={50} color="gray.500" align='center'>
                "No hago las cosas creyendo a medias. Sé que al hacerlo así solo puedo esperar resultados mediocres"
            </Text>
            <Spacer/>
            <Text  as="i" fontSize={25} color="gray.500" align='center'>
                Michael Jordan
            </Text>
        </Box>
        <Box 
        padding={2}
        borderRadius={5}
        bg={useColorModeValue('gray.100', 'gray.700')}
        >
        <Container>
                <Image
                borderRadius='xl'
                borderBlockEndWidth={6}
                src={code}
                />
        </Container>
        </Box>
    </VStack>
     
    )
}
