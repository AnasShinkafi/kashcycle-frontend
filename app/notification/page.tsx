"use client"
import React from 'react'
import DashNavbar from '../components/DashNavbar'
import { Box, Card, Flex, Icon, Image, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'

import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons'
export default function page() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
        <DashNavbar />
        <Box mx={8} roundedTop={30} mt={-10} alignItems='center' bg='white' h={500}>
            <Text color='black' textAlign='center' fontSize={{ base:'18px', md:'34px'}} ml={9} pt={3}>Notification</Text>
            <Card w={{ base:'290px', md:'90%'}} mx={{base:4, md:20}} h={'max-content'} pb={8} gap={0} bg='gray.300'>
                <Box>
                <InputGroup mt={4} px={4}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon textColor='teal' as={SearchIcon} ml={4} />}
                  />
                  <Input type="text" fontSize={20}  placeholder="Search..."  />
                </InputGroup>
                </Box>
                  <Flex gap={4} mt={4} mx={{base:2, md:30}}>
                  <Image ml={{ base: 2, md:6}}
                      borderRadius='full'
                      boxSize={{ base:'50px', md:'50px'}}
                      src='/images/Anas4.JPG'
                      alt='Dan Abramov'
                    /> 
                    <Box>
                    <Text fontSize={20}>Anas Isah</Text>
                    <Text mt={-2} as='p'>message</Text>
                    </Box>
                    <ChevronRightIcon ml={{ base:10, md: 800}} fontSize={30} mt={3}/>
                  </Flex>
                  <Flex gap={4} mt={4} mx={{base:2, md:30}}>
                  <Image ml={{ base: 2, md:6}}
                      borderRadius='full'
                      boxSize={{ base:'50px', md:'50px'}}
                      src='/images/Anas4.JPG'
                      alt='Dan Abramov'
                    /> 
                    <Box>
                    <Text fontSize={20}>Anas Isah</Text>
                    <Text mt={-2} as='p'>message</Text>
                    </Box>
                    <ChevronRightIcon ml={{ base:10, md: 800}} fontSize={30} mt={3}/>
                  </Flex>
                  <Flex gap={4} mt={4} mx={{base:2, md:30}}>
                  <Image ml={{ base: 2, md:6}}
                      borderRadius='full'
                      boxSize={{ base:'50px', md:'50px'}}
                      src='/images/Anas4.JPG'
                      alt='Dan Abramov'
                    /> 
                    <Box>
                    <Text fontSize={20}>Anas Isah</Text>
                    <Text mt={-2} as='p'>message</Text>
                    </Box>
                    <ChevronRightIcon ml={{ base:10, md: 800}} fontSize={30} mt={3}/>
                  </Flex>
                  <Flex gap={4} mt={4} mx={{base:2, md:30}}>
                  <Image ml={{ base: 2, md:6}}
                      borderRadius='full'
                      boxSize={{ base:'50px', md:'50px'}}
                      src='/images/Anas4.JPG'
                      alt='Dan Abramov'
                    /> 
                    <Box>
                    <Text fontSize={20}>Anas Isah</Text>
                    <Text mt={-2} as='p'>message</Text>
                    </Box>
                    <ChevronRightIcon ml={{ base:10, md: 800}} fontSize={30} mt={3}/>
                  </Flex>
                  <Flex gap={4} mt={4} mx={{base:2, md:30}}>
                  <Image ml={{ base: 2, md:6}}
                      borderRadius='full'
                      boxSize={{ base:'50px', md:'50px'}}
                      src='/images/Anas4.JPG'
                      alt='Dan Abramov'
                    /> 
                    <Box>
                    <Text fontSize={20}>Anas Isah</Text>
                    <Text mt={-2} as='p'>message</Text>
                    </Box>
                    <ChevronRightIcon ml={{ base:10, md: 800}} fontSize={30} mt={3}/>
                  </Flex>
                  <Flex gap={4} mt={4} mx={{base:2, md:30}}>
                  <Image ml={{ base: 2, md:6}}
                      borderRadius='full'
                      boxSize={{ base:'50px', md:'50px'}}
                      src='/images/Anas4.JPG'
                      alt='Dan Abramov'
                    /> 
                    <Box>
                    <Text fontSize={20}>Anas Isah</Text>
                    <Text mt={-2} as='p'>message</Text>
                    </Box>
                    <ChevronRightIcon ml={{ base:10, md: 800}} fontSize={30} mt={3}/>
                  </Flex>
                  <Flex gap={4} mt={4} mx={{base:2, md:30}}>
                  <Image ml={{ base: 2, md:6}}
                      borderRadius='full'
                      boxSize={{ base:'50px', md:'50px'}}
                      src='/images/Anas4.JPG'
                      alt='Dan Abramov'
                    /> 
                    <Box>
                    <Text fontSize={20}>Anas Isah</Text>
                    <Text mt={-2} as='p'>message</Text>
                    </Box>
                    <ChevronRightIcon ml={{ base:10, md: 800}} fontSize={30} mt={3}/>
                  </Flex>

            </Card>
        </Box>
    </>
  )
}
