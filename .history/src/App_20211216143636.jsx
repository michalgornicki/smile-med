import React from "react";
import "./App.css";
import Slide from "./wallpaper3.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <p>

<Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="py-5">
  <Container>
  <Navbar.Brand href="#home">SMILE MED</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features" className="mx-3 text-dark display-5">Cennik</Nav.Link>
      <Nav.Link href="#pricing" className="mx-3 text-dark">Zespół</Nav.Link>
      <Nav.Link href="#pricing" className="mx-3 text-dark">Gabinet</Nav.Link>
      <Nav.Link href="#pricing" className="mx-3 text-dark">Dla lekarzy</Nav.Link>
      <Nav.Link href="#pricing" className="mx-3 text-dark">Aktualności</Nav.Link>
      <NavDropdown title="Lista" id="collasible-nav-dropdown" className="mx-3">
        <NavDropdown.Item href="#action/3.1">Gabinet</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Dla lekarzy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Aktualności</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Kontakt</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      <Carousel variant="dark">
  <Carousel.Item className="">
    <img
      className="d-block w-100"
      src={Slide}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </p>
  );
}

export default App;
