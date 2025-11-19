import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";
import "./NavigationBar.css";

function NavigationBar() {
  // MUST React Bootstrapify
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="sm" fixed="top">
      <Navbar.Brand href="#home" id="logo">Sneaker Vault</Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="links">
            <Nav.Link as={Link} to="/sneakers">Sneakers</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as = {Link} to = "/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;
