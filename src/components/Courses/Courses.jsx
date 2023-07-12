import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Course=({views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount})=>{
    return(
        <VStack className='course1' alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize={60} objectFit={'contain'}/>
            <Heading textAlign={['center', 'left']} maxW="200px" fontFamily={'sans-serif'} noOfLines={3} children={title} size={'sm'}/>
            <Text children={description} noOfLines={2}/>

            <HStack>
                <Text fontWeight={'bold'} textTransform={'uppercase'} children={'Creator :'}/>

                <Text children={creator} fontFamily={'body'} textTransform={'uppercase'}/>

            </HStack>

            <Heading size={'xs'} textAlign={'center'} children={`Lectures - ${lectureCount}`} textTransform={'uppercase'}/>

            <Heading size={'xs'} children={`Views - ${views}`} textTransform={'uppercase'}/>

            <Stack direction={['column', 'row']} alignItems={'center'}>
                <Link to={`/course/${id}`}>
                <Button colorScheme={'yellow'}>Watch Now</Button>
                </Link>
               <Button colorScheme={'yellow'} variant={'ghost'} onClick={()=>addToPlaylistHandler(id)}>
                Add to Playlist
               </Button>
            </Stack>

        </VStack>
    )

};

const Courses = () => {
    const [keyword, setKeyword]=useState("");
    const [category, setCategory]=useState("");
    const categories=['SEO', 'Website Development', 'Web Design', 'React Js', 'Node Js', 'Data Science'];
    const addToPlaylistHandler=()=>{
        console.log("Added to Playlist")
    }
  return (
     <Container minH={'95vh'} maxW='container.lg' paddingY={'8'}>
        <Heading children="All Courses" m={'8'}/>
        <Input placeholder='Seach Courses...' value={keyword} onChange={e=>setKeyword(e.target.value)} type={'text'} focusBorderColor='yellow.500'/>

        <HStack overflowX={'auto'} padding={'8'}>
            {
                categories.map((item, index)=>(
                 <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
                    <Text children={item}/>
                 </Button>
                ))
            }
        </HStack>

        <Stack  direction={['column', 'row']} flexWrap={'wrap'} justifyContent={['flex-start', 'space-evenly']} alignItems={['center', 'flex-start']}>
            <Course
            title={'Sample'}
            description={'sample'}
            views={23}
            imageSrc={'https://cdn.elearningindustry.com/wp-content/uploads/2016/09/online-course-development-process-must-know-outsource.jpeg'}
            id={'sample'}
            creator={'sampleboy'}
            lectureCount={2}
            addToPlaylistHandler={addToPlaylistHandler}
            />

        </Stack>
     </Container>
  )
}

export default Courses