import { Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import { fileUploadCss } from '../../Auth/Signup';

const CreateCourse = () => {

  const [title, setTitle]=useState('');
  const [description, setDescription]=useState('');
  const [createdBy, setCreatedBy]=useState('');
  const [category, setCategory]=useState('');
  const [image, setImage]=useState('');
  const [imagePrev, setImagePrev]=useState('');

  const categories=['SEO', 'Website Development', 'Web Design', 'React Js', 'Node Js', 'Data Science'];

  const onChangeFileHandler= e=>{
    const file=e.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend=()=>{
     setImagePrev(reader.result);
     setImage(file);
    }
 }

  return (
      <Grid templateColumns={['1fr', '5fr 1fr']} minH={'100vh'}>
        <Container py={'16'}>
      <form>
      <Heading children="Create Course" textTransform={'uppercase'} my={'16'} textAlign={['center', 'left']}/>

      <VStack m={'auto'} spacing={'8'}>
        <Input value={title} placeholder='Title' type={'text'} onChange={e=>setTitle(e.target.value)} focusBorderColor='purple.300'/>

        <Input value={description} placeholder='Description' type={'text'} onChange={e=>setDescription(e.target.value)} focusBorderColor='purple.300'/>

        <Input value={createdBy} placeholder='Creator Name' type={'text'} onChange={e=>setCreatedBy(e.target.value)} focusBorderColor='purple.300'/>

        <Select value={category} focusBorderColor='purple.300' onChange={e=>setCategory(e.target.value)}>
          <option>Category</option>
          {
            categories.map(item=>(
              <option value={item} key={item}>{item}</option>
            ))
          }

        </Select>

        <Input type={'file'} required accept='image/*' id='chooseAvatar' focusBorderColor='purple.300' css={{'&::file-selector-button':{
          ...fileUploadCss, 
          color:'purple'
        }}} onChange={onChangeFileHandler}/>

       {
        imagePrev && (
          <Image src={imagePrev} boxSize={'64'} objectFit={'contain'}/>
        )
       }
       <Button w={'full'} colorScheme={'purple'} type='submit'>Create</Button>

      </VStack>
      </form>

        </Container>
        <Sidebar/>

      </Grid>
  )
}

export default CreateCourse