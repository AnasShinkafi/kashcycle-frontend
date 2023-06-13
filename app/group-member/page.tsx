"use client"
import React from 'react'
import DashNavbar from '../components/DashNavbar'
import { Box, Image, Text } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td,TableCaption,TableContainer,} from '@chakra-ui/react'
export default function page() {
  return (
    <>
        <DashNavbar />
        <Box mx={4} roundedTop={30} mt={-10}            alignItems='center' bg='gray.400' h={500}>
            <Text color='black' fontSize={{ base:'18px', md:'34px'}} ml={9} pt={3}>My Group Members</Text>
            <TableContainer w={{ base:'100%', md:'100%'}} gap={0}>
                <Table size='sm' variant='simple' >
                    <TableCaption fontSize={{ base:'14px', md:'20px'}}>Progress of your collection</TableCaption>
                    <Thead>
                    <Tr>
                        <Th fontSize={{ base:'10px', md:'24px'}}>C/N</Th>
                        <Th fontSize={{ base:'10px', md:'24px'}}>Name</Th>
                        <Th fontSize={{ base:'10px', md:'24px'}}>Collect</Th>
                        <Th fontSize={{ base:'10px', md:'24px'}}>Month</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td fontSize={{ base:'14px', md:'20px'}}>01.</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>Anas Isah</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>Yes</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>January</Td>
                    </Tr>
                    <Tr>
                        <Td fontSize={{ base:'14px', md:'20px'}}>02.</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>Yahayya Musa</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>Yes</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>Febuary</Td>
                    </Tr>
                    <Tr>
                        <Td fontSize={{ base:'14px', md:'20px'}}>03.</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>Zainab Isah</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>No</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>March</Td>
                    </Tr>
                    <Tr>
                    <Td>04.</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>Muhammed Kabir</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>No</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>April</Td>
                    </Tr>
                    <Tr>
                        <Td fontSize={{ base:'14px', md:'20px'}}>05.</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>Aisha Abbakar</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>No</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>May</Td>
                    </Tr>
                    <Tr>
                         <Td fontSize={{ base:'14px', md:'20px'}}>06.</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>Ibraheem Rabi'u</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>No</Td>
                        <Td fontSize={{ base:'14px', md:'20px'}}>June</Td>
                    </Tr>
                    </Tbody>
                    <Tfoot>
                    
                    </Tfoot>
                </Table>
            </TableContainer>
        </Box>
    </>
  )
}
