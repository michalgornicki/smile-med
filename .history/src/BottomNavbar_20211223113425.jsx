import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";



const BottomNavbar = () => {
    return(

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
            className="mx-3 text-light display-7 very-bold"   onClick={() => window.scrollTo(0, 0)}
          >
            <Link to="/">SMILE MED</Link>
          </Nav.Link>
          <Nav.Link className="mx-3 text-light display-7" onClick={() => window.scrollTo(0, 0)}>
          <Link to="/">Początek</Link>
          </Nav.Link>
          <Nav.Link  className="mx-3 text-light display-7">
          <Link to="/team">Zespół</Link>
          </Nav.Link>
          <Nav.Link  className="mx-3 text-light display-7">
          <Link to="/office">Gabinet</Link>
          </Nav.Link>
          <Nav.Link  className="mx-3 text-light display-7">
          <Link to="/news">Aktualności</Link>
          </Nav.Link>
          <Nav.Link  className="mx-3 text-light display-7">
            telefon: 662-444-222
          </Nav.Link>
          <Nav.Link  className="mx-3 text-light display-7">
            napisz do nas: smile@med.pl
          </Nav.Link>
        </Nav>
      </Container>
      </Navbar>

)
}

export default BottomNavbar;