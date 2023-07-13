import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TableExNeww from '../components/TableEXNeww'

const data = [
  {
    regno: '2019/E/121',
    name: 'Safras Saliheen',
    semester : '6',
    credit: '3',
    submitteddate: '21.04.2023',
    approval:'Yes',
  },
  {
    regno: '2019/E/118',
    name: 'Salitha Sadalinda',
    semester : '6',
    credit: '3',
    submitteddate: '25.04.2023',
    approval:'No',
  },

];
const Title = () => {
  return (
    <h1 className='text-black text-center bg-green m-0 nav-inner'>
      Advisor Approval Details
    </h1>
  )
}

const AdvisorApprovalDetails = () => {
  return (
    <div>
        <Navbar/>
        {/* content */}
        <Title/>
        <br/>
        <TableExNeww data={data} />
        {/* footer */}
        <Footer/>
    </div>
    
  )
}

export default AdvisorApprovalDetails