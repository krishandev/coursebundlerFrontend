import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [message, setMessage]=useState("");

  return (
     <Container h={'95vh'}>
        <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
            <Heading children="Contact Us"/>

            <form style={{width:'100%'}}>
                <Box my={'4'}>
                    <FormLabel htmlFor='name' children="Name"/>
                    <Input required placeholder='Enter Name' id='name' value={name} onChange={e=>setName(e.target.value)} focusBorderColor='yellow.500'/>
                </Box>

                <Box my={'4'}>
                    <FormLabel htmlFor='email' children="Email"/>
                    <Input required placeholder='Enter Email' id='email' value={email} onChange={e=>setEmail(e.target.value)} focusBorderColor='yellow.500'/>
                </Box>

                <Box my={'4'}>
                    <FormLabel htmlFor='message' children="Message"/>
                    <Textarea required placeholder='Enter Message' id='message' value={message} onChange={e=>setMessage(e.target.value)} focusBorderColor='yellow.500'/>
                </Box>

                <Button type='submit' colorScheme='yellow'>Submit</Button>

<Box py={'4'}>
    Request for a Course? {''}
    <Link to='/request'>
        <Button colorScheme='yellow' variant={'link'}>Click</Button> here
    </Link>
</Box>
            </form>
        </VStack>
     </Container>
  )
}

export default Contact