import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  return (
     <Container h={'90vh'} py={'16'} textAlign={['center', 'left']}>
      
      <Heading children="Update Profile" textTransform={'uppercase'} py={'8'}/>

      <VStack spacing={'8'}>

      <Input placeholder='Name' focusBorderColor='yellow.500' type='text' value={name} onChange={e=>setName(e.target.value)}/>

      <Input placeholder='Email' focusBorderColor='yellow.500' type='email' value={email} onChange={e=>setEmail(e.target.value)}/>

      <Button children="Update" width={'full'} colorScheme='yellow' type='submit'/>
      </VStack>

     </Container>
  )
}

export default UpdateProfile