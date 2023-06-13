import { Box, Image, Text, Grid, Wrap, WrapItem, Stack, Button } from '@chakra-ui/react'
import React from 'react'

export default function Features() {
  return (
    <Grid>
      <Text textAlign='center' mt={2} fontSize={[18, 26, 32, 42]}>WELCOME TO KASHCYCLE </Text>
       <Wrap mx={5} mt={4} spacing='6px' justify='center'>
      <WrapItem>
        <Image rounded={5} w={{ base: '30em', md:'40em', lg: '51em'}} src='/images/learn2.jpeg' />
      </WrapItem>
      <WrapItem>
        <Box w={[300, 460, 680, 720, 820]} ml={1}>
          <Text as='h3'fontSize={{ base: '20px', md: '28px', lg: '36px', xl: '48px'}} >WHAT YOU NEED TO ABOUT US</Text>
          <Text fontSize={{base: '14px', md: '18px', lg:'24px', xl:'26px'}}>  Getting a new business off the ground is a lot of hard work. Here are five
          ideas you can use to find your first customers. Getting a new business off the ground is a lot of hard work. Here are five
          ideas you can use to find your first customers. Getting a new business off the ground is a lot of hard work. Here are five
          ideas you can use to find your first customers. Getting a new business off the ground is a lot of hard work. Here are five
          ideas you can use to find your first customers. </Text>
          <Stack direction='row' mt={10} justify='center' spacing={4} >
          <Button colorScheme='teal' variant='solid' fontSize={{base: '20px', md: '34px'}} h={{base:'30px', md: '60px' }} w={{ base: '100px', md: '180px'}}>JOIN US</Button>
          <Button colorScheme='teal' variant='outline' fontSize={{base: '20px', md: '34px'}} h={{base:'30px', md: '60px' }} w={{ base: '100px', md: '180px'}}>MORE</Button>
        </Stack>
        </Box>
      </WrapItem>
      </Wrap>
    </Grid>
  )
}
