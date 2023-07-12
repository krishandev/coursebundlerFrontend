import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
   <Container height={'90vh'} >
    <VStack  h={'full'} justifyContent={'center'} spacing={'4'}>
      <RiErrorWarningFill size={'5rem'}/>
      <Heading>Page Not Found</Heading>
      <Link to={'/'}>
    <Button variant={'ghost'}>Go to Home</Button>
    </Link>
    </VStack>


   </Container>
  )
}

export default Notfound