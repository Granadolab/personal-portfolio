import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    AccordionIcon,
    AccordionButton,
    Box,
    Heading,
    VisuallyHidden,
    useColorModeValue
  } from '@chakra-ui/react';

export const JobExperience = () => {

  
    
    return(
        <div>
      <Box>
        <Heading>Experiencia laboral</Heading>
        <VisuallyHidden>This will be hidden</VisuallyHidden>
      </Box>
        <Accordion allowMultiple p="10">
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    MUJER LILA S. DE R.L DE C.V
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color={useColorModeValue('gray.600', 'gray.400')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    OLW JUMPTSTAR LLC
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color={useColorModeValue('gray.600', 'gray.400')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    FREELANCER
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color={useColorModeValue('gray.600', 'gray.400')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
         </Accordion>
        </div>
    )

}

