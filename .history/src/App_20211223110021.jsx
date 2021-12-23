import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
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
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Office from "./Pages/Office";
import News from "./Pages/News";

function App() {



  return (
    <Router>
      <div>

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
          <Nav.Link  className="mx-3 text-green display-7 display-none">
            telefon: 662-444-222
          </Nav.Link>
          <Nav.Link  className="mx-3 text-green display-7 display-none">
            napisz do nas: smile@med.pl
          </Nav.Link>
        </Nav>
      </Container>

      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-start">
            <Nav.Link className="mx-3 text-dark display-7"  onClick={() => window.scrollTo(0, 0)}>
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
            <Nav.Link  className="mx-3 text-dark display-7">
              Cennik
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Team" element={<Team/>} />
          <Route path="/Office" element={<Office/>} />
          <Route path="/News" element={<News/>} />
        </Routes>
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
          <Nav.Link onClick={() => window.scrollTo(0, 0)}
            className="mx-3 text-light display-7 very-bold"
          >
            SMILE MED
          </Nav.Link>
          <Nav.Link className="mx-3 text-light display-7" onClick={() => window.scrollTo(0, 0)}>
          Początek
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

    </Router>
  );
}

export default App;
