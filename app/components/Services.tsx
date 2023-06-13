import { Text, SimpleGrid, Box, Heading, Button, Card, CardHeader, CardBody, CardFooter, } from '@chakra-ui/react'

export default function Services() {
  return (
    <>
    <Box mt={4} >
      <Text as='h1' fontSize={[20, 30, 40, 50]} textAlign='center' >HOW WE OPERATE</Text>
    </Box>
    <SimpleGrid mx={10} columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
    <Card
        bg="teal"
        boxShadow="md"
        borderRadius="md"
        p={4}
        height="100%"
        width="100%"
      >
        <CardHeader alignItems="center" mb={2}>
        <Heading textAlign='center'>Monthly Contribution</Heading>
        </CardHeader>
        <CardBody>
                <Text textAlign='center' fontSize={18}>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</Text>
        </CardBody>
        <CardFooter justify='center'>
                <Button as='a' href='/' bg='rgba(81, 255, 255, 0.2)' >Learn More</Button>
        </CardFooter>
      </Card>

      <Card
        bg="teal"
        boxShadow="md"
        borderRadius="md"
        p={4}
        height="100%"
        width="100%"
      >
        <CardHeader alignItems="center" mb={2}>
        <Heading textAlign='center'>Monthly Contribution</Heading>
        </CardHeader>
        <CardBody>
                <Text textAlign='center' fontSize={18}>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</Text>
        </CardBody>
        <CardFooter justify='center'>
                <Button as='a' href='/' bg='rgba(81, 255, 255, 0.2)' >Learn More</Button>
        </CardFooter>
      </Card>

      <Card
        bg="teal"
        boxShadow="md"
        borderRadius="md"
        p={4}
        height="100%"
        width="100%"
      >
        <CardHeader alignItems="center" mb={2}>
        <Heading textAlign='center'>Monthly Contribution</Heading>
        </CardHeader>
        <CardBody>
                <Text textAlign='center' fontSize={18}>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</Text>
        </CardBody>
        <CardFooter justify='center'>
                <Button as='a' href='/' bg='rgba(81, 255, 255, 0.2)' >Learn More</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
    </>
  );
}

