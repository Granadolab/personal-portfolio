import React, {useState} from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container
  } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';



const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


export const Projects = () => {
   
 
  const [slider, setSlider] = useState(null)

//  const  handlerDrawer = (e) => {
//     console.log(e);
//  }

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Enfoque',
      text:
        "El amor a lo que hago resalta en mi esa facultad para mantener la concentracíon.",
      image:
        'https://media.istockphoto.com/photos/business-lady-counting-incoming-of-her-enterprice-picture-id1151012847?b=1&k=20&m=1151012847&s=170667a&w=0&h=t9CL-Ik6wz1ZEdhgrZCfq25-l43qWsPIoZM_Whh6Xyo=',
    },
    {
      title: 'Compromiso',
      text:
        "Cada paso en el proceso es un aporte que hacemos, para mejorar cada día más a la sociedad.",
      image:
        'https://media.istockphoto.com/photos/lawyer-pointing-to-the-form-signing-of-the-contract-agreement-picture-id1272631388?b=1&k=20&m=1272631388&s=170667a&w=0&h=_7o64m_Lr9I6rzAwwbhrG6lqT8gqpnaVJcOF0aXtscU=',
    },
    {
      title: 'Disciplina',
      text:
        "No es hacer las cosas cuando tenga ganas. Es, aún sin ganas hacer las cosas.",
      image:
        'https://images.unsplash.com/photo-1529566193698-bc394165d541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzY2lwbGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Motivación',
      text:
        "Es inspirador ver, personas que llegan al exito haciendo lo que aman. Me visualizo a diario en lo que quiero, siguiendo los mejores ejemplos.",
      image:
        'https://media.istockphoto.com/photos/young-man-in-the-city-reaching-his-goals-picture-id1264156957?b=1&k=20&m=1264156957&s=170667a&w=0&h=zszn6M6nsLNMnwmamMfK5EkKHc28A5-pJDZsze7hwmo=',
    },

    {
      title: 'Retos',
      text:
        "La rutina común no es lo mio. Intento generar mis propios obstaculos que me permitan ser progresar poco a poco, cada día.",
      image:
        'https://images.unsplash.com/photo-1633158834806-766387547d2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWxsZW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

    return (
    
        <Box
        position={'relative'}
        height={'600px'}
        width={'full'}
        overflow={'hidden'}
        borderRadius="xl"
        >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider  {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={'6xl'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}>
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
              {/* <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    Productos realizados
              </Heading> */}
                <Stack
                  spacing={6}
                  w={'full'}
                  maxW={'lg'}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)">
                  <Heading color="white" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    {card.title}
                    
                  </Heading>
                  
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
              
            </Box>
          ))}
        </Slider>
      </Box>

    )
}
