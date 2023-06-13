"use client"
import React, { useState } from 'react'
import DashNavbar from '../components/DashNavbar'
import { Card, CardBody, CardHeader, CardFooter, Button, Heading, Input, InputGroup, InputRightElement, Text, InputLeftElement, Image } from '@chakra-ui/react'

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
          <Text mt={4} color='white'>Enter your details to pay</Text>
        </CardHeader>
        <CardBody>
        <Text color='white'>Card Number</Text>
        <InputGroup mb={5}>       
               <Input placeholder="000000000000" type= 'text' size='lg' _placeholder={{ opacity: 1, color: 'white' }} />
        </InputGroup>
        <Text color='white'>Card Expiry</Text>
        <InputGroup mb={5}>
          <Input placeholder="MM/YY" type= 'text' size='lg' _placeholder={{ opacity: 1, color: 'white' }} />
        </InputGroup>
        <Text color='white'>CVV</Text>
        <InputGroup>
          <Input placeholder="123" type= 'text' size='lg' _placeholder={{ opacity: 1, color: 'white' }} />
        </InputGroup>
        </CardBody>
        <CardFooter>
          <Button colorScheme='gray' fontSize={20} color='teal'>Pay</Button>
        </CardFooter>
      </Card>
      </Card>
    </>
  )
}
