import React from 'react'
import {
    Box,
    Image,
    Text,
    Link,
    Container

  } from '@chakra-ui/react';

  import bryan from '../images/bryan.jpg';


  
export const Header = () => {
    return (
        <Container maxW="7xl" centerContent>
            <Box p={6}  mb={6}>
                <Box  align='center'>
                    <Image
                        borderRadius="full"
                        boxSize={{xl:"300px", base:'200px'}}
                        src={bryan}
                        alt="Segun Adebayo"
                        />
                </Box>
            
                <Text
                m={2}
                align='center'
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="2xl"
                letterSpacing="wide"
                color="gray.500"
                >
                BRYAN GRANADO
                </Text>
                <Link
                mt={1}
                align='center'
                display="block"
                fontSize="xl"
                lineHeight="normal"
                fontWeight="semibold"
                href="#"
                >
                DESARROLLADOR WEB FULLSTACK
                </Link>

                  
                <Box mt={4}>
                    <Text as="i" textAlign='center' color="gray.500" fontSize="lg">
                        Mi nombre es Bryan Granado, soy desarrollador de software full-stack, especializado en diversas tecnologías.
                    Me considero una persona honrada, trabajadora, y comprometida con su trabajo; Soy bueno trabajando bajo presión
                    y en distintos ambientes y entornos, asi como también aplicando metodologías de desarrollo ágil, como lo es SCRUM. Soy un completo autodidacta,me gusta innovarme siempre
                    lo cual es un factor de aporte a cada una de las organizaciones a las que he trabajado, ya que me permite adaptarme
                    a sus necesidades y requerimientos.
                    </Text>
                </Box>
            </Box>
        </Container>
    )
}
