import { useEffect, useState } from "react";
import { Alert, Button, Container, Table } from "react-bootstrap";
import { deleteEmployee ,fetchAllEmployee } from "../services/EmployeeService.js";

export function EmployeeList(){
    const [employee, setEmployee] = useState([]);
    const [isFetched, setFetched] = useState(false);
    const handleFetchEmployee = async()=>{
        const response = await fetchAllEmployee();
        setEmployee(response.data);
        setFetched({ isFetched: true });
    }
    useEffect(()=>{
        handleFetchEmployee();
    },[])

    return (
        <Container>
            <Alert className="text-center info mt-3">Employees List </Alert>
            {isFetched ? <Table  className="text-center mt-3" lg={8} bordered>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> FatherName </th>
                        <th> MotherName </th>
                        <th> Phone </th>
                        <th> Salary </th>
                        <th> Department </th>
                        <th>Functions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map((user) => {
                            return (
                                <tr key={user._id}>
                                    <td >{user.name}</td>
                                    <td >{user.fatherName}</td>
                                    <td >{user.motherName}</td>
                                    <td >{user.phone}</td>
                                    <td >{user.salary}</td>
                                    <td >{user.department}</td>
                                    <td><Button type="submit" variant="danger" onClick={async()=>{
                                        await deleteEmployee(user._id);
                                        handleFetchEmployee();
                                    }}>Delete</Button></td>

                                    <td><Button type="submit" variant="success" onClick={()=>{
                                    }}>Edit</Button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table> : console.log("This run in null value ")}
        </Container>
    );
}