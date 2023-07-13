import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardEx from '../components/CardEx'
import Homecard from '../components/Homecard'

//import VerticalDividerExample from '../components/VerticalDividerExample'
//import TableEx from '../components/TableEx'
//rafce- shortcut

const Title = () => {
  return (
    <h1 className='text-black text-center bg-green'>
      Home Page
    </h1>
    
  )
}

const Home = () => {
  return (
    <div>
      
        <Navbar/>
        {/* content */}
        <Title/>
        <div className='d-flex justify-content-center'>
          <div className='mx-5 pd-5'>
              <CardEx title="Advisee Details" 
                      text="My Text" 
                      size='15rem' 
                      imgSrc="./mine_01.png"
                      link='/AdviseeDetails' />
          </div>
          <div className='mx-5'>
              <CardEx title="Advisor Approval Details" 
                      text="The approved details" 
                      size='16rem' 
                      imgSrc="./mine_03.png"
                      link='/AdvisorApprovalDetails' />
          </div>
          <div className='mx-5'>
              <CardEx title="Coordinating Course Details" 
                      text="My Text"
                      size='15rem' 
                      imgSrc="./pngwing.com (6).png"
                      link='/CoordinatingCourseDetails' />
          </div>
          
        </div>      
        {/* footer */}
        <Footer/>
        
    </div>
  )
}

export default Home;