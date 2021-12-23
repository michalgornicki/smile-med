import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TopNavbar = () => {
  return (
      <div  
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="py-3 p-auto flex-column shadow zIndex100"
    >
      <Container>
        <Navbar.Brand onClick={() => window.scrollTo(0, 0)}>
          <span className="display-5 very-bold p-2">SMILE MED</span>
        </Navbar.Brand>

        <Nav className="justify-content-end">
          <Nav.Link className="mx-3 text-green display-7 display-none">
            telefon: 662-444-222
          </Nav.Link>
          <Nav.Link className="mx-3 text-green display-7 display-none">
            napisz do nas: smile@med.pl
          </Nav.Link>
        </Nav>
      </Container>

      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-start">
            <Nav.Link
              className="mx-3 text-dark display-7"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Link to="/">Początek</Link>
            </Nav.Link>
            <Nav.Link className="mx-3 text-dark display-7">
              <Link to="/team">Zespół</Link>
            </Nav.Link>
            <Nav.Link className="mx-3 text-dark display-7">
              <Link to="/office">Gabinet</Link>
            </Nav.Link>
            <Nav.Link className="mx-3 text-dark display-7">
              <Link to="/news">Aktualności</Link>
            </Nav.Link>
            <NavDropdown
              title="Usługi"
              id="collasible-nav-dropdown"
              className="mx-3 text-dark display-7"
            >
              <NavDropdown.Item>Ortodoncja</NavDropdown.Item>
              <NavDropdown.Item>Protetyka</NavDropdown.Item>
              <NavDropdown.Item>Chirurgia stomatologiczna</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Implanty</NavDropdown.Item>
              <NavDropdown.Item>Protetyka</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Stomatologia dziecięca</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="mx-3 text-dark display-7">Cennik</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
