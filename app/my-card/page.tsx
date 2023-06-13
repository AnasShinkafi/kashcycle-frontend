"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Image, Input, Text, useColorModeValue } from "@chakra-ui/react";

export default function page() {
  return (
    <>
       <Flex align="center" justify="center" minHeight="100vh" bg="white">
      <Box
         bg={useColorModeValue('white', 'teal.500')}
        borderRadius="lg"
        boxShadow="lg"
        width={{ base: "90%", sm: "80%", md: "40%" }}
        alignContent='center'
      >
        <Heading as="h2" size="lg" color={'teal'} mb={6} textAlign="center">
          Manage your card
        </Heading>
        <Text textAlign='center'>Security manage all you debit here</Text>
        <Text textAlign='center' mb={4}>Top to see more debits</Text>
        <Center mb={4}>
          <ChevronLeftIcon />
           <Image w={40} h={20} src='/images/ATM Card.png' height={145} width={255}  />
           <ChevronRightIcon />
         </Center>
          <Center>
            <Button as='a' href='/' colorScheme="teal" textColor='white' width="50%" mb={4}>
              Update profile
            </Button>
          </Center>
      </Box>
    </Flex>
    </>
  )
}

