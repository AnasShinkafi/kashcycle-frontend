"use client"
import React, { useState } from 'react'
import DashNavbar from '../components/DashNavbar'
import { Card, CardBody, CardHeader, CardFooter, Button, Heading, Input, InputGroup, Text, InputRightElement } from '@chakra-ui/react'
import { CloseIcon, TriangleDownIcon, } from '@chakra-ui/icons'

export default function page() {
  const [ showPassword, setShowPassword ] = useState(false)
  return (
    <>
      <DashNavbar />
      <Card alignItems='center' roundedTop={30} mx={10} h={500} mt={-10}>
      <Heading textAlign='left' fontSize={{base:'20px', md:'32px'}} mt={30} color='teal'>Return Number</Heading>
      <Card align='center' mx={20} w={{base:'90%', md:'60%'}} mt={0} bg='teal.500'>
        <CardHeader>
          <Heading textAlign='left' fontSize={{base:'16px', md:'24px'}} color='white'>Here is the number you pick</Heading>
        </CardHeader>
        <CardBody>
        <InputGroup gap={4}>
          <Input placeholder="1" type= 'text'size='lg' _placeholder={{ opacity: 1, color: 'white' }} w={40} />
              <Button colorScheme='gray' color='teal' fontSize={20}>Enter</Button>
            </InputGroup>
            <Text textAlign='center' color='white' fontSize={26}>Ok</Text>
        </CardBody>
        <CardFooter>
        <Button as='a' colorScheme='gray' href='/spin' fontSize={20} color='teal'>Spin</Button>
        </CardFooter>
      </Card>
      </Card>
    </>
  )
}
