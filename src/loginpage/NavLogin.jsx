import React from 'react';


const NavLogin = () => {
  return (
    <div>
        <div className='bg-green pt-4 px-4 pb-2 '>
            {/* ps=pl pe<pr   <=old version */}
            <div className='bg-white d-flex nav-inner justify-content-center'>
                {/* fac picture and name */}
                <div className='d-flex m-9 '>
                    <div className='d-flex me-2'>
                        <img src='/SISLogo.png' width='50' height='50' alt='sislogo'/>
                    </div>
                    <div>
                        <h5 className='m-0'>
                            {/* m-margin   mt,mp... */}
                            Academic Approval System
                        </h5>
                        <small>
                            Faculty Of Engineering - University Of Jaffna
                        </small>
                    </div>
                </div>
                        
                
                <div>
                        
                </div>                

            </div>
        </div>
    </div>
  )
}




export default NavLogin;



