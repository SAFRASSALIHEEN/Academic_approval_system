import React, { useState } from 'react'
import NavLogin from '../loginpage/NavLogin'
import Footer from '../components/Footer'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'





//the login components :must set regex and other things
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address ! ');
      return;
    }

    // Validate password requirements
    if (!isValidPassword(password)) {
      setErrorMessage(
        'Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.'
      );
      return;
    }

    // Perform login logic here with email and password
    // For demonstration purposes, we simply log the values
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form
    setEmail('');
    setPassword('');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100" style={{ height: '300px', width: '600px' }}>
      <div className="bg-green p-5 rounded-3" style={{ height: '600px', width: '800px' }}>
        <h1 className="text-center">Welcome</h1>
        <h5 className="text-center">Log into your account with credentials</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="rounded-pill"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="rounded-pill"
            />
          </Form.Group>
          <br/>
          <div>
            Foget password
          </div>
          <Button type="submit" variant="light" className="rounded-pill d-block m-auto p-auto">
            Login
          </Button>
            <br />
            
          <div className='justify-content-center p-0'>
                {errorMessage && <p style={{ color: 'red' }} className='text-center' >{errorMessage}</p>}
          </div>
          
        </Form>
      </div>
    </Container>
  );
};



const LoginPage = () => {
  return (
    <div>
        <NavLogin/>
        <LoginForm/>
        <Footer/>
    </div>
    
  )
}

export default LoginPage