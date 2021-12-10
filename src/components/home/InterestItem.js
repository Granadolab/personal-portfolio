import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const InterestItem = ({alignTextitem='center', headFont = 'h2', sizeHeadFont='xl', widthItem='lg',heightItem='lg', bgImage="https://via.placeholder.com/700x300", bgGradient='', title='title', padd="2", marg = '2', radius = ''}) => {


   
    return (
    
        <Box maxW={widthItem} maxH={heightItem}  p={padd} borderRadius="lg" overflow="hidden"  >
           <Heading as={headFont} size={sizeHeadFont}>
             
               <Text textAlign={alignTextitem} >
                    {title}
               </Text>
            </Heading>
                <Image
                    borderRadius={radius}
                    // htmlHeight={widthItem}
                    htmlWidth="100%"
                    padding={4}
                    // objectFit="cover"
                    src={bgImage}
                    fallbackSrc={bgImage}
                    alt="Segun Adebayo"
                />
        </Box>
       
      
    )
}


