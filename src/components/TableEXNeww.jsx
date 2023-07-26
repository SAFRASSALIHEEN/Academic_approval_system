import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function TableExNew_01(props) {
  const navigate = useNavigate();
  return (
    
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Reg.No</th>
          <th scope='col'>Name</th>
          <th scope='col'>Semester</th>
          <th scope='col'>Credit</th>
          <th scope='col'>Submitted date</th>
          <th scope='col'>Approval</th>
          <th scope='col'>Full details</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {props.data.map((row) => (
          <tr key={row.regno}>
            <td>
            <p className='fw-normal mb-1'>{row.regno}</p>
            </td>
            <td>
            <p className='fw-normal mb-1'>{row.name}</p>
            </td>
            <td>
            <p className='fw-normal mb-1'>{row.semester}</p>
            </td>
            <td>
            <p className='fw-normal mb-1'>{row.credit}</p>
            </td>
            <td>
            <p className='fw-normal mb-1'>{row.submitteddate}</p>
            </td>
            <td>
            <p className='fw-normal mb-1'>{row.approval}</p>
            </td>
            <td>
            <p className='fw-normal mb-1'>{row.fulldetails}</p>
            </td>
            <td>
              <button color='dark' rounded size='sm' onClick={() => navigate(row.link)}>
                View
              </button>
            </td>
          </tr> 
        ))}
      </MDBTableBody> 
    </MDBTable> 
  ); 
} 

export default TableExNew_01;
