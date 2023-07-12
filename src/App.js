import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home/home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Notfound from './components/Layout/Notfound/Notfound';
import Subscribe from './components/Payments/Subscribe';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import Coursepage from './components/CoursePage/Coursepage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import Users from './components/Admin/Users/Users';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';




function App() {

  // window.addEventListener("contextmenu", (e)=>{
  //   e.preventDefault()
  // })
  return (
<Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/forgotpassword' element={<ForgotPassword/>}/>
    <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/request' element={<Request/>}/>
    <Route path='*' element={<Notfound/>}/>
    <Route path='/subscribe' element={<Subscribe/>}/>
    <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
    <Route path='/paymentfail' element={<PaymentFail/>}/>
    <Route path='/course/:id' element={<Coursepage/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/changepassword' element={<ChangePassword/>}/>
    <Route path='/updateprofile' element={<UpdateProfile/>}/>

    {/* Admin Routes */}

    <Route path='/admin/dashboard' element={<Dashboard/>}/>
    <Route path='/admin/createcourse' element={<CreateCourse/>}/>
    <Route path='/admin/courses' element={<AdminCourses/>}/>
    <Route path='/admin/users' element={<Users/>}/>

  </Routes>
  <Footer/>
</Router>
  );
}

export default App;
