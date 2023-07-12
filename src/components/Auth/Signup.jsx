import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const fileUploadCss={
    cursor:'pointer',
    marginLeft:'-5%',
    width:'110%',
    border:'none',
    height:'100%',
    color:'#ECC94B',
    backgroundColor:'white'
    
}

const fileUploadStyle={
    '&::file-selector-button':fileUploadCss
}
const Signup = () => {

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [imgPreView, setImgPreView]=useState("");
    const [image, setImage]=useState("");

    const onChangeFileHandler= e=>{
       const file=e.target.files[0];
       const reader=new FileReader();
       reader.readAsDataURL(file);

       reader.onloadend=()=>{
        setImgPreView(reader.result);
        setImage(file);
       }
    }
  return (
     <Container height={'95vh'}>
        <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
            <Heading textTransform={'uppercase'} children="Registration"/>
            <form style={{width:'100%'}}>
                <Box display={'flex'} justifyContent={'center'}>
                    <Avatar src={imgPreView} size={'2xl'}/>
                </Box>
            <Box my={'4'}>
            <FormLabel htmlFor='name' children="Name"/> 
            <Input required id='name' value={name} onChange={e=>setName(e.target.value)} placeholder='Enter Name' focusBorderColor='yellow.400' type={'text'}/>
            </Box>

            <Box my={'4'}>
            <FormLabel htmlFor='email' children="Email"/> 
            <Input required id='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder='Enter Email' focusBorderColor='yellow.400' type={'email'}/>
            </Box>

            <Box my={'4'}>
            <FormLabel htmlFor='password' children="Password"/> 
            <Input required id='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='Enter Password' focusBorderColor='yellow.400' type={'password'}/>
            </Box>

            <Box my={'4'} >
            <FormLabel htmlFor='chooseAvatar' children="Choose Avatar"/>
            <Input type={'file'} required accept='image/*' id='chooseAvatar' focusBorderColor='yellow.400' css={fileUploadStyle} onChange={onChangeFileHandler}/>
            </Box>

            <Button colorScheme='yellow' type='submit'>SignUp</Button>
            <Box my={'4'}>
                Already Registered? {' '}

            <Link to='/login'>
                <Button colorScheme='yellow' variant={'link'}>Login</Button>
            </Link>
            </Box>

            </form>
        </VStack>
     </Container>
  )
}

export default Signup