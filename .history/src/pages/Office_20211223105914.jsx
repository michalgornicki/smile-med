import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Gallery1 from "../gallery(1).jpg";
import Gallery2 from "../gallery(2).jpg";
import Gallery3 from "../gallery(3).jpg";
import Gallery4 from "../gallery(4).jpg";
import Gallery5 from "../gallery(5).jpg";
import Gallery6 from "../gallery(6).jpg";
import Gallery7 from "../gallery(7).jpg";
import Gallery8 from "../gallery(8).jpg";
import { useEffect } from 'react';


export default function Office() {

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

  return (
    <div>

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

    </div>
  );
}
