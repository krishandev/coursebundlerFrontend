import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentFail = () => {
  return (

    <Container height={'90vh'} >
    <VStack  h={'full'} justifyContent={'center'} spacing={'4'}>
      <RiErrorWarningFill color='red' size={'5rem'}/>
      <Heading color={'red'}>Payment Fail</Heading>
      <Link to={'/subscribe'}>
    <Button variant={'ghost'}>Try Again</Button>
    </Link>
    </VStack>


   </Container>

  )
}

export default PaymentFail