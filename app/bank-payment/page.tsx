"use client"
import React, { useState } from 'react'
import DashNavbar from '../components/DashNavbar'
import { Card, CardBody, CardHeader, CardFooter, Button, Heading, Input, InputGroup, InputRightElement, Text, InputLeftElement, Image } from '@chakra-ui/react'
import { CloseIcon, TriangleDownIcon } from '@chakra-ui/icons'

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
          <Text mt={4} color='white'>Choose your bank to make the payment</Text>
        </CardHeader>
        <CardBody>
        <InputGroup>
          <Input w={80} placeholder="Click here to choose your bank" type= 'text' size='lg' _placeholder={{ opacity: 1, color: 'white' }} />
          <InputRightElement h={'full'}>
            <Button variant={'ghost'} onClick={() =>
                setShowPassword((showPassword) => !showPassword)
              }>
              {showPassword ? <CloseIcon /> : <TriangleDownIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        </CardBody>
        <CardFooter>
          <Button colorScheme='gray' fontSize={20} color='teal'>Proceed</Button>
        </CardFooter>
      </Card>
      </Card>
    </>
  )
}
