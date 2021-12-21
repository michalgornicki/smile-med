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
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Team" element={<Team/>} />
          <Route path="/Office" element={<Office/>} />
          <Route path="/News" element={<News/>} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
