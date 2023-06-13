"use client"
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack, IconButton, Image, useColorMode, useDisclosure } from '@chakra-ui/react'
import React from 'react'
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
    as="nav"
    pos='expand'
    
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%"
    p={4}
    pt={6}
    bg={colorMode === 'light' ? 'teal' : 'teal.700'}
    color={colorMode === 'light' ? 'teal.700' : 'teal.300'}
  >
  <Box>
    <Button variant="ghost">
        <Image src='/images/logo.png' w={[20, 40]} h={[10, 20]} />
    </Button>
  </Box>
  <HStack display={{ base: 'none', md: 'flex' }} spacing={4} color='teal.600'>
    <Button variant="ghost" fontSize={[16, 22]}>Home</Button>
    <Button variant="ghost" fontSize={[16, 22]}>About</Button>
    <Button variant="ghost" fontSize={[16, 22]}>Services</Button>
    <Button variant="ghost" fontSize={[16, 22]}>Contact</Button>
  </HStack>
  <Box >
    <Button fontSize={'lg'}  variant="ghost" onClick={onToggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Button>
    <IconButton
    aria-label="Toggle dark mode"
    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    onClick={toggleColorMode}
    variant="ghost"
  />
  </Box>
  {isOpen && (
  <Box py={4}  display={{ sm: 'block', md: 'none' }} color='teal.600'>
    <Button as='a' href='/' variant="ghost" w="full" mb={2}>
      Home
    </Button>
    <Button as='a' href='/about' variant="ghost" w="full" mb={2}>
      About
    </Button>
    <Button as='a' href='/service' variant="ghost" w="full" mb={2}>
      Services
    </Button>
    <Button as='a' href='/contact' variant="ghost" w="full" mb={2}>
      Contact
    </Button>
  </Box>
)}
</Flex>
  )
}

export default Navbar;