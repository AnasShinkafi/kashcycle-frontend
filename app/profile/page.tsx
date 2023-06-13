"use client"
import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Image, Input, useColorModeValue } from "@chakra-ui/react";

export default function SignUp() {
  return (
    <>
       <Flex pt={5} align="center" justify="center" minHeight="100vh" bg="white">
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
          Complete Your Profile
        </Heading>

        <form>
          <FormControl mb={4}>
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="First Name" />
          </FormControl>

          <FormControl mb={4}>
             <FormLabel>Username</FormLabel>
             <Input type="text" placeholder="@kashcycle" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Date of Birth</FormLabel>
            <Input type="text" placeholder="01/01/1994" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>BVN Number</FormLabel>
            <Input type="email" placeholder="2048558475" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>KYC</FormLabel>
            <Input type="email" placeholder="GP2075" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Account Number</FormLabel>
            <Input type="email" placeholder="2048558475" />
          </FormControl>

          <Center>
            <Button colorScheme="teal" textColor='white' width="70%" mb={4}>
              Sign Up
            </Button>
          </Center>

        </form>
      </Box>
    </Flex>
    </>
  )
}

