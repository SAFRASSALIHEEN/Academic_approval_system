import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import CardEx from '../components/CardEx'
//import VerticalDividerExample from '../components/VerticalDividerExample'
import TableEx from '../components/TableEx'




// back end part 
//link is to go for the particuler place
const data = [
  {
    name: 'Safras Saliheen',
    email: '2019e121@eng.jfn.ac.lk',
    registerNumber: '2019/E/121',
    academicYear: '18/19',
    semester: '6',
    
    
    imgSrc: 'mine.jpg',
    link:'/StudentsProfile',
    
  },
  {
    name: 'Issath Anas',
    email: '2019e047@eng.jfn.ac.lk',
    registerNumber: '2019/E/047',
    academicYear: '18/19',
    semester: '6',
   
   
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
  },
  {
    name: 'Salitha Sadalinda',
    email: '2019e118@eng.jfn.ac.lk',
    registerNumber: '2019/E/118',
    academicYear: '18/19',
    semester: '6',
    
    
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
  },
  {
    name: 'Keerthana Manivannan',
    email: '2018e060@eng.jfn.ac.lk',
    registerNumber: '2018/E/060',
    academicYear: '17/18',
    semester: '6',
   
    
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
  },
  {
    name: 'Hansaja Hewanayaka',
    email: '2019e045@eng.jfn.ac.lk',
    registerNumber: '2019/E/045',
    academicYear: '18/19',
    semester: '6',
   
    
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    link:'https://mui.com/',
  },
];



const Title = () => {
  return (
    <h1 className='text-black text-center bg-green nav-inner'>
      Advisee Details
    </h1>
    
  )
}

//rafce- shortcut
const AdviseeDetails = () => {
  return (
    <div>
        <Navbar/>
        {/* content */}
       <Title/>
       <br/>

        <TableEx data={data} />
        
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default AdviseeDetails;