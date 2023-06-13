"use client"
import { Box, Center, Flex, Image, Heading, useColorModeValue, Text, FormControl, FormLabel, Input, Button  } from '@chakra-ui/react'
import Link from 'next/link'
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
        <Text textAlign='center' >Enter the OTP send to +2348038780968</Text>
        <form>
          <FormControl mb={4} justifyContent='center' alignItems='center'>
            <Input textAlign='center' fontSize={30} h={20} type="text" color='white' placeholder="3 4 8 0"></Input>
          </FormControl>
          <Text textAlign={'center'} my={3}>I didn't recieve the OTP? <Link href={'/'}>Resend OT</Link></Text>
         <Center>
         <Button colorScheme="teal" width="80%" mb={4}>
            Verify
          </Button>
         </Center>
        </form>
      </Box>
    </Flex>
    </>
  )
}
