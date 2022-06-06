import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div style={{marginLeft: '350px', width: '50%'}}>
           <Form>
               <h3 style={{textAlign: 'center', margin: '50px'}}>REGISTER</h3>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Region</Form.Label>
      <Form.Select defaultValue="Central">
        <option>North</option>
        <option>South</option>
        <option>Central</option>
        <option>East</option>
        <option>West</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Pincode</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="I wish to recieve Newsletter on my Email" />
  </Form.Group>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="I accept the Privacy Statement" />
  </Form.Group>
<div className="d-grid gap-2">
  <Link to="/"><Button variant="dark" type="submit" size="lg">
    CREATE ACCOUNT
  </Button></Link>
  </div>
</Form>
        </div>
    );
};

export default Register;