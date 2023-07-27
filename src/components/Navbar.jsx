import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="bg-green pt-4 px-4 pb-2 ">
        {/* ps=pl pe<pr   <=old version */}
        <div className="bg-white d-flex nav-inner p-2">
          {/* fac picture and name */}
          <div className="d-flex m-9">
            <div className="d-flex me-2">
              <img src="/SISLogo.png" width="50" height="50" alt="sms-logo" />
            </div>
            <div className="me-3">
              <h5 className="m-0">
                {/* m-margin   mt,mp... */}
                Academic Approval
              </h5>
              <small>Faculty Of Engineering - University Of Jaffna</small>
            </div>
          </div>
          {/* nev bar component */}
          <div className="d-flex">
            <ClickLink exact to="/home" label="Home" />
            <ClickLink exact to="/AdviseeDetails" label="Advisee Details" />
            <ClickLink
              exact
              to="/CoordinatingCourseDetails"
              label="Coordinating Course Details"
            />
            <ClickLink
              exact
              to="/AdvisorApprovalDetails"
              label="Advisor Approval Details"
            />
          </div>
          <div>
            
            <Link to="/loginpage">
                                <button>Logout</button>
            </Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

function ClickLink({ label, to, exact }) {
  return (
    //   exact={exact}
    <NavLink
      to={to}
      activeclassname="selected"
      className="d-flex nav-center-div p-2 rounded"
    >
      <h6 className="my-auto mx-3">{label}</h6>
    </NavLink>
  );
}

export default Navbar;