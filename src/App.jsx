
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './loginpage/LoginPage'
import Home from './pages/Home'
import AdviseeDetails from './pages/AdviseeDetails'
import CoordinatingCourseDetails from './pages/CoordinatingCourseDetails'
import AdvisorApprovalDetails from './pages/AdvisorApprovalDetails'
import StudentsProfile from './pages/StudentsProfile'
import SemesterBaseInfomation from './pages/SemesterBaseInfomation'
//import all pages
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/loginpage' element={<LoginPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/AdviseeDetails' element={<AdviseeDetails/>}/>
        <Route path='/coordinatingCourseDetails' element={<CoordinatingCourseDetails/>}/>
        <Route path='/AdvisorApprovalDetails' element={<AdvisorApprovalDetails/>}/>
        <Route path='/StudentsProfile' element={<StudentsProfile/>}/>
        

        {/* create router base on semester
         */}

        <Route path='/SemesterBaseInfomation' element={<SemesterBaseInfomation/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
