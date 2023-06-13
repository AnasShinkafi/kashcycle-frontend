"use client"
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Grid, Center,Text, Heading, Icon, Flex, Divider, Input, Stack, Button, Textarea, Box } from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
       <Box bg="teal" color="white" py={6} roundedTop={40}>
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW={{ base: "100%", md: "1400px" }}
        mx="auto"
        px={{ base: 4, md: 4 }}
        justify="space-between"
        align="center" gap={10}
      >
        <Box w={{base:'300px', md:'600px'}}>
          <Heading textAlign='center' fontSize={35}>KashCycle</Heading>
          <Text textAlign='center' fontSize={18}>Lorem ipsum dolor sit amet consectetur.
          orquis mi sit in orci lacus seLorem ipsum dolor sit amet consectetur. Mauris porttit
          orquis mi sit in orci lacus se</Text>
        </Box>
        <Box w={300}>
          <Heading textAlign='center' fontSize={35}>Company</Heading>
          <Text textAlign='center' fontSize={22}>About</Text> 
          <Text textAlign='center' fontSize={22}>Contact</Text>
        </Box>
        <Box w={300} mt={0}>
        <Heading textAlign='center' fontSize={35}>Legal</Heading>
          <Text textAlign='center' fontSize={22}>Terms & Conditions</Text>
          <Text textAlign='center' fontSize={22}>Privacy & Policy</Text>
        </Box>
        <Box w={{base:'300px', md:'600px'}}>
          <Heading textAlign='center' fontSize={35}>Newsletter</Heading>
          <Text textAlign='center' fontSize={18}>Lorem ipsum dolor sit amet consectetur.
          orquis mi sit in orci lacus seLorem ipsum dolor sit amet consectetur. Mauris porttit
          orquis mi sit in orci lacus se</Text>
        </Box>
      </Flex>
      <Divider bg={'white'} h={0.2} w='100%' mt={30} />
      <Box color="white" py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW={{ base: "100%", md: "900px" }}
        mx="auto"
        px={{ base: 4, md: 6 }}
        justify="space-between"
        align="center"
      >
        <Box>
        <Text fontSize={16}>Copyright © 2023 Kashcycle. All rights reserved.</Text>
        </Box>
        <Box>
          <Flex justify={'center'} mt={4} fontSize={23} gap={4}>
          <Text as='a' href='/'> <FaFacebookF /></Text>
          <Text as='a' href='/'> <FaInstagram /></Text>
          <Text as='a' href='/'> <FaTwitter /></Text>
          <Text as='a' href='/'> <FaLinkedin/></Text>
        </Flex>
        </Box>
      </Flex>
    </Box>
    </Box>    
    </>
  )
}




{/* <Grid pt={5} bg='blue.500' color='white' roundedTop={30}>
      <Heading textAlign='center' fontSize={35}>KashCycle</Heading>
      <Text textAlign='center' mt={5} mx={8} fontSize={18}>Lorem ipsum dolor sit amet consectetur.
      orquis mi sit in orci lacus seLorem ipsum dolor sit amet consectetur. Mauris porttit
      orquis mi sit in orci lacus se</Text>
      <Heading textAlign='center' mt={5} fontSize={35}>Company</Heading>
      <Text as='a' href='/about' textAlign='center' fontSize={26}>About</Text>
      <Text as='a' href='/contact' textAlign='center' fontSize={26}>Contact</Text>
      <Heading textAlign='center' mt={5} fontSize={35}>Company</Heading>
      <Text as='a' href='/about' textAlign='center' fontSize={26}>Tearms & Conditions</Text>
      <Text as='a' href='/contact' textAlign='center' fontSize={26}>Privacy & Policy</Text>
      <Heading textAlign='center' mt={5} fontSize={35}>Newsletter</Heading>
      <Text textAlign='center' mt={3} mx={8} fontSize={18}>Lorem ipsum dolor sit amet consectetur.
      orquis mi sit in orci lacus seLorem ipsum dolor sit amet consectetur. Mauris porttit
      orquis mi sit in orci lacus se</Text>
      <Stack m={30}>
        <Input focusBorderColor='white' fontSize={20} placeholder='adashe@gmail.com' _placeholder={ {color:  'white'}} />
      </Stack>
      <Center>
        <Button as='a' href='/' fontSize={23} color='blue.500' w={40} h={35}>Subscribe</Button>
      </Center>
      <Flex mt={4} gap={3} justifyContent='center' alignItems='center'>
        <Icon as={PhoneIcon} fontSize={23} />
        <Text fontSize={23}>+234 8038780968</Text>
      </Flex>
        <Center gap={4} mt={4}>
        <Icon as={EmailIcon} fontSize={23} /> 
        <Text h={8} w={60} fontSize={23}>KashCycle@gmail.com</Text>
        </Center>
      <Flex justify={'center'} mt={4} fontSize={23} gap={4}>
        <Text as='a' href='/'> <FaFacebookF /></Text>
        <Text as='a' href='/'> <FaInstagram /></Text>
        <Text as='a' href='/'> <FaTwitter /></Text>
        <Text as='a' href='/'> <FaLinkedin/></Text>
      </Flex>
      <Divider bg={'white'} h={0.2} w='100%' mt={30} />
      <Center mt={8} mb={8}>
        <Text fontSize={18}>Copyright © 2023 Kashcycle. All rights reserved.</Text>
        </Center>
    </Grid > */}