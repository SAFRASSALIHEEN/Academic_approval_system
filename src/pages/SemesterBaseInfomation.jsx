/* eslint-disable react/no-unknown-property */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const SemesterBasedInfomation = () => {
  return (
    <div>
        
        <div>
            <Navbar/>
        </div>
        <div>
            <Title/>
        </div>
        <div className='d-flex '>
            <div className='bg-white w-25 h-100 p-5 ps-0'>
                <SideBar/>
            </div>

            <div className='bg-white p-5 ps-0'>
                <DetaildTable/>
            </div>
        </div>
        
        <div>
            <Footer/>
        </div>
    </div>
    
  )
}

const Title = () => {
    return (
      <h1 className='text-black text-center bg-green nav-inner'>
        Semester Based Infomation
      </h1>
      
    )
  }


const SideBar=()=>{
    return (
        <div className='bg-white text-center'>
            <hr/>
            <h1>semester 01</h1>
            <hr/>
            <h1>semester 02</h1>
            <hr/>
            <h1>semester 03</h1>
            <hr/>
            <h1>semester 04</h1>
            <hr/>
            <h1>semester 05</h1>
            <hr/>
            <h1>semester 06</h1>
            <hr/>
            <h1>semester 07</h1>
            <hr/>
            <h1>semester 08</h1>
            <hr/>
        </div>
    )
}



//this table shows the right hand side data
const DetaildTable = () => {
    const data = [
      {
        courseCode: 'CSE101',
        courseName: 'Introduction to Computer Science',
        credit: 3,
        attempt: 1,
        registrationDate: '2023-01-15',
        result: 'Pass',
      },
      {
        courseCode: 'ENG201',
        courseName: 'English Composition',
        credit: 3,
        attempt: 2,
        registrationDate: '2023-02-20',
        result: 'Pass',
      },
      // Add more data objects for additional rows
    ];
  
    return (
      <div >
          <table>
              <thead>
              <tr>
               
                <th className='p-2'>Course Code</th>
                <th className='p-2'>Course Name</th>
                <th className='p-2'>Credit</th>
                <th className='p-2'>Attempt</th>
                <th className='p-2'>Registration Date</th>
                <th className='p-2'>Result</th>
                
                
              <hr/>  
              </tr>
              </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td>{row.courseCode}</td>
                      <td>{row.courseName}</td>
                      <td>{row.credit}</td>
                      <td>{row.attempt}</td>
                      <td>{row.registrationDate}</td>
                      <td>{row.result}</td>
                     
                    </tr>
                    
                    
                  ))}
                 
                </tbody>
          </table>
      </div>
      
    );
  };

export default SemesterBasedInfomation