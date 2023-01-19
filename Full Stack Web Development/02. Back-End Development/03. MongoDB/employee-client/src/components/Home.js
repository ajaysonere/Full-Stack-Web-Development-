import { Alert, Container } from "react-bootstrap";

export function Home(){
    return(
        <>
          <Container className="mt-5 text-center">
             <Alert variant="success">Wel-Come To Employee Mangement System </Alert>
             <p>You can Perform Curd Operation On This Employee Management System </p>
          </Container>
        </>
    );
}