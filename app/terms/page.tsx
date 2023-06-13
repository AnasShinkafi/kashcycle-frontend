"use client"
import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function page() {
  return (
    <>
      <Box w='100%' bg='gray.300' h={'max-content'} >
        <Navbar />
        <Box w='100%' bg='white' pt={3} mt={3} h={'max-height'} roundedTop={40}>
        <Heading as='h3' textAlign='center' pt={6}>Terms & Conditions</Heading>
            <Box bg='teal' mx={{base:6, md:10}} roundedTop={40} h={'max-content'} pb={10} mt={10}>
              <Text fontSize={25} fontWeight='bold' textAlign='center' pt={6}>Terms of Use</Text>
              <Text mx={12} mb={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel turpis rhoncus, tempor arcu vel, pretium velit. Pellentesque lectus nibh, hendrerit sit amet massa id, gravida tristique lacus. Duis elementum, nunc quis blandit efficitur, urna ipsum posuere urna, ut mollis est odio a nulla. Morbi ac nisl fermentum, tincidunt lacus sed, pretium lorem. Aliquam volutpat pretium aliquet. Suspendisse potenti. Fusce ultrices lorem sed massa facilisis, ultricies elementum lectus pellentesque. Aliquam eleifend consectetur lorem, vel tempus lorem placerat at. Praesent est orci, ullamcorper id laoreet quis, auctor sed tellus. Donec varius pellentesque auctor. Pellentesque tristique, metus eget efficitur aliquet, leo nibh finibus massa, varius lacinia magna mi nec eros. In condimentum nisi sit amet dictum scelerisque. Nam vel efficitur nunc. Donec at eros mattis, lobortis quam quis, commodo est. Morbi hendrerit sagittis gravida. Fusce aliquet rhoncus tempus. Ut ut accumsan leo. Phasellus et ligula eget enim accumsan convallis. Vivamus et cursus nibh. Nullam tortor magna, posuere vitae sapien dapibus, rhoncus scelerisque nulla. Morbi et purus feugiat sapien posuere laoreet sit amet non elit. Sed porta facilisis justo non porta. Ut malesuada neque enim, sed pretium ipsum interdum vitae. Phasellus id risus vel augue eleifend venenatis ut eu mi. Integer venenatis, sapien at finibus molestie, lectus leo sodales metus, quis commodo neque mi a massa. Ut at mi dignissim, molestie nunc a, volutpat velit. Praesent risus ante, tristique eget augue vel, euismod ornare urna. Praesent mattis mauris a rutrum sollicitudin. Quisque sit amet pretium quam. Sed luctus mi nisl, eu viverra urna efficitur eu. Nam at dui eu sapien elementum aliquet eu ac turpis. Cras volutpat ultricies nisi. Phasellus accumsan, elit ullamcorper vestibulum euismod, ante purus cursus ipsum, at feugiat massa odio in diam. Donec nec ultricies tellus, vel blandit justo. Vivamus sit amet mauris sed est venenatis finibus. Maecenas iaculis placerat odio, at tincidunt tellus pulvinar quis. Aliquam semper nulla eu tincidunt semper. Proin quis nibh imperdiet mauris rutrum scelerisque. Donec sed condimentum augue, ac egestas odio. Nunc arcu nisi, sodales quis lectus ut, porttitor vehicula lectus. Aenean volutpat ipsum non libero mollis dignissim. Quisque ut commodo lacus, non pulvinar lectus. Sed egestas lobortis nisl nec consequat. Vestibulum at urna sed lacus tempus faucibus nec sed odio. Integer ut sem enim. Etiam augue eros, convallis at sem eu, condimentum feugiat mi. Quisque quis pellentesque nulla, at ultrices lorem. Sed eget mattis est. Suspendisse cursus pretium ligula, volutpat tincidunt tellus malesuada nec. Cras fermentum tincidunt hendrerit. Praesent fermentum magna nibh, ut euismod magna bibendum ut. Proin interdum nisl eget dignissim mollis. Ut sed tempus mi. Nam vulputate faucibus purus sed maximus. Donec cursus in arcu in faucibus. Fusce in purus placerat odio bibendum elementum sed sit amet leo.</Text>
            </Box>
            <Box pt={10}>
              <Footer />
            </Box>
        </Box>
        
      </Box>
    </>
  )
}
