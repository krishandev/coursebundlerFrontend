import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'

const AdminCourses = () => {

  const courses=[{
    _id:'useriddddddd',
    title:'React Course',
    category:'Web Development',
    poster:{
      url:'https://cdn.elearningindustry.com/wp-content/uploads/2016/09/online-course-development-process-must-know-outsource.jpeg'
    },
    createdBy:'Krishan Dev',
    views:123,
    numOfVideos:12
  }];

  const {isOpen, onOpen, onClose}=useDisclosure()

  const courseDetailsHandler=userId=>{
    onOpen();
  };
  const deleteButtonHandler=userId=>{
    console.log(userId)
  };
 const deleteLectureButtonHandler=(courseId, lectureId)=>{
  console.log(courseId)
  console.log(lectureId)
 }

 const addLectureHandler=(e, courseId, title, description, video)=>{
  e.preventDefault();

 }

  return (
      <Grid templateColumns={['1fr', '5fr 1fr']} minH={'100vh'}>
           <Box p={['0', '8']} overflow={'auto'}>
      <Heading children="Admin Courses" textTransform={'uppercase'} textAlign={['center', 'left']} my={'16'}/>

      <TableContainer w={['100vw', 'full']}>
        <Table variant={'simple'} size={'lg'}>
          <TableCaption>All Available Courses in the Database</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Poster</Th>
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Creator</Th>
              <Th isNumeric>Views</Th>
              <Th isNumeric>Lectures</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              courses.map(item=>(
                <Row courseDetailsHandler={courseDetailsHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item}/>
              ))
            }
          </Tbody>

        </Table>

      </TableContainer>
      <CourseModal isOpen={isOpen} onClose={onClose} deleteButtonHandler={deleteLectureButtonHandler} addLectureHandler={addLectureHandler} id={"jddhhdgdrt"} courseTitle="React Course"/>

    </Box>

        <Sidebar/>

      </Grid>
  )
}

export default AdminCourses;

function Row({item, courseDetailsHandler, deleteButtonHandler}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url}/>
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button variant={'outline'} onClick={()=>courseDetailsHandler(item._id)} color={'purple.500'}>View Lectures</Button>
          <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}><RiDeleteBin7Fill/></Button>

        </HStack>
      </Td>
    </Tr>
  )
}