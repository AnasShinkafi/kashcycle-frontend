"use client"
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function DashNavbar() {
  return (
    <>
        <Box w='100%' bg='teal.500' h={200} roundedBottom={40}>
           <Flex textColor='white' mx={10} pt={45} justify='space-between'>
                <Text fontSize={25}>Good Morning <br/> Anas</Text>
                <Image src='/images/Anas4.JPG' rounded='50%' w={55} h={55} />
            </Flex> 
        </Box>
    </>
  )
}
