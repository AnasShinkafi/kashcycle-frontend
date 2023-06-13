"use client"
import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Icon, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'

export default function page() {
  return (
    <>
        <Box w='100%' bg='teal.900' h={215} rounded={40}>
          <Box w='100%' bg='teal.500' textAlign='center' color='white' h={200} roundedBottom={40}>
            <Heading as='h1' fontSize={{ base:22, md:34}} pt={10}>Transaction</Heading>
            <Text fontSize={{ base:14, md:18}} mt={8}>Your Total Transaction</Text>
            <Text fontSize={{ base:18, md:24}} mt={1}>#1,000,000</Text>
          </Box>
        </Box>
        <Box w='100%' bg='white' pt={3} mt={3} h={'max-height'} roundedTop={40}>
            <Box bg='teal' mx={10} roundedTop={40} h={'max-content'} pb={10} mt={10}>
            <Box pt={8} mx={20}>
                <InputGroup >
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon textColor='white' as={SearchIcon} ml={4} />}
                  />
                  <Input type="text" focusBorderColor='white' fontSize={20} _placeholder={{ opacity: 1, color: 'white' }} color='white' placeholder="Search..."  />
                </InputGroup>
                </Box>
                <Box>
              <Flex justify='center' alignItems='center' gap={{ base:2, md:80}}>
                <Flex>
                <Box boxSize={{base:10, md:14}} mt={3} textAlign='center' bg='white' fontSize={18} borderRadius={50}>
                  <Text mt={3} fontSize={{ base:12, md:20}}>5K</Text>
                </Box>
                  <Text mt={4} ml={{ base:1, md:2}} fontSize={{ base:12, md:18}}><strong >5K Weekly Contribution</strong> <br />20 Dec 2022, 8:20 Am </Text>
                </Flex> 
                <Text mt={{ bse:8, md:6}}>#5000 <ChevronRightIcon /> </Text> 
              </Flex>
              <Flex justify='center' alignItems='center' gap={{ base:2, md:80}}>
                <Flex>
                <Box boxSize={{base:10, md:14}} mt={3} textAlign='center' bg='white' fontSize={18} borderRadius={50}>
                  <Text mt={3} fontSize={{ base:12, md:20}}>5K</Text>
                </Box>
                  <Text mt={4} ml={{ base:1, md:2}} fontSize={{ base:12, md:18}}><strong >5K Weekly Contribution</strong> <br />20 Dec 2022, 8:20 Am </Text>
                </Flex> 
                <Text mt={{ bse:8, md:6}}>#5000 <ChevronRightIcon /> </Text> 
              </Flex>
              <Flex justify='center' alignItems='center' gap={{ base:2, md:80}}>
                <Flex>
                <Box boxSize={{base:10, md:14}} mt={3} textAlign='center' bg='white' fontSize={18} borderRadius={50}>
                  <Text mt={3} fontSize={{ base:12, md:20}}>5K</Text>
                </Box>
                  <Text mt={4} ml={{ base:1, md:2}} fontSize={{ base:12, md:18}}><strong >5K Weekly Contribution</strong> <br />20 Dec 2022, 8:20 Am </Text>
                </Flex> 
                <Text mt={{ bse:8, md:6}}>#5000 <ChevronRightIcon /> </Text> 
              </Flex>
              <Flex justify='center' alignItems='center' gap={{ base:2, md:80}}>
                <Flex>
                <Box boxSize={{base:10, md:14}} mt={3} textAlign='center' bg='white' fontSize={18} borderRadius={50}>
                  <Text mt={3} fontSize={{ base:12, md:20}}>5K</Text>
                </Box>
                  <Text mt={4} ml={{ base:1, md:2}} fontSize={{ base:12, md:18}}><strong >5K Weekly Contribution</strong> <br />20 Dec 2022, 8:20 Am </Text>
                </Flex> 
                <Text mt={{ bse:8, md:6}}>#5000 <ChevronRightIcon /> </Text> 
              </Flex>
              <Flex justify='center' alignItems='center' gap={{ base:2, md:80}}>
                <Flex>
                <Box boxSize={{base:10, md:14}} mt={3} textAlign='center' bg='white' fontSize={18} borderRadius={50}>
                  <Text mt={3} fontSize={{ base:12, md:20}}>5K</Text>
                </Box>
                  <Text mt={4} ml={{ base:1, md:2}} fontSize={{ base:12, md:18}}><strong >5K Weekly Contribution</strong> <br />20 Dec 2022, 8:20 Am </Text>
                </Flex> 
                <Text mt={{ bse:8, md:6}}>#5000 <ChevronRightIcon /> </Text> 
              </Flex>
              <Flex justify='center' alignItems='center' gap={{ base:2, md:80}}>
                <Flex>
                <Box boxSize={{base:10, md:14}} mt={3} textAlign='center' bg='white' fontSize={18} borderRadius={50}>
                  <Text mt={3} fontSize={{ base:12, md:20}}>5K</Text>
                </Box>
                  <Text mt={4} ml={{ base:1, md:2}} fontSize={{ base:12, md:18}}><strong >5K Weekly Contribution</strong> <br />20 Dec 2022, 8:20 Am </Text>
                </Flex> 
                <Text mt={{ bse:8, md:6}}>#5000 <ChevronRightIcon /> </Text> 
              </Flex>
              
            </Box>
            </Box>
        </Box >
        <Box pt={10}>
          <Footer />
        </Box>
    </>
  )
}
