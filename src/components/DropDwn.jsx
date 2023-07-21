import React from 'react';
import { Dropdown, Divider } from 'react-bootstrap';

function DropDwn() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="Student Base Infomation">Action</Dropdown.Item>
          <Dropdown.Item href="Coordinating Corce details">Another action</Dropdown.Item>
          <Dropdown.Item href="Semester Base Infomation">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Divider />
      {/* Your special details and navigation here */}
    </>
  );
}
export default DropDwn;