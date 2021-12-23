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
import TopNavbar from "./TopNavbar";

function App() {



  return (

    <div>

    <TopNavbar />

    <Router>
      <div>


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

    </Router>

  </div>

  );
}

export default App;
