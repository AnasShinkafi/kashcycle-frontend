"use client"
import React, { useState } from 'react'
import DashNavbar from '../components/DashNavbar'
import { Card, CardBody, CardHeader, CardFooter, Button, Heading, Text, InputLeftElement, Box, Flex, Progress, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { ChevronRightIcon, CloseIcon, CopyIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { FaDollarSign, FaMehBlank } from 'react-icons/fa'


export default function page() {
  const percentage = 50;
  const data = [40]
  const max = Math.max(...data)
  const [ showPassword, setShowPassword ] = useState(false)
  return (
    <>
      <DashNavbar />
      <Card alignItems='center' bg='teal' roundedTop={30} mx={10} h={900} mt={-10}>
      <Flex gap={{ base:2, md:6}}>
      <Heading textAlign='left' fontSize={{base:'12px', md:'22px'}} mt={30} color='white'>My Ongoinig Contribution</Heading>
      <Button mt={25} colorScheme='teal' fontSize={{base:12, md:18}}>Join Contribution</Button>
      </Flex>
      <Box gap={{ base:10, md:175}} display={{base:'column', md:'flex'}} mt={5} w={{base:170, md:500}} >
        <Box bg='blue.400' color='white' rounded={8} w={40} h={70}>
          <Text textAlign='center' fontSize={18} mt={2}>Wallet Balance</Text>
         <Flex gap={2}>
         <FaDollarSign fontSize={18} /> 
         <Text textAlign='center' fontSize={18}> #1,000,000</Text>
         </Flex>
        </Box>
        <Box alignContent='center' color='white' bg='pink.400' rounded={8} w={40} h={70}>
          <Text textAlign='center' fontSize={18} mt={2}>Total Contribution</Text>
          <Text textAlign='center' fontSize={18}> #1,000,000</Text>  
        </Box>
      </Box>
      <Card align='center' mx={{ bas:14, md:20}} w={{base:'95%', md:'60%'}} mt={6} bg='white'>
        <CardHeader>
       
        </CardHeader>
        <CardBody>
        <Flex gap={{ base:1, md:85}}>
          <Box>
          <Text fontSize={{ base:12,md:18}}>1. 5K Weekly</Text>
          <CircularProgress value={90} size='80px' thickness={17} color='green.400'>
            <CircularProgressLabel bg=''>90%</CircularProgressLabel>
          </CircularProgress>
          </Box>
          <Box>
          <Text fontSize={{ base:12,md:18}}>2. 10K monthly</Text>
          <CircularProgress value={50} size='80px' thickness={17} color='green.400'>
            <CircularProgressLabel bg=''>50%</CircularProgressLabel>
          </CircularProgress>
          </Box>
          <Box>
          <Text fontSize={{ base:12,md:18}}>3. 25K monthly</Text>
          <CircularProgress value={75} size='80px' thickness={17} color='green.400'>
            <CircularProgressLabel bg=''>75%</CircularProgressLabel>
          </CircularProgress>
          </Box>
          </Flex>
          <Flex gap={{ base:1, md:85}} mt={6}>
          <Box>
          <Text fontSize={{ base:12,md:18}}>4. 5K Weekly</Text>
          <CircularProgress value={90} size='80px' thickness={17} color='green.400'>
            <CircularProgressLabel bg=''>90%</CircularProgressLabel>
          </CircularProgress>
          </Box>
          <Box>
          <Text fontSize={{ base:12,md:18}}>5. 10K monthly</Text>
          <CircularProgress value={50} size='80px' thickness={17} color='green.400'>
            <CircularProgressLabel bg=''>50%</CircularProgressLabel>
          </CircularProgress>
          </Box>
          <Box>
          <Text fontSize={{ base:12,md:18}}>6. 25K monthly</Text>
          <CircularProgress value={75} size='80px' thickness={17} color='green.400'>
            <CircularProgressLabel bg=''>75%</CircularProgressLabel>
          </CircularProgress>
          </Box>
          </Flex>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
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
      </Card>
    </>
  )
}
