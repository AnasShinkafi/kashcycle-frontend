import React from 'react'
import { Box, Text } from '@chakra-ui/react'
export default function Hero() {
  return (
   
       <Box
       sx={{
        backgroundImage: "url('/images/edu3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width:'100%',
        height: "700px", 
        "@media (max-width: 768px)": {
          height: "250px", 
        },
      }}
    >
      <Text as='h1' color='teal.700' fontSize={[20, 30, 40, 80]} textAlign='center'>Beyond Software </Text>
    </Box>

  )
}
