import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'


const Users = () => {

  const users=[{
    _id:"useriddddddd",
    name:"Krishan",
    email:"krishan@gmail.com",
    role:"admin",
    subscription:{
      status:"active"
    }
  }];

  const updateHandler=userId=>{
    console.log(userId)
  };
  const deleteButtonHandler=userId=>{
    console.log(userId)
  }

  return (
   <Grid templateColumns={['1fr', '5fr 1fr']} minH={'100vh'}>
    <Box p={['0', '16']} overflow={'auto'}>
      <Heading children="All Users" textTransform={'uppercase'} textAlign={['center', 'left']} my={'16'}/>

      <TableContainer w={['100vw', 'full']}>
        <Table variant={'simple'} size={'lg'}>
          <TableCaption>All Available Users in the Database</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Subscription</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              users.map(item=>(
                <Row updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item}/>
              ))
            }
          </Tbody>

        </Table>

      </TableContainer>

    </Box>

    <Sidebar/>

   </Grid> 
  )
}

export default Users;

function Row({item, updateHandler, deleteButtonHandler}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status==="active" ? "Active" : "Not Active"}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button variant={'outline'} onClick={()=>updateHandler(item._id)} color={'purple.500'}>Change Role</Button>
          <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}><RiDeleteBin7Fill/></Button>

        </HStack>
      </Td>
    </Tr>
  )
}