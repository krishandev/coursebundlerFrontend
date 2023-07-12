import { Heading, Stack, VStack, Text, Button, Image, Box, HStack } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from 'react'
import './home.css'
import vg from '../../assets/images/vg1.png'
import {CgGoogle, CgYoutube} from 'react-icons/cg'
import {SiCoursera, SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'
import introVideo from './../../assets/videos/OnlineCourses.mp4'

const home = () => {
  return (
    <section className='home'>
      <div className='container'>
      <Stack direction={['column', 'row']} height="100%" justifyContent={['center', 'space-between']} alignItems={'center'}  spacing={['16', '56']}>
        <VStack width={'full'} alignItems={['center', 'flex-end']} spacing={'8'}>
        <Heading children="Learn from the Experts" size={'2xl'}/>
        <Text fontSize={'2xl'} fontFamily={'cursive'} textAlign={['center', 'left']} children="Find Valueable Conent at Reasonable Price"/>
        <Link to="/courses">
          <Button size={'lg'} colorScheme='yellow'>Explore Now</Button>
        </Link>
        </VStack>
        <Image src={vg} boxSize={'md'} objectFit={'contain'} className='vectorGraphics'/>
      </Stack>
      </div>
      <Box border={'2px'} padding={'8'} bg={'blackAlpha.800'}>
        <Heading children="OUR BRANDS" color={'yellow.400'} textAlign={'center'} fontFamily={'body'}/>

        <HStack className='brandBanner' justifyContent={'space-evenly'} marginTop={'4'}>
         <CgGoogle/>
         <CgYoutube/>
         <SiCoursera/>
         <SiUdemy/>
         <DiAws/>
        </HStack>
      </Box>

      <div className='container2'>
        <video controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}></video>
      </div>

    </section>
  )
}

export default home