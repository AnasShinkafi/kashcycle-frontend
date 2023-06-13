import { Text, Center, Heading, Image, Button, SimpleGrid, Box } from '@chakra-ui/react'
import React from 'react'

export default function Testimonial() {
  return (
    <>
      <Box>
        <Heading textAlign='center' mt={4} fontSize={{ base:'24px', md:'34px'}}>Safety First, Safety Always</Heading>
        </Box>
      <SimpleGrid ml={40} mr={40} mt={4} columns={{ base: 1, sm: 1, md:1, lg:2 }} spacing={4} justifyItems='center'>
        <Box p={4} height="100%" width={{ base:'300px', md:'600px'}} >
        <Image src='/images/undraw_security_on_re_e491 1.png' w={{ base:'300px', md:'500px'}} />
        </Box>
        <Box p={4} height="100%" width={{ base:"300px", md:'600px'}}>
        <Heading textAlign='center' fontSize={{ base:'20px', md:'28px'}} mt={0}>Your security is our priority</Heading>
        <Text px={15} textAlign='center' fontSize={{base:'18px', md:'26px'}}>Lorem ipsum dolor sit amet consectetur. Libero tempus semper tempus amet. Pellentesque amet gravida nisl est non porttitor purus. Tellus enim morbi suscipit sapien quis vel. 
        </Text>
        </Box>
      </SimpleGrid>
      <Box>
        <Heading textAlign='center' mt={4} fontSize={{ base:'24px', md:'34px'}}>READY TO JOIN OUR COMMUNITY</Heading>
        </Box>
      <SimpleGrid ml={40} mr={40} mt={4} columns={{ base: 1, sm: 1, md: 1, lg:2, }} spacing={4} justifyItems='center'>
        <Box p={4} height="100%" width={{ base:"300px", md:'600px'}}>
        <Center>
          <Button as='a' href='/' fontSize={25} bg='teal' color='white'>Started For Free</Button>
        </Center>
        <Text px={15} textAlign='center' fontSize={{base:'18px', md:'26px'}}>Lorem ipsum dolor sit amet consectetur. Libero tempus semper tempus amet. Pellentesque amet gravida nisl est non porttitor purus. Tellus enim morbi suscipit sapien quis vel. 
        </Text>
        </Box>
        <Box p={4} height="100%" width={{ base:'300px', md:'600px'}} >
        <Image src='/images/undraw_community_re_cyrm 1.png' w={{ base:'300px', md:'500px'}} />
        </Box>
      </SimpleGrid>
    </>
  )
}
