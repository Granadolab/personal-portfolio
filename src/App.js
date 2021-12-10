import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Container,
  useColorModeValue,
  Spacer
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Home } from './components/home/Home';
import { SocialIcon } from 'react-social-icons';


 const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box display="flex"  justifyContent="right" spacing="24px" p={4}>
      <SocialIcon  url="https://linkedin.com/in/bryangranado" />
      <SocialIcon fgColor={useColorModeValue('white', 'gray.500')} bgColor={useColorModeValue('black', 'white')} url="https://github.com/granadolab" />
      <SocialIcon network="twitter" url="https://twitter.com/in/"/>
      <Spacer/>
        <ColorModeSwitcher justifySelf="flex-end"/>
      </Box>
      <Container  maxW="container.xl">
            <Home/>
      </Container>
    </ChakraProvider>
  );
}

export default App;
