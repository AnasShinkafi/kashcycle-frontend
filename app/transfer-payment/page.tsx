"use client"
import React, { useState } from 'react'
import DashNavbar from '../components/DashNavbar'
import { Card, CardBody, CardHeader, CardFooter, Button, Heading, Input, InputGroup, InputRightElement, Text, InputLeftElement, Box } from '@chakra-ui/react'
import { CloseIcon, CopyIcon, TriangleDownIcon } from '@chakra-ui/icons'

export default function page() {
  const [ showPassword, setShowPassword ] = useState(false)
  return (
    <>
      <DashNavbar />
      <Card alignItems='center' roundedTop={30} mx={10} h={500} mt={-10}>
      <Heading textAlign='left' fontSize={{base:'20px', md:'32px'}} mt={30} color='teal'>Card Payment</Heading>
      <Text color='teal'>Enter your information to make your contribution</Text>
      <Card align='center' mx={20} w={{base:'90%', md:'60%'}} mt={0} bg='teal.500'>
        <CardHeader>
          <Text textAlign='left' fontSize={{base:'16px', md:'24px'}} color='white'>kashCycle@gmail.com <br />pay <strong>NGN 000.00</strong></Text>
          <Text mt={4} color='white'>Transfer NGN 50,000 to kashCycle Account</Text>
        </CardHeader>
        <CardBody>
          <Box w={400} pt={5} textAlign='center' bg='white' h={200}>
            <Text fontSize={28}>Jaiz Bank</Text>
            <Text fontSize={38}>0023486698 <CopyIcon /></Text>
            <Text fontSize={20}>Use this account for this transaction only</Text>
            <Text fontSize={20}>Account expires in <strong>30 minutes</strong>time</Text>
          </Box>
        </CardBody>
        <CardFooter>
          <Button colorScheme='gray' fontSize={20} color='teal'>I've make the payment</Button>
        </CardFooter>
      </Card>
      </Card>
    </>
  )
}
