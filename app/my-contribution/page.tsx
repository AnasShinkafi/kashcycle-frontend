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
      <Card alignItems='center' bg='teal' roundedTop={30} mx={4} h={650} mt={-10}>
      <Heading textAlign='left' fontSize={{base:'12px', md:'32px'}} mt={30} color='white'>My Ongoinig Contribution</Heading>
      <Box gap={{ base:10, md:175}} display={{base:'column', md:'flex'}} mt={5} w={{base:170, md:500}} >
    
      </Box>
      <Card align='center' mx={{ bas:14, md:20}} w={{base:'95%', md:'60%'}} mt={6} bg='white'>
        <CardHeader>
       
        </CardHeader>
        <CardBody>
        <Flex gap={{ base:1, md:85}}>
        <Box alignContent='center' color='white' bg='pink.400' rounded={8} w={{ base:40, md:60}} h={130}>
        <Box>
          <Flex>
          <Text fontSize={{ base:8, md:16}} ml={2}>50K monthly contribution</Text>
          <CircularProgress value={90} size='50px' thickness={17} color='green.400'>
            <CircularProgressLabel bg=''>90%</CircularProgressLabel>
          </CircularProgress>
          </Flex>
          </Box>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>Start on:<strong>21 January 2023</strong> </Text>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>End on:<strong>21 January 2024</strong> </Text>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>Duration:<strong>12 Months</strong> </Text>  
        </Box>
        <Box alignContent='center' color='white' bg='pink.400' rounded={8} w={{ base:40, md:60}} h={130}>
        <Box>
          <Flex>
          <Text fontSize={{ base:8, md:16}} ml={2}>50K monthly contribution</Text>
          <CircularProgress value={90} size='50px' thickness={17} color='green.400'>
            <CircularProgressLabel bg=''>90%</CircularProgressLabel>
          </CircularProgress>
          </Flex>
          </Box>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>Start on:<strong>21 January 2023</strong> </Text>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>End on:<strong>21 January 2024</strong> </Text>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>Duration:<strong>12 Months</strong> </Text>  
        </Box>
          </Flex>
          <Flex mt={4} gap={{ base:1, md:85}}>
        <Box alignContent='center' color='white' bg='pink.400' rounded={8} w={{ base:40, md:60}} h={130}>
        <Box>
          <Flex>
          <Text fontSize={{ base:8, md:16}} ml={2}>50K monthly contribution</Text>
          <CircularProgress value={90} size='50px' thickness={17} color='green.400'>
            <CircularProgressLabel bg=''>90%</CircularProgressLabel>
          </CircularProgress>
          </Flex>
          </Box>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>Start on:<strong>21 January 2023</strong> </Text>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>End on:<strong>21 January 2024</strong> </Text>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>Duration:<strong>12 Months</strong> </Text>  
        </Box>
        <Box alignContent='center' color='white' bg='pink.400' rounded={8} w={{ base:40, md:60}} h={130}>
        <Box>
          <Flex>
          <Text fontSize={{ base:8, md:16}} ml={2}>50K monthly contribution</Text>
          <CircularProgress value={90} size='50px' thickness={17} color='green.400'>
            <CircularProgressLabel bg=''>90%</CircularProgressLabel>
          </CircularProgress>
          </Flex>
          </Box>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>Start on:<strong>21 January 2023</strong> </Text>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>End on:<strong>21 January 2024</strong> </Text>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>Duration:<strong>12 Months</strong> </Text>  
        </Box>
          </Flex>
          <Flex mt={4} gap={{ base:1, md:85}}>
        <Box alignContent='center' color='white' bg='pink.400' rounded={8} w={{ base:40, md:60}} h={130}>
        <Box>
          <Flex>
          <Text fontSize={{ base:8, md:16}} ml={2}>50K monthly contribution</Text>
          <CircularProgress value={90} size='50px' thickness={17} color='green.400'>
            <CircularProgressLabel bg=''>90%</CircularProgressLabel>
          </CircularProgress>
          </Flex>
          </Box>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>Start on:<strong>21 January 2023</strong> </Text>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>End on:<strong>21 January 2024</strong> </Text>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>Duration:<strong>12 Months</strong> </Text>  
        </Box>
        <Box alignContent='center' color='white' bg='pink.400' rounded={8} w={{ base:40, md:60}} h={130}>
        <Box>
          <Flex>
          <Text fontSize={{ base:8, md:16}} ml={2}>50K monthly contribution</Text>
          <CircularProgress value={90} size='50px' thickness={17} color='green.400'>
            <CircularProgressLabel bg=''>90%</CircularProgressLabel>
          </CircularProgress>
          </Flex>
          </Box>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>Start on:<strong>21 January 2023</strong> </Text>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>End on:<strong>21 January 2024</strong> </Text>
          <Text textAlign='center' fontSize={{ base:12, md:15}} mt={1}>Duration:<strong>12 Months</strong> </Text>  
        </Box>
          </Flex>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
      
      </Card>
    </>
  )
}
