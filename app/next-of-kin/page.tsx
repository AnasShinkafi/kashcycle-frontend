"use client"
import { Box, Button, Center, FormControl, FormLabel, Heading, Image, Input, Text, useColorModeValue } from "@chakra-ui/react";

export default function page() {
  return (
    <>
       <Box align="center" justify="center" 
       pt={20}
       mt={5}
       minHeight="100vh" bg="white">
      <Center
         bg={useColorModeValue('white', 'teal.500')}
        borderRadius="lg"
        boxShadow="lg"
        width={{ base: "90%", sm: "80%", md: "40%" }}
      >
        <form> <Heading as="h2" size="lg" color={'teal'} mb={6} mt={4} textAlign="center">
          My next o Kin
        </Heading>
        <Text textAlign='center' >Enter your next of kin details below</Text>
          <FormControl mb={4}>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" placeholder="Full Name" />
          </FormControl>

          <FormControl mb={4}>
             <FormLabel>Your relationship</FormLabel>
             <Input type="text" placeholder="Brother" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="anasisahskf@gmail.com" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input type="text" placeholder="08038780968" />
          </FormControl>

          <Center>
            <Button as='a' href='/' colorScheme="teal" textColor='white' width="60%" mb={4}>
              Update Next of Kin
            </Button>
          </Center>

        </form>
      </Center>
    </Box>
    </>
  )
}

