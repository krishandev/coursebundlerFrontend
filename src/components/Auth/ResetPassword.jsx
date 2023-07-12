
import { Box, Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useParams} from 'react-router-dom'


const ResetPassword = () => {

    const [password, setPassword]=useState("");
    const params=useParams();
    console.log(params.token);

    return (
        <Container height={'90vh'} py={'16'}>
          <VStack  justifyContent={'center'}>
              <Heading children="Reset Password" textTransform={'uppercase'} textAlign={['center', 'left']}/>
              <form style={{width:'100%'}}>
  <Box py={'4'}>
      
      <Input required  value={password} onChange={e=>setPassword(e.target.value)} placeholder='Enter New Password' focusBorderColor='yellow.400'/>
      
  </Box>
  <Button py={'4'} width={'full'} colorScheme='yellow' type='submit'>Reset Password</Button>
              </form>
          </VStack>
        </Container>
    )
}

export default ResetPassword