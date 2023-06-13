"use client"
import React from 'react'
import DashNavbar from '../components/DashNavbar'
import { Box, Image, Text, SimpleGrid, Center, Button, } from '@chakra-ui/react'

export default function page() {
  return (
   <>
    <DashNavbar />
    <SimpleGrid columns={{ base: 2, sm: 2, md: 3 }} gap={2}  justifyItems='center' mt={-4} roundedTop={56} mx={{ base:'20px', md: '80px'}}bg='white'>
      <Box bg="white" boxShadow="md"borderRadius="md"
        p={4} height="100%" width={{base:"100%", md:'60%'}} alignItems="center">
        <Center mb={2}>
          <Image src="/images/Vector.png" alt="Image 1"
            boxSize={8} mr={0}/>
        </Center>
        <Text fontWeight="bold" textAlign='center' mt={3}>Daily</Text>
        <Text mt={2} textAlign='left'>This is daily contribution of any amount <br/> <strong>No Limitation</strong></Text>
        <Center mt={3}>
          <Button colorScheme='teal' as='a' href='/'>Join</Button>
        </Center>
      </Box>

      <Box bg="white" boxShadow="md"borderRadius="md"
        p={4} height="100%"width={{base:"100%", md:'60%'}} alignItems="center">
        <Center mb={2}>
          <Image src="/images/Vector.png" alt="Image 1"
            boxSize={8} mr={2}/>
        </Center>
        <Text fontWeight="bold" textAlign='center' mt={3}>5K Weekly</Text>
        <Text mt={2} textAlign='left'>This is weekly contribution of <strong>5K</strong> fro <strong>6month</strong></Text>
        <Text><strong>30 People</strong>slots</Text>
        <Text><strong>18 People</strong>taken</Text>
        <Text><strong>30 People</strong>remaining</Text>
        <Center mt={3}>
          <Button colorScheme='teal' as='a' href='/'>Join</Button>
        </Center>
      </Box>

      <Box bg="white" boxShadow="md"borderRadius="md"
        p={4} height="100%" width={{base:"100%", md:'60%'}} alignItems="center">
        <Center mb={2}>
          <Image src="/images/Vector.png" alt="Image 1"
            boxSize={8} mr={2}/>
        </Center>
        <Text fontWeight="bold" textAlign='center' mt={3}>10K Weekly</Text>
        <Text mt={2} textAlign='left'>This is weekly contribution of <strong>5K</strong> fro <strong>12month</strong></Text>
        <Text><strong>12 People</strong>slots</Text>
        <Text><strong>8 People</strong>taken</Text>
        <Text><strong>4 People</strong>remaining</Text>
        <Center mt={3}>
          <Button colorScheme='teal' as='a' href='/'>Join</Button>
        </Center>
      </Box>

      <Box bg="white" boxShadow="md"borderRadius="md"
        p={4} height="100%" width={{base:"100%", md:'60%'}} alignItems="center">
        <Center mb={2}>
          <Image src="/images/Vector.png" alt="Image 1"
            boxSize={8} mr={2}/>
        </Center>
        <Text fontWeight="bold" textAlign='center' mt={3}>5K Montly</Text>
        <Text mt={2} textAlign='left'>This is weekly contribution of <strong>5K</strong> fro <strong>12month</strong></Text>
        <Text><strong>12 People</strong>slots</Text>
        <Text><strong>8 People</strong>taken</Text>
        <Text><strong>4 People</strong>remaining</Text>
        <Center mt={3}>
          <Button colorScheme='teal' as='a' href='/'>Join</Button>
        </Center>
      </Box>

      <Box bg="white" boxShadow="md"borderRadius="md"
        p={4} height="100%" width={{base:"100%", md:'60%'}} alignItems="center">
        <Center mb={2}>
          <Image src="/images/Vector.png" alt="Image 1"
            boxSize={8} mr={2}/>
        </Center>
        <Text fontWeight="bold" textAlign='center' mt={3}>5K Montly</Text>
        <Text mt={2} textAlign='left'>This is weekly contribution of <strong>5K</strong> fro <strong>12month</strong></Text>
        <Text><strong>12 People</strong>slots</Text>
        <Text><strong>8 People</strong>taken</Text>
        <Text><strong>4 People</strong>remaining</Text>
        <Center mt={3}>
          <Button colorScheme='teal' as='a' href='/'>Join</Button>
        </Center>
      </Box>

      <Box bg="white" boxShadow="md"borderRadius="md"
        p={4} height="100%" width={{base:"100%", md:'60%'}}alignItems="center">
        <Center mb={2}>
          <Image src="/images/Vector.png" alt="Image 1"
            boxSize={8} mr={2}/>
        </Center>
        <Text fontWeight="bold" textAlign='center' mt={3}>5K Montly</Text>
        <Text mt={2} textAlign='left'>This is weekly contribution of <strong>5K</strong> fro <strong>12month</strong></Text>
        <Text><strong>12 People</strong>slots</Text>
        <Text><strong>8 People</strong>taken</Text>
        <Text><strong>4 People</strong>remaining</Text>
        <Center mt={3}>
          <Button colorScheme='teal' as='a' href='/'>Join</Button>
        </Center>
      </Box>

      <Box bg="white" boxShadow="md"borderRadius="md"
        p={4} height="100%" width={{base:"100%", md:'60%'}}alignItems="center">
        <Center mb={2}>
          <Image src="/images/Vector.png" alt="Image 1"
            boxSize={8} mr={2}/>
        </Center>
        <Text fontWeight="bold" textAlign='center' mt={3}>5K Montly</Text>
        <Text mt={2} textAlign='left'>This is weekly contribution of <strong>5K</strong> fro <strong>12month</strong></Text>
        <Text><strong>12 People</strong>slots</Text>
        <Text><strong>8 People</strong>taken</Text>
        <Text><strong>4 People</strong>remaining</Text>
        <Center mt={3}>
          <Button colorScheme='teal' as='a' href='/'>Join</Button>
        </Center>
      </Box>

      <Box bg="white" boxShadow="md"borderRadius="md"
        p={4} height="100%" width={{base:"100%", md:'60%'}}alignItems="center">
        <Center mb={2}>
          <Image src="/images/Vector.png" alt="Image 1"
            boxSize={8} mr={2}/>
        </Center>
        <Text fontWeight="bold" textAlign='center' mt={3}>5K Montly</Text>
        <Text mt={2} textAlign='left'>This is weekly contribution of <strong>5K</strong> fro <strong>12month</strong></Text>
        <Text><strong>12 People</strong>slots</Text>
        <Text><strong>8 People</strong>taken</Text>
        <Text><strong>4 People</strong>remaining</Text>
        <Center mt={3}>
          <Button colorScheme='teal' as='a' href='/'>Join</Button>
        </Center>
      </Box>

      <Box bg="white" boxShadow="md"borderRadius="md"
        p={4} height="100%"width={{base:"100%", md:'60%'}} alignItems="center">
        <Center mb={2}>
          <Image src="/images/Vector.png" alt="Image 1"
            boxSize={8} mr={2}/>
        </Center>
        <Text fontWeight="bold" textAlign='center' mt={3}>5K Montly</Text>
        <Text mt={2} textAlign='left'>This is weekly contribution of <strong>5K</strong> fro <strong>12month</strong></Text>
        <Text><strong>12 People</strong>slots</Text>
        <Text><strong>8 People</strong>taken</Text>
        <Text><strong>4 People</strong>remaining</Text>
        <Center mt={3}>
          <Button colorScheme='teal' as='a' href='/'>Join</Button>
        </Center>
      </Box>
    </SimpleGrid>
   </>
  )
}
