import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Slide0 from "./0.jpg";
import Slide1 from "./1.jpg";
import Slide2 from "./2.jpg";
import Slide3 from "./3.jpg";
import Slide4 from "./4.jpg";
import Slide5 from "./5.jpg";
import Card1 from "./card1.jpg";
import Card2 from "./card2.jpg";
import Card3 from "./card3.jpg";
import Card4 from "./card4.jpg";

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

