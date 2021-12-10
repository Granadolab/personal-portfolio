import { Box, Stack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { InterestItem } from './InterestItem'
import javascript from '../images/javascript.png';
import laravel from '../images/laravel.png';
import php from '../images/php.jpg';
import node from '../images/nodejs.jpg';
import react from '../images/react.png';
import sql from '../images/mysql.png';
import mongo from '../images/mongodb.png';


export const Skills = () => {

    return (

        <Box 
        borderRadius={5}
        bg={useColorModeValue('gray.100', 'gray.700')}
        >
            <Stack direction={["column", "row"]} spacing="12px">
                <Box display='flex' mt={4}>
                        <InterestItem
                        title='Laravel'
                        widthItem='sm'
                        heightItem='sm'
                        alignTextitem='left'
                        sizeHeadFont='md'
                        bgImage={laravel}
                        radius='full'
                        />
                        <InterestItem
                        title='PHP'
                        widthItem='lg'
                        heightItem='lg'
                        radius='full'
                        bgImage={php}
                        
                        />
                </Box>
                <Box>
                        <InterestItem
                        title='javascript'
                        widthItem='100%'
                        heightItem='md'
                        alignTextitem='center'
                        bgImage={javascript}
                        radius='full'
                        />
                </Box>
                    <Box display='flex'>
                        <Box>
                            <InterestItem
                            title='SQL'
                            widthItem='sm'
                            heightItem='sm'
                            alignTextitem='center'
                            radius='full'
                            bgImage={sql}
                        
                            />
                        
                        
                        </Box>
                        
                        <InterestItem
                            title='Node.js'
                            widthItem='md'
                            alignTextitem='center'
                            sizeHeadFont='lg'
                            bgImage={node}
                            radius='full'
                            />

                            <InterestItem
                            title='NoSQL'
                            widthItem='sm'
                            heightItem='sm'
                            sizeHeadFont='md'
                            alignTextitem='center'
                            bgImage={mongo}
                            radius='full'
                            />
                            
                    </Box>
                    <Box >
                        <InterestItem
                        title='React.js'
                        widthItem='100%'
                        heightItem='sm'
                        padd='2'
                        bgImage={react}
                        radius='full'
                        
                        />
                    </Box>
                </Stack>

        </Box>


    )
}
