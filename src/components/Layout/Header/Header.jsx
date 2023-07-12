import React from 'react'
import {ColorModeSwitcher} from './../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


 const LinkButton=({url='/', title='Home', onClose})=>(
  <Link onClick={onClose} to={url}>
  <Button variant={'ghost'}>{title}</Button>
  </Link>
)
const Header = () => {
  const {isOpen, onOpen, onClose}=useDisclosure();

  const isAuthenticated=true;
const user={role:'admin'};

const logoutHandler=()=>{
  console.log("Logout working")
  onClose();
}

  return (
      <>
      <ColorModeSwitcher/>
      <Button height={'12'} width={'12'} rounded={'full'} colorScheme='yellow' position={'fixed'} top={'6'} left={'6'} onClick={onOpen} zIndex={'overlay'}>
      <RiMenu5Fill/>
      </Button>

      <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay/>
      <DrawerContent>
        <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
        <DrawerBody>
          <VStack spacing={'4'} alignItems={'flex-start'}>
          <LinkButton onClose={onClose} url="/" title="Home"/>
          <LinkButton onClose={onClose} url='/about' title='About'/>
          <LinkButton onClose={onClose} url="/courses" title="Browse All Courses"/>
          <LinkButton onClose={onClose} url="/request" title="Request a Course"/>
          <LinkButton onClose={onClose} url="/contact" title="Contact Us"/>


          <HStack bottom={'2rem'} justifyContent={'space-evenly'} width='80%' position={'absolute'}>
            {isAuthenticated?(<>
            <VStack>
              <HStack>
                <Link onClick={onClose} to={'/profile'}>
                  <Button colorScheme='yellow' variant={'ghost'}>Profile</Button>
                </Link>
                <Button variant={'ghost'} onClick={logoutHandler}><RiLogoutBoxLine/> Logout</Button>
              </HStack>
              {
                user && user.role==='admin' && <Link to='/admin/dashboard'>
                  <Button colorScheme='purple' variant={'ghost'}><RiDashboardFill style={{margin:'4px'}}/> Dashboard</Button>
                </Link>
              }
            </VStack>
            </>):(<>
            <Link to={'/login'}>
            <Button colorScheme='yellow'>Login</Button>
            </Link>
            <p>OR</p>
            <Link to={'/signup'}>
            <Button colorScheme='yellow'>SignUp</Button>
            </Link>

            </>)}
          </HStack>
          </VStack>


        </DrawerBody>
      </DrawerContent>

      </Drawer>
      </>
  )
}

export default Header