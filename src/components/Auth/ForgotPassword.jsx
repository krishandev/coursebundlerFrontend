import { Box, Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const ForgotPassword = () => {

    const [email, setEmail]=useState("");

  return (
      <Container height={'90vh'} py={'16'}>
        <VStack  justifyContent={'center'}>
            <Heading children="Forgot Password" textTransform={'uppercase'} textAlign={['center', 'left']}/>
            <form style={{width:'100%'}}>
<Box py={'4'}>
    
    <Input required  value={email} onChange={e=>setEmail(e.target.value)} placeholder='Enter Email' focusBorderColor='yellow.400'/>
    
</Box>
<Button py={'4'} width={'full'} colorScheme='yellow' type='submit'>Send Password Reset Link</Button>
            </form>
        </VStack>
      </Container>
  )
}

export default ForgotPassword