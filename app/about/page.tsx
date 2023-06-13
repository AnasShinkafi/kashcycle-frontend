"use client"
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function page() {
  return (
    <>
      <Box w='100%' bg='gray.300' h={'max-content'} >
        <Navbar />
        <Box w='100%' bg='white' color='black' pt={3} mt={3} h={'max-height'} roundedTop={40} pb={10}>
            <Heading as='h3' textAlign='center' pt={6}>About Us</Heading>
            <Text mx={12} fontSize={{ base:20, md:28 }}>Welcome to our Adashe! We are a team of dedicated individuals who are passionate about making it easy for people to donate to their favorite causes. Our app allows users to easily find and donate to charitable organizations, as well as track their contributions over time. We believe that even small contributions can make a big impact, and we are committed to making the donation process as seamless as possible. Thank you for choosing our app and for supporting the causes that matter to you. Together, we can make a difference! Welcome to our Adashe! We are a team of dedicated individuals who are passionate about making it easy for people to donate to their favorite causes. Our app allows users to easily find and donate to charitable organizations, as well as track their contributions over time. We believe that even small contributions can make a big impact, and we are committed to making the donation process as seamless as possible. Thank you for choosing our app and for supporting the causes that matter to you. Together, we can make a difference!  </Text>
            <Box ml={{ base:10, md:20}} w={{base:'80%', md:'90%'}} mt={4}>
              <Image src='/images/Rectangle 50.png' w='100%' />
            </Box>
            <Box textAlign='center'>
              <Heading mt={4}>OUR MISSION</Heading>
              <Text fontSize={20} fontWeight='semibold'>Ease way contributing <br />Modernized the system</Text>
              <Text fontSize={18}>Help people raise fund to run their business</Text>
            </Box>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  )
}
