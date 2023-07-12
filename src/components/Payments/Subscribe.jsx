import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
   <Container h={'90vh'} p={'16'}>
    <Heading textAlign={'center'} my={'8'}  children="Welcome"/>
    <VStack boxShadow={'lg'} alignItems={'stretch'} borderRadius={'lg'} spacing={'0'}>
        <Box bg={'yellow.400'} p={'4'} css={{borderRadius:"8px 8px 0 0 "}}>
        <Text  children="Pro Pack - ₹299.00"/>
        </Box>
        
        <Box p={'4'}>
        <VStack  textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text children="Join pro pack and get access to all content."/>
            <Heading children="₹299 Only" size={'md'}/>
        </VStack>
        <Button width={'full'} colorScheme='yellow' my={'8'}>Buy Now</Button>
        </Box>
    </VStack>
    <Box bg={'blackAlpha.600'} borderRadius={'0 0 8px 8px'}>
        <Heading children="100% Refund at Cancellation" size={'sm'} pt={'4'} color={'white'} pl={'4'}/>
        <Text children="*Terms and Conditions Apply" pb={'4'} pl={'4'}/>

    </Box>
   </Container>
  )
}

export default Subscribe