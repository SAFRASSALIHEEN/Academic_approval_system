import React from 'react';
import { Link } from 'react-router-dom';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,

} from 'mdb-react-ui-kit';

export default function ProfilePage() {

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4" className='w-auto'>
            <MDBCard className="mb-4">
              <MDBCardBody className="text-left pt-5 ps-5 m-0">
                <MDBCardImage
                  src='mine.jpg'
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                   />


                   <div>
                   <p className="text-muted mb-1">Safras Saliheen</p>
                   <p className="text-muted mb-1">2019/E/121</p>
                   </div>
                
                
              <div className='d-flex'>
                <div className='m-5 p-5 pt-0' >
                  <h1 className='p-4 cen text-center'>
                      Personal Infomation
                  </h1>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Safras Saliheen</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">2019e121@eng.jfn.ac.lk</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Date Of Birth</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">01.12.1999</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Home Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">No:10, T.C Road, Panadura</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>NIC</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">993360327V</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Z-score(or gpa should discuss)</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">3.35</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Contact</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">0769668245</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </div>
                <div className="vertical-line mt-5"></div>
                <div className='m-5 p-5 pt-0'>
                
                  <h1 className='p-4 cen text-center'>
                      University Information
                  </h1>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Register Number</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">2019/E/121</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>University Email:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">2019e121@eng.jfn.ac.lk</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Registration Date:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">19-11-2019</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Current Semester:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">6</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Department:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Computer Engineering</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Academic Year:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">2018/2019</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Semester Based Infomation:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                          <div>
                            <Link to="/SemesterBaseInfomation">
                                <button>See more</button>
                            </Link>                            
                          </div>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </div>

              </div>
              


              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                

                <br/>
                <br/>
                
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol> */}
          
        </MDBRow>
      </MDBContainer>

    </section>
    
  );
}