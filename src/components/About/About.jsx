import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'
import introVideo from './../../assets/videos/OnlineCourses.mp4'
import { RiSecurePaymentFill } from 'react-icons/ri'
import termsAndCondition from './../../assets/docs/termsAndCondition'

const Founder=()=>(
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
        <VStack>
            <Avatar src='https://avatars.githubusercontent.com/u/46001614?v=4' boxSize={['40', '48']}/>
            <Text children="Co-Founder" opacity={'0.7'}/>
        </VStack>
        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
            <Heading children="Krishan Dev" size={['md', 'lg']}/>
            <Text textAlign={['center', 'left']} children="Hi, I am a Full Stack Developer. I have developved various website and I have knowledge of React, Mongodb, Node. I have knowledege of Digital Marketing as well."/>
        </VStack>

    </Stack>
)

const VideoPlayer=()=>(
    <Box>
                <video muted autoPlay loop controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}></video>
    </Box>
)

const TandC=({termsAndCondition})=>(
    <Box>
        <Heading children="Terms and Condition" size={'md'} textAlign={['center', 'left']} my={'4'}/>

        <Box h={'sm'} p={'4'} overflowY={'scroll'}>
            <Text letterSpacing={'widest'} fontFamily={'heading'} textAlign={['center', 'left']}>{termsAndCondition}</Text>
            <Heading size={'xs'} py={'4'} children="Refund only Applicable for cancellation within 7 days"/>

        </Box>
    </Box>
)
const About = () => {
  return (
<Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
    <Heading children="About Us" textAlign={['center', 'left']}/>
    <Founder/>
    <Stack direction={['column', 'row']} m={'8'} alignItems={'center'}>
        <Text textAlign={['center', 'left']} m={'8'} fontFamily={'cursive'} children="We are a video streming plateform with some premium course available for Premium users"/>

        <Link to='/subscribe'>
            <Button colorScheme='yellow' variant={'ghost'}>Checkout Our Plan</Button>
        
        </Link>
    </Stack>
    <VideoPlayer/>
    <TandC termsAndCondition={termsAndCondition}/>
    <HStack m={'4'} p={'4'}>
        <RiSecurePaymentFill/>
        <Heading children="Payment is secured by RazorPay" size={'xs'} fontFamily={'sans-serif'} textTransform={'uppercase'}/>
    </HStack>

</Container>
  )
}

export default About