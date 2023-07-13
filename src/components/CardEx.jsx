import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Navigate } from 'react-router-dom';


// //second way to Navigate

// import { useHistory } from 'react-router-dom';

// function handleClick() {
//   const history = useHistory();
//   history.push('/path/to/page');
// }

// <button onClick={handleClick}>View</button>



function CardEx(props) { // renamed function
  return (
    <Card style={{ width: props.size }}>
      <Card.Img variant="top"  src={props.imgSrc} />
      
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Link to={props.link}>
              <Button variant="primary" className='bg-green'>view</Button>
        </Link>
            

      </Card.Body>
    </Card>
  );
}

export default CardEx; // renamed export statement
