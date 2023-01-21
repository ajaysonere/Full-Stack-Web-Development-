import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveEmployee } from "../services/EmployeeService.js";

export function Register(){
    const [register,setregister] =  useState({});
    const [isregisterd , setregistered] = useState(false)
    const handleFiledChange = (event)=>{
        setregister({...register ,[event.target.name] : event.target.value })
    };
    const handleSubmit = async (event)=>{
         event.preventDefault();
         const response = await saveEmployee(register);
         console.log(response.data);
         setregistered({isregisterd: true});
    }
    return (
       <>
          <Container className="mt-5 text-center">
             <Alert variant="primary">Register a New Employee</Alert>
          </Container>
          <Container>
                <Form onSubmit={handleSubmit}>
                 <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label >Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name " name="name" onChange={handleFiledChange}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label >FatherName</Form.Label>
                                <Form.Control type="text" placeholder="Enter Father Name " name="fatherName" onChange={handleFiledChange}>
                                </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label >MotherName</Form.Label>
                                <Form.Control type="text" placeholder="Enter  Mother Name " name="motherName" onChange={handleFiledChange}>
                                </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                         <Form.Group className="mb-3">
                                <Form.Label >Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="XXXXXXXXXX" name="phone" onChange={handleFiledChange}>
                                </Form.Control>
                         </Form.Group>
                         <Form.Group className="mb-3">
                               <Form.Label >Salary</Form.Label>
                                <Form.Control type="number" placeholder="10000/-" name="salary" onChange={handleFiledChange}>
                                </Form.Control>
                         </Form.Group>
                         <Form.Group className="mb-3">
                                <Form.Label >Department</Form.Label>
                                <Form.Control type="text" placeholder="Enter Department Name " name="department" onChange={handleFiledChange}>
                                </Form.Control>
                         </Form.Group>
                        </Col>
                 </Row>
                    <Button type="submit" className="btn btn-primary text-center" > Register </Button>
             </Form>
          </Container>
          {
                isregisterd ? <Container className="mt-3">
                    <Alert variant="success"> Employee Registered Successfully </Alert>
                </Container> : null
          }
       </>
    );
}