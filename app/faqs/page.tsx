"use client"
import { Box, Button, Divider, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { PlusSquareIcon, SearchIcon } from '@chakra-ui/icons'


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
          <Heading as='h3' color='black' textAlign='center' pt={{base:3, md:6}}>FAQs</Heading>
          </Box>
            <Box textAlign='center' bg='teal' mx={{base:6, md:10}} rounded={40} h={'max-content'} pb={{ base:5, md:10}} mt={{ bse:6, md:10}}>
                <Heading pt={5} fontSize={{base:20, md:32}}>Frequently Asked Questions</Heading>
                <Text fontSize={{ bas:18, md:23}} mt={2}>Have questions, We are here to help</Text>
                <Box pt={8} mx={{ base:10, md:80}}>
                <InputGroup  >
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon textColor='white' as={SearchIcon} ml={4} />}
                  />
                  <Input type="text" focusBorderColor='white' fontSize={20} _placeholder={{ opacity: 1, color: 'white' }} color='white' placeholder="Search..."  />
                </InputGroup>
                </Box>
                <Box mx={{ base:7, md:80}} fontSize={{ base:16, md:20}}>
                <Box mt={4}>
                    <Flex justify='space-between'>
                        <Text>Can I change my paln later</Text>
                        <PlusSquareIcon as='a' href='/'/>
                    </Flex>
                    <Divider />
                </Box>
                <Box mt={4}>
                    <Flex justify='space-between'>
                        <Text>How can I know my collegue</Text>
                        <PlusSquareIcon as='a' href='/'/>
                    </Flex>
                    <Divider />
                </Box>
                <Box mt={4}>
                    <Flex justify='space-between'>
                        <Text>How do I change my account email</Text>
                        <PlusSquareIcon as='a' href='/'/>
                    </Flex>
                    <Divider />
                </Box>
                <Box mt={4}>
                    <Flex justify='space-between'>
                        <Text>Can I change my paln later</Text>
                        <PlusSquareIcon as='a' href='/'/>
                    </Flex>
                    <Divider />
                </Box>
                <Box mt={4}>
                    <Flex justify='space-between'>
                        <Text>Can I change my paln later</Text>
                        <PlusSquareIcon as='a' href='/'/>
                    </Flex>
                    <Divider />
                </Box>
                <Box mt={4}>
                    <Flex justify='space-between'>
                        <Text>Can I change my paln later</Text>
                        <PlusSquareIcon as='a' href='/' />
                    </Flex>
                    <Divider />
                </Box>
                
                <Box mt={4}>
                    <Flex justify='space-between'>
                        <Text>Can I change my paln later</Text>
                        <PlusSquareIcon />
                    </Flex>
                </Box>
                <Box mt={4}>
                    <Flex justify='space-between'>
                        <Text>Can I change my paln later</Text>
                        <PlusSquareIcon />
                    </Flex>
                </Box>
                </Box>
            </Box>
            <Box pt={10}>
              <Footer />
            </Box>
        </Box>
        
      </Box>
    </>
  )
}
