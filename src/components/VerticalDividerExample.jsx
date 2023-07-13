import React from 'react';
import Card from 'react-bootstrap/Card';

function VerticalDividerExample() {
  return (
    <div className="container" style={{display: 'flex', alignItems: 'center'}}>
      <div className="text">
        <p>Some text here</p>
      </div>
      <div className="vr"></div>
      <div className="cards" style={{display: 'flex'}}>
        <Card className="shadow-sm border-0" style={{width: '100px', margin: '10px'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body className="p-4">
            <Card.Title className="fw-bold">Card 1</Card.Title>
          </Card.Body>
        </Card>
        <Card className="shadow-sm border-0" style={{width: '100px', margin: '10px'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body className="p-4">
            <Card.Title className="fw-bold">Card 2</Card.Title>
          </Card.Body>
        </Card>
        <Card className="shadow-sm border-0" style={{width: '100px', margin: '10px'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body className="p-4">
            <Card.Title className="fw-bold">Card 3</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default VerticalDividerExample;