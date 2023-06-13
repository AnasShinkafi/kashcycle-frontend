"use client"
import { Box, Center, Flex, Image, Heading, useColorModeValue, Text, FormControl, FormLabel, Input, Button  } from '@chakra-ui/react'
import React from 'react'

export default function page() {
  return (
    <>
      <Flex align="center" justify="center" minHeight="100vh" bg="white">
      <Box
        bg={useColorModeValue('teal.50', 'teal.500')}
        p={8}
        borderRadius="md"
        boxShadow="md"
        width={{ base: "90%", sm: "80%", md: "40%" }}
      >
        <Center mb={4}>
           <Image w={40} h={20} src='/images/logo.png' />
         </Center>
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          OTP Verification
        </Heading>
        <Text textAlign='center' >We will send you one-time password to this mobile number</Text>
        <form>
          <FormControl mb={4} justifyContent='center' alignItems='center'>
            <FormLabel textAlign='center'>Enter your Phone number</FormLabel>
            <Input textAlign='center' type="text" color='white' placeholder="+2348038780968"></Input>
          </FormControl>
          <Center>
          <Button colorScheme="teal" width="80%" mb={4}>
            Get OTP
          </Button>
          </Center>
        </form>
      </Box>
    </Flex>
    </>
  )
}
