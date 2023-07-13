import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBeer } from 'react-icons/fa';



function Homecard(props) { // renamed function
  return (
    <Card style={{ width: '21rem ' }}>
      <FaBeer className='icon-card-home' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">view</Button>
      </Card.Body>
    </Card>
  );
}

export default Homecard; // renamed export statement
