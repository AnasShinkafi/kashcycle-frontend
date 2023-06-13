"use client"
import React, { useState } from 'react'
import DashNavbar from '../components/DashNavbar'
import { Card, CardBody, CardHeader, CardFooter, Button, Heading, Input, InputGroup, InputRightElement, Text, InputLeftElement, Image } from '@chakra-ui/react'
import { CloseIcon, TriangleDownIcon, } from '@chakra-ui/icons'

export default function page() {
  const [ showPassword, setShowPassword ] = useState(false)
  return (
    <>
      <DashNavbar />
      <Card alignItems='center' roundedTop={30} mx={10} h={500} mt={-10}>
      <Heading textAlign='left' fontSize={{base:'20px', md:'32px'}} mt={30} color='teal'>Select The Payment Option</Heading>
      <Text>click any of the options below to contribute immediately</Text>
      <Card align='center' mx={20} w={{base:'90%', md:'60%'}} mt={0} bg='teal.500'>
        <CardHeader>
          <Heading textAlign='left' fontSize={{base:'16px', md:'24px'}} color='white'>Choose an amount</Heading>
        </CardHeader>
        <CardBody>
        <InputGroup mb={5}>
        <InputLeftElement h='full'>
            <Image src='/images/Vector1.png' />
        </InputLeftElement>
          <Input placeholder="Use a new card" type= 'text' size='lg' _placeholder={{ opacity: 1, color: 'white' }} />
        </InputGroup>
        <InputGroup mb={5}>
        <InputLeftElement h='full'>
            <Image src='/images/Rectangle 36.png' />
        </InputLeftElement>
          <Input placeholder="Pay with bank" type= 'text' size='lg' _placeholder={{ opacity: 1, color: 'white' }} />
        </InputGroup>
        <InputGroup>
        <InputLeftElement h='full'>
            <Image src='/images/image 2.png' />
        </InputLeftElement>
          <Input placeholder="Pay with Transfer" type= 'text' size='lg' _placeholder={{ opacity: 1, color: 'white' }} />
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
