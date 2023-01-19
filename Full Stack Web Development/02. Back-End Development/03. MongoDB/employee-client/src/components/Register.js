import { useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";

export function Register(){
    const [register,setregister] =  useState({});
    return (
       <>
          <Container className="mt-5 text-center">
             <Alert variant="primary">Register a New Employee</Alert>
          </Container>
          <Container>
             <Form>
                 <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label >Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name " name="name"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label >FatherName</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name " name="name"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label >MotherName</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name " name="name"></Form.Control>
                        </Form.Group>
                    </Col>
                 </Row>
             </Form>
          </Container>
       </>
    );
}