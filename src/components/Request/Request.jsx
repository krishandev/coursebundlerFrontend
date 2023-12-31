import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Request = () => {

    
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [course, setCourse]=useState("");

  return (
     <Container h={'95vh'}>
        <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
            <Heading children="Request New Course"/>

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
                    <FormLabel htmlFor='course' children="Course"/>
                    <Textarea required placeholder='Explain the Course' id='course' value={course} onChange={e=>setCourse(e.target.value)} focusBorderColor='yellow.500'/>
                </Box>

                <Button type='submit' colorScheme='yellow'>Submit</Button>

<Box py={'4'}>
    See Available Courses? {''}
    <Link to='/courses'>
        <Button colorScheme='yellow' variant={'link'}>Click</Button> here
    </Link>
</Box>
            </form>
        </VStack>
     </Container>
  )
}

export default Request