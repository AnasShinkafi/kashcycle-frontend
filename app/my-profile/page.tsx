"use client"
import { Button, Center, FormControl, FormLabel, Heading, Image, Input, useColorModeValue, Box } from "@chakra-ui/react";

export default function page() {
  return (
    <>
       <Box align="center" justify="center" minHeight="100vh" bg="white">
      <Center
         bg={useColorModeValue('white', 'teal.500')}
        borderRadius="lg"
        boxShadow="lg"
        width={{ base: "90%", sm: "80%", md: "40%" }}
      >
        <form>
          <Heading as="h2" size="lg" color={'teal'} mb={6} textAlign="center">
          Basic Bio
        </Heading>
        <Center mb={4}>
           <Image w={40} h={20} src='/images/Anas1.jpg' height={45} width={45} rounded='50%' />
         </Center>
          <FormControl mb={4}>
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="Anas" />
          </FormControl>

          <FormControl mb={4}>
             <FormLabel>Last Name</FormLabel>
             <Input type="text" placeholder="Isah" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Email Address</FormLabel>
            <Input type="text" placeholder="anasisahskf@gmail.com" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input type="email" placeholder="08038780968" />
          </FormControl>

          <Center>
            <Button as='a' href='/' colorScheme="teal" textColor='white' width="70%" mb={4}>
              Update profile
            </Button>
          </Center>

        </form>
      </Center>
    </Box>
    </>
  )
}

