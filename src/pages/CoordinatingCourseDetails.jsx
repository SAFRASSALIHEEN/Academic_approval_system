import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import TableEx from '../components/TableExNew'
import TableExNew from '../components/TableExNew'

const data = [
  {
    code: 'EC5080',
    course: 'Software construction',
    semester : '5',
    credit: '3',
    academicYear: '2020',
    
  },
  {
    code: 'EC6060',
    course: 'Software Engineering',
    semester : '6',
    credit: '3',
    academicYear: '2021',
  },

];

const Title = () => {
  return (
    <h1 className='text-black text-center bg-green m-0 nav-inner'>
      Coordinating Course Details
    </h1>
    
  )
}
const CoordinatingCourseDetails = () => {
  return (
    <div>
        <Navbar/>
        {/* content */}
        <Title/>
        <br/>
        <TableExNew data={data} />
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default CoordinatingCourseDetails