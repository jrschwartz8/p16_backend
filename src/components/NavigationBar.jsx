import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

function NavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="sm" fixed="top">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  )
}

export default NavigationBar;