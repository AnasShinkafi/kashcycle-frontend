
"use client"
import { CheckIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Image, Input, InputGroup, InputRightElement, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";


export default function SignIn() {
  const [ showPassword, setShowPassword ] = useState(false)
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
          Sign In
        </Heading>

        <form>
        <FormControl mb={4} isRequired>
            <FormLabel>Phone number</FormLabel>
            <InputGroup>
              <Input placeholder="Phone number" type={showPassword ? 'text' : 'password'} />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <CheckIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl mb={4} isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input placeholder="Confirm Password" type={showPassword ? 'text' : 'password'} />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button colorScheme="teal" width="100%" mb={4}>
            Sign In
          </Button>

          <Text textAlign={'center'} mt={5}>Do not have an account, <Link href={'/signup'}> Sign up</Link></Text>

        </form>
      </Box>
    </Flex>
    </>
  )
}

