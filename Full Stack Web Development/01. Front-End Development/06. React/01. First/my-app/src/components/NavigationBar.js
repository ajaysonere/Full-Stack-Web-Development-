import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from "react-router-bootstrap";
// import { Link } from "react-router-dom";

export function NavigationBar (){
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">AJAY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link >Score Board</Nav.Link>
                            </LinkContainer >
                            <LinkContainer to="/signup">
                                <Nav.Link >Sign Up</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/UsersData">
                                <Nav.Link >Users Data On Click </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/UserTable" >
                                <Nav.Link >Users List </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <ul>
                <li><Link to="/">Score Board</Link></li>
                <li><Link to="/sign">Sign Up</Link></li>
                <li><Link to="/UsersData">Users Data On Click</Link></li>
                <li><Link to="/UserTable">User List</Link></li>
            </ul> */}
        </>
    )
}