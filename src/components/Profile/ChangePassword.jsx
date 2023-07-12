import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
  const [oldPassword, setOldPassword]=useState("");
  const [newPassword, setNewPassword]=useState("");
  return (
    <Container minH={'90vh'} py={'16'}>
        <form>
            <Heading children="Change Password" my={'16'} textAlign={['center', 'left']} textTransform={'uppercase'}/>
            <VStack spacing={'8'}>
              <Input required type='password' placeholder='Old Password' value={oldPassword} focusBorderColor='yellow.500' onChange={e=>setOldPassword(e.target.value)}/>
              <Input required type='password' value={newPassword} onChange={e=>setNewPassword(e.target.value)} placeholder='New Password' focusBorderColor='yellow.500' />
              <Button children="Change" type='submit' colorScheme='yellow' width={'full'}/>
            </VStack>
        </form>
    </Container>
  )
}

export default ChangePassword