import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div style={{marginLeft: '350px', marginTop: '30px', width: '50%'}}>
          <Form style={{margin: '70px'}}>
          <Link to="/pages/register"><Button  variant="dark" size="lg" type="submit">
    CONTINUE AS GUEST
  </Button></Link>
  <p></p>
  <h3>LOG IN</h3>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Link to="/"><Button variant="dark" size="lg" type="submit">
    LOGIN
  </Button></Link>
  <p></p>
  <Link to="/pages/register"><Button variant="dark" size="lg" type="submit">
    CREATE ACCOUNT
  </Button></Link>
</Form>
        </div>
    );
};

export default Login;