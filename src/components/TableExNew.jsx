import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function TableExNew(props) {
  const navigate = useNavigate();
  return (
    
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Code</th>
          <th scope='col'>Course</th>
          <th scope='col'>Semester</th>
          <th scope='col'>Credit</th>
          <th scope='col'>Academic year</th>
          <th scope='col'>Full details</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {props.data.map((row) => (
          <tr key={row.code}>
            <td>
            <p className='fw-normal mb-1'>{row.code}</p>
            </td>
            <td>
            <p className='fw-normal mb-1'>{row.course}</p>
            </td>
            <td>
            <p className='fw-normal mb-1'>{row.semester}</p>
            </td>
            <td>
            <p className='fw-normal mb-1'>{row.credit}</p>
            </td>
            <td>
            <p className='fw-normal mb-1'>{row.academicYear}</p>
            </td>
            <td>
              <button color='dark' size='sm' onClick={() => navigate(row.link)}>
                View
              </button>
            </td>
          </tr> 
        ))}
      </MDBTableBody> 
    </MDBTable> 
  ); 
} 

export default TableExNew;
