import React, {useState} from 'react'
import {
    Box,
    Stack,
    Text,
    useColorModeValue,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Drawer,
    Image

  } from '@chakra-ui/react';
  
import { Header } from './Header';
import { Projects } from './Projects';
// import { JobExperience } from './JobExperience';
import TestimonialReference from './TestimonialReference';
import { DataContact } from './DataContact';
import { Interests } from './Interests';
import { Skills } from './Skills';
import { Maxima } from './Maxima';
import kairos from  '../../logos/kairos.png';
import keeva from  '../../logos/keevashop_black_horiz.png';
import milah from  '../../logos/milah.png';
import salud from  '../../logos/salud.png';
import m5c from  '../../logos/m5c.png';

const cards = [
    {
      title: 'Mundo Milah',
      place:'top',
      tecno:'Vuejs, Jquery, Laravel, Bootstrap',
      text:
        "El proyecto mundomilah es basicamente una plataforma ecommerce multinivel, la cual permite a traves de su robusto marketplace que cualquier usuario puedo acceder a productos y servicios, en incluso ser socio participante activo de la plataforma a traves de sus suscripción estandard.",
      imageUrl:`${milah}`,
    },
    {
      title: 'Keeva shop',
      place:'left',
      tecno:'Vuejs, Jquery, Laravel, Bootstrap',
      text:
        "Keevashop es un marketplace que permite a sus usuarios genrar sus propios ingresos, a traves de un mostrador de vendedor, al cual cualquier usuario con ganas de emprender puede optar de manera gratuita. Keevashop esta diseñado para medianos y pequeños comerciantes, que no cuentan con presencia en la web. Impulsando a que estos puedan tener movilidad de sus negocios en internet.",
        imageUrl:`${keeva}`,
    },
    {
      title: 'Kairos Club',
      place:'right',
      tecno:'Laravel blade, Jquery, Laravel, Bootstrap',
      text:
        "Kairos club es una plataforma de enseñanza en linea, diseñada con el objetivo de enseñar sobre el cuidado de nuestro cuerpo y mente, cuenata con una gran variedad de profesionales capaces de guiarte en procesos de sanación, autoevaluacion, meditación, sana alimentación. Posee clases en vivo, y procesos guiados que permiten una excelente interacción entre usuario y profesor. ",
        imageUrl:`${kairos}`,
    },
    {
      title: '5c',
      place:'bottom',
      tecno:'React, Laravel, Bootstrap',
      text:
        "5c, es el proyecto tecnologico multipropósito, que tiene como punto fuerte y principal objetivo generar ganancias a sus usuarios, a traves de venta de productos, adquisición de puntos, reparto de productos, formacion en linea, y sistema de referidos. Cuenta con una gran maniobrabilidad en la estrategia comercial, y el marketing",
        imageUrl:`${m5c}`,
    },

    {
      title: 'Salud en casa',
      tecno:'Vuejs, Jquery, Laravel, Materialize',
      text:
        "Salud en casa, es la plataforma online de personas para personas, ya que permite que cualquier usuario que quiera aportar enseñanazas de cualquier tipo(matematicas, albañileria, coser zapatos), entre otros, pueda ser accesibles para quienes pertenezcan a la plataforma. Su punto fuerte es la enseñanza del dia a dia, la imaginacion de los estudiantes y de los que opten por crear su contenido, no tiene limites.",
        imageUrl:`${salud}`,
    },
  ];


export const Home = () => {

    
    const [size, setSize] = useState("lg");
    const [dataInfo, setDataInfo] = useState({

        title:'',
        description:'',
        imageUrl:'',
        place:'right',
       

    })
    
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize,title, description, imageUrl, place, tecno,) => {
     
        setDataInfo({
            title,
            description,
            imageUrl,
            place,
            tecno
        });
        setSize(newSize)
        onOpen()
    }
  

    return (

        <Box width={{ xl: "100%" }} p={4}>
           
            <Header/>

                <Box display={{ xl: "flex" }}>
                    <DataContact/>
                    <Projects/>
                </Box>

                <Box display={{ xl: "flex" }}>
                   
                    <Box width={{ xl: "40%" }}>
                    <Interests/>               
                    </Box>

                    <Box width={{ xl: "60%" }}>
                    <Maxima/>   

                    <Box padding={8}>
                        <Text as="i" fontSize={26} color="gray.500" align='center'>
                           Entre mis proyectos mas actuales se encuentran:
                        </Text>
                    </Box>
            
                    <Stack 
                     display={{md:'flex'}}
                     direction={{ base: 'column', md: 'row' }}
                     spacing={{ base: 10, md: 4, lg: 10 }}
                    >
                        {
                            cards.map((card, index)=>(

                                <Box key={index} p={2} >
                                    <Image
                                        
                                        onClick={() => handleClick(size,card.title, card.text,card.imageUrl,card.place, card.tecno)}
                                        borderRadius="full"
                                        boxSize='100px'
                                        style={{'cursor':'pointer'}}
                                        src={card.imageUrl}
                                        alt="Imagen de proyecto"
                                        />
                                    <Text textAlign={'center'}  >{card.title}</Text>
                                </Box>
                            ))
                        }
                    </Stack>
                   
                    <Drawer placement={dataInfo.place} onClose={onClose} isOpen={isOpen} size={size}>
                            <DrawerOverlay />
                            <DrawerContent>
                            <DrawerHeader>
                              <Text fontSize={40} color={useColorModeValue('gray.800', 'gray.400')} >
                              {dataInfo.title}
                              </Text>
                            </DrawerHeader>
                            <DrawerBody>
                            <Box display={{ xl: "flex" }}>
                              <Image
                                padding={4}
                                boxSize='400px'
                                borderRadius="2xl"
                                src={dataInfo.imageUrl}
                                alt="Imagen de proyecto"
                                />
                               <Box>
                                  <Text  fontSize={20} color={useColorModeValue('gray.800', 'gray.400')} align='left'>
                                    {dataInfo.description}
                                  </Text>
                                    <br />
                                    <Text>
                                      Tecnologias utilizadas:
                                    </Text>
                                    <Text as="i" fontSize={16} color="gray.500" >
                                      {dataInfo.tecno}
                                    </Text>
                               </Box>
                              </Box>
                            
                               
                            </DrawerBody>
                            </DrawerContent>
                    </Drawer>
                    </Box>
                   
                </Box>

                <Box m={6} display={{ xl: "flex" }}>
                    <Skills/>
                </Box>

                <TestimonialReference/>     
              
                
        </Box>
    )
}
