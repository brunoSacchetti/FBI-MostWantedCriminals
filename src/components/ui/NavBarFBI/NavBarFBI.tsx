
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { FaUserSecret } from 'react-icons/fa'; // Icono relacionado con el FBI
import Form from 'react-bootstrap/Form';

const NavBarFBI = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <FaUserSecret /> FBI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://www.fbi.gov/about">About</Nav.Link>
            <Nav.Link href="#cases">Cases</Nav.Link>
            <Nav.Link href="https://www.fbi.gov/contact-us">Contact FBI</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form className="d-flex m-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{backgroundColor: "#0559a7", border: "none", cursor: "pointer"}} >Search</Button>
          </Form>
    </Navbar>
  );
};

export default NavBarFBI;
