import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import CardEx from '../components/CardEx'
//import VerticalDividerExample from '../components/VerticalDividerExample'
//import TableEx from '../components/TableEx'
import ProfilePage from '../components/ProfilePage'

const Title = () => {
  return (
    <h1 className='text-black text-center bg-green nav-inner'>
      Student's Details
    </h1>
    
  )
}

const StudentsProfile = () => {
  return (
  <div>
    <Navbar />
    <Title/>
      
    <ProfilePage />
    <Footer/>
  </div>
    
  )
}

export default StudentsProfile