import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Profile1 from "./profile(1).jpg";
import Profile2 from "./profile(2).jpg";
import Profile3 from "./profile(3).jpg";
import Profile4 from "./profile(4).jpg";


export default function Team() {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <span className="display-5 very-bold p-2">SMILE MED</span>
          </Navbar.Brand>

          <Nav className="justify-content-end">
            <Nav.Link href="#features" className="mx-3 text-green display-7">
              telefon: 662-444-222
            </Nav.Link>
            <Nav.Link href="#features" className="mx-3 text-green display-7">
              napisz do nas: smile@med.pl
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="py-3 p-auto"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-start">
              <Nav.Link className="mx-3 text-dark display-7">
                <Link to="/">Początek</Link>
              </Nav.Link>
              <Nav.Link className="mx-3 text-dark display-7">
                <Link to="/team">Zespół</Link>
              </Nav.Link>
              <Nav.Link href="#pricing" className="mx-3 text-dark display-7">
                Gabinet
              </Nav.Link>
              <Nav.Link href="#pricing" className="mx-3 text-dark display-7">
                Aktualności
              </Nav.Link>
              <NavDropdown
                title="Usługi"
                id="collasible-nav-dropdown"
                className="mx-3 text-dark display-7"
              >
                <NavDropdown.Item href="#action/3.1">
                  Ortodoncja
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Protetyka
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Chirurgia stomatologiczna
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Implanty</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Protetyka
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.6">
                  Stomatologia dziecięca
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing" className="mx-3 text-dark display-7">
                Cennik
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content">

      
      <CardGroup className="flex-column w-75 m-auto mt-5" >
  <Card className="flex-row mb-5">
    <Card.Img variant="top" src={Profile1} className="w-50 height-70vh"/>
    <Card.Body>
      <Card.Title className="display-5">Anna Michalska - lekarz stomatolog</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="flex-row mb-5">
    <Card.Img variant="top" src={Profile2} className="w-50 height-70vh" />
    <Card.Body>
      <Card.Title className="display-6">Grzegorz Wiśniewski - lekarz stomatolog</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>

  </Card>
  <Card className="flex-row mb-5">
    <Card.Img variant="top" src={Profile3} className="w-50 height-70vh" />
    <Card.Body>
      <Card.Title className="display-5">Klaudia Jabłońska - lekarz stomatolog</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>

  </Card>
  <Card className="flex-row mb-5">
    <Card.Img variant="top" src={Profile4} className="w-50 height-70vh" />
    <Card.Body>
      <Card.Title className="display-5">Piotr Stasiak - lekarz stomatolog</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>

  </Card>
</CardGroup>


      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="secondary"
        variant="dark"
        className="py-6 p-auto mt-5"
      >
        <Container>
          <Nav className="justify-content-start w-75 m-auto">
            <Nav.Link
              href="#features"
              className="mx-3 text-light display-7 very-bold"
            >
              SMILE MED
            </Nav.Link>
            <Nav.Link href="#features" className="mx-3 text-light display-7">
              Cennik
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-3 text-light display-7">
              Zespół
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-3 text-light display-7">
              Gabinet
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-3 text-light display-7">
              Dla lekarzy
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-3 text-light display-7">
              Aktualności
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
