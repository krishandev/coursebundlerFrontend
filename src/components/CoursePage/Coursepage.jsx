import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from './../../assets/videos/OnlineCourses.mp4'

const Coursepage = () => {

  const [lectureNumber, setLectureNumber]=useState(0);
  const lectures=[
    {
      _id:'#lectureid1',
      title:'Lecture Title 1',
      description:'This is lecture Description1. This is lecture Description.',
      video:{
        url:'#videourl1'
      }
    },

    {
      _id:'#lectureid2',
      title:'Lecture Title 2',
      description:'This is lecture Description2. This is lecture Description.',
      video:{
        url:'#videourl2'
      }
    },

    {
      _id:'#lectureid3',
      title:'Lecture Title 3',
      description:'This is lecture Description3. This is lecture Description.',
      video:{
        url:'#videourl3'
      }
    }
  ]


  return (
       <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
        <Box>
        <video controls controlsList='nodownload noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}></video>

        <Heading m={'4'} children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`}/>
        <Heading m={'4'} children="Description"/>
        <Text m={'4'} children={lectures[lectureNumber].description}/>
        </Box>

        <VStack>
        {
          lectures.map((item, index)=>(
            <Button key={item._id}
            onClick={()=>setLectureNumber(index)}
            style={{
              width:'100%',
              padding:'1rem',
              textAlign:'center',
              margin:0,
              borderBottom:'1px solid rgba(0, 0, 0, 0.2)'
            }}
            >
              <Text>
                #{index+1} {item.title}
              </Text>
            </Button>
          ))
        }

        </VStack>

       </Grid>
  )
}

export default Coursepage