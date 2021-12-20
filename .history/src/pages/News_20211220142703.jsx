import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";
import Gallery1 from "../gallery(1).jpg";
import Gallery2 from "../gallery(2).jpg";
import Gallery3 from "../gallery(3).jpg";
import Gallery4 from "../gallery(4).jpg";
import Gallery5 from "../gallery(5).jpg";
import Gallery6 from "../gallery(6).jpg";
import Gallery7 from "../gallery(7).jpg";
import Gallery8 from "../gallery(8).jpg";

export default function News() {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <span className="display-5 very-bold p-2">SMILE MED</span>
          </Navbar.Brand>

          <Nav className="justify-content-end">
            <Nav.Link className="mx-3 text-green display-7">
              telefon: 662-444-222
            </Nav.Link>
            <Nav.Link className="mx-3 text-green display-7">
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
              <Nav.Link className="mx-3 text-dark display-7">
                <Link to="/office">Gabinet</Link>
              </Nav.Link>
              <Nav.Link className="mx-3 text-dark display-7">
                Aktualności
              </Nav.Link>
              <NavDropdown
              title="Usługi"
              id="collasible-nav-dropdown"
              className="mx-3 text-dark display-7"
            >
              <NavDropdown.Item>
                Ortodoncja
              </NavDropdown.Item>
              <NavDropdown.Item>
                Protetyka
              </NavDropdown.Item>
              <NavDropdown.Item>
                Chirurgia stomatologiczna
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Implanty</NavDropdown.Item>
              <NavDropdown.Item>
                Protetyka
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Stomatologia dziecięca
              </NavDropdown.Item>
            </NavDropdown>
              <Nav.Link className="mx-3 text-dark display-7">Cennik</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content">
        <Carousel variant="dark" className="my-5">
          <Carousel.Item>
            <img className="d-block w-100" src={Gallery1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Gallery2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Gallery3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Gallery4} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Gallery5} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Gallery6} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Gallery7} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Gallery8} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="secondary"
        variant="dark"
        className="py-6 p-auto mt-5"
      >
        <Container>
          <Nav className="justify-content-center w-100 m-auto">
            <Nav.Link
             
              className="mx-3 text-light display-7 very-bold"
            >
              SMILE MED
            </Nav.Link>
            <Nav.Link className="mx-3 text-light display-7">
              Cennik
            </Nav.Link>
            <Nav.Link className="mx-3 text-light display-7">Zespół</Nav.Link>
            <Nav.Link className="mx-3 text-light display-7">Gabinet</Nav.Link>

            <Nav.Link className="mx-3 text-light display-7">
              Aktualności
            </Nav.Link>
            <Nav.Link className="mx-3 text-light display-7">
              telefon: 662-444-222
            </Nav.Link>
            <Nav.Link className="mx-3 text-light display-7">
              napisz do nas: smile@med.pl
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
