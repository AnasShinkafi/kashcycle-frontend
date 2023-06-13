"use client"
import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CheckIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons'


export default function page() {
  const [input, setInput] = useState('')

  const handleInputChange = (e: any) => setInput(e.target.value)

  const isError = input === ''
  return (
    <>
      <Box w='100%' bg='gray.300' h={'max-content'} >
        <Navbar />
        <Box w='100%' bg='white' pt={3} mt={3} h={'max-height'} rounded={40}>
          <Box>
          <Heading as='h3' color='black' textAlign='center' pt={6}>Contact Us</Heading>
          </Box>
            <Box bg='teal' mx={{base:6, md:10}} rounded={40} h={'max-content'} pb={10} mt={10}>
            <Flex
              direction={['column', 'column', 'row', 'row']} // Set flex direction to column on mobile and row on desktop
              align="center"
              justify="center"
              pt={10}
            >
              <Box
                w={['100%', '100%', '50%', '50%']} // Set width to 100% on mobile and 50% on desktop
                textAlign='center'
                h="200px"
                mb={['4', '4', '0', '0']} // Add bottom margin on mobile only
              >
                <Heading>Contact Us</Heading>
                < Text fontSize={{ base: 18, md:26}}>contact for your inquire here now</Text>
                <Text fontSize={{ base: 18, md:26}}> <PhoneIcon /> +234 8038780968</Text>
                <Text fontSize={{ base: 18, md:26}}> <EmailIcon /> hello@kashcycle.com</Text>
                <Text fontSize={{ base: 18, md:26}}> Abuja, Nigeria </Text>
              </Box>
              <Box
                bg=""
                w={['100%', '100%', '50%', '50%']} // Set width to 100% on mobile and 50% on desktop
                h="max-content"
                mx={20}
                alignItems='center'
              >
                 <Box mx={6}>
                  <FormControl mb={4} isRequired>
                      <FormLabel>Your Name</FormLabel>
                      <InputGroup>
                        <Input placeholder="Enter Your Name" type={ 'text'} />
                      </InputGroup>
                    </FormControl>

                    <FormControl mb={4} isRequired>
                      <FormLabel>Enter Your Email Address</FormLabel>
                      <InputGroup>
                        <Input placeholder="Enter Your Email Address" type={'text'} />
                      </InputGroup>
                    </FormControl>

                    <FormControl mb={4} isRequired>
                      <FormLabel>Message</FormLabel>
                      <InputGroup>
                        <Input placeholder="Enter Your Message" type={'text'} />
                      </InputGroup>
                    </FormControl>

                    <Button colorScheme="teal" width="60%" mb={4}>
                      Send Message
                    </Button>
                </Box>
              </Box>
            </Flex>
            </Box>
            <Box pt={10}>
              <Footer />
            </Box>
        </Box>
        
      </Box>
    </>
  )
}
