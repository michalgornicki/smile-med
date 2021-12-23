import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import {Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const TopN = () => {
    return (
      <div id="container2">
        <h2 className="header " id="header-projects">
          Projects
        </h2>
  
        <div className="project-wrapper">
          <Carousel variant="dark" fade indicators={false} pause={false} interval="2500">
            <Carousel.Item>
              <img className="d-block w-100" src={Image1} alt="First slide" />
              <a href="https://michalgornicki.github.io/smile-med/">
                {" "}
                <Carousel.Caption className="bg-white w-50 m-auto black shadow shadow">
                  <h3>Dental office, commercial website</h3>
                  <p>React js, Bootstrap, React Router.</p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Image2} alt="Second slide" />
  
              <a href="https://michalgornicki.github.io/smartify/">
                <Carousel.Caption className="bg-white w-50 m-auto black shadow">
                  <h3>Smart Home, commercial website</h3>
                  <p>React JS.</p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Image3} alt="Third slide" />
  
              <a href="https://michalgornicki.github.io/electronet/">
                <Carousel.Caption className="bg-white w-50 m-auto black shadow">
                  <h3>Electronics shop</h3>
                  <p>React JS.</p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Image4} alt="Third slide" />
  
              <a href="http://fantasyblog.mywebcommunity.org">
                <Carousel.Caption className="bg-white w-50 m-auto black shadow">
                  <h3>Wordpress blog</h3>
                  <p>Html, CSS, Wordpress.</p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Image5} alt="Third slide" />
  
              <a href="https://michalgornicki.github.io/space_x_clone">
                <Carousel.Caption className="bg-white w-50 m-auto black shadow">
                  <h3>Space X mission explorer</h3>
                  <p>React js, React Hooks, GraphQL database.</p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Image6} alt="Third slide" />
  
              <a href="https://michalgornicki.github.io/bitcoin-virtual">
                <Carousel.Caption className="bg-white w-50 m-auto black shadow">
                  <h3>Virtual bitcoin buying app</h3>
                  <p>React js, React hooks.</p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Image7} alt="Third slide" />
  
              <a href="https://michalgornicki.github.io/insta-note">
                <Carousel.Caption className="bg-white w-50 m-auto black shadow">
                  <h3>Todo list app</h3>
                  <p>React js, React hooks.</p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Image8} alt="Third slide" />
  
              <a href="https://www.youtube.com/watch?v=Xq_YM1_ebq4">
                {" "}
                <Carousel.Caption className="bg-white w-50 m-auto black shadow">
                  <h3>Weather app</h3>
                  <p>React, openweatherapp weather API.</p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Image9} alt="Third slide" />
  
              <a href="https://michalgornicki.github.io/virtualpet">
                <Carousel.Caption className="bg-white w-50 m-auto black shadow">
                  <h3>Virtual pet app</h3>
                  <p>HTML, CSS, JS.</p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  };

export default TopNavbar;