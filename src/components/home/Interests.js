import React from 'react';
import {
    Box,
    Heading,
    Text,

  } from '@chakra-ui/react';
import { InterestItem } from './InterestItem';
import surf from '../images/surf.png';
import gym from '../images/gym.png';
import learn from '../images/learn.png';
import travel from '../images/travel.png';


export const Interests = () => {




    return(  
     
       
      <Box>
         <Heading>
            <Text align='center' mb={4}>
              Intereses
            </Text>
          </Heading>
          <InterestItem
            widthItem='md'
            heightItem='md'
            title='Playa'
            alignTextitem='left'
            bgImage={surf}
            />
           <Box display='flex'>
              <InterestItem
              title='Viajar'
              alignTextitem='left'
              bgImage={travel}
              widthItem='sm'
              heightItem='sm'
              />
              <InterestItem
              title='Correr'
              alignTextitem='right'
              bgImage={gym}
              widthItem='sm'
              heightItem='sm'
              />
           </Box>

            <InterestItem
            title='Aprender'
            alignTextitem='left'
            widthItem='md'
            heightItem='md'
            bgImage={learn}
            />
      </Box>
      

    
    )
}






