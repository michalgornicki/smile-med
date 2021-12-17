import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Pagination from 'react-bootstrap/Pagination';
import Slide1 from "./1.jpg";
import Slide2 from "./2.jpg";
import Slide3 from "./3.jpg";
import Slide4 from "./4.jpg";
import Slide5 from "./5.jpg";


function App() {
  return (
    <p>

<Navbar expand="lg" variant="light" bg="light">
  <Container>
  <Navbar.Brand href="#home"><span className="display-5 bold">SMILE MED</span></Navbar.Brand>

  <Nav className="justify-content-end">
  <Nav.Link href="#features" className="mx-3 text-green display-7">telefon: 662-444-222</Nav.Link>
  <Nav.Link href="#features" className="mx-3 text-green display-7">napisz do nas: smile@med.pl</Nav.Link>
  </Nav>
  </Container>
</Navbar>

<Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="py-3 p-auto">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-start">
      <Nav.Link href="#features" className="mx-3 text-dark display-7">Cennik</Nav.Link>
      <Nav.Link href="#pricing" className="mx-3 text-dark display-7">Zespół</Nav.Link>
      <Nav.Link href="#pricing" className="mx-3 text-dark display-7">Gabinet</Nav.Link>
      <Nav.Link href="#pricing" className="mx-3 text-dark display-7">Dla lekarzy</Nav.Link>
      <Nav.Link href="#pricing" className="mx-3 text-dark display-7">Aktualności</Nav.Link>
      <NavDropdown title="Usługi" id="collasible-nav-dropdown" className="mx-3 text-dark display-7">
        <NavDropdown.Item href="#action/3.1">Ortodoncja</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Protetyka</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Chirurgia stomatologiczna</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Implanty</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Protetyka</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.6">Stomatologia dziecięca</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      <Carousel variant="dark" fade interval="3000" pause="none">
  <Carousel.Item className="">
    <img
      className="d-block w-100"
      src={Slide1}
      alt="First slide"
    />
    <Carousel.Caption>
    <p className="display-7 my-0 text-green">Stawiamy na przyjazną atmosferę</p>
      <h5 className="display-4 bold">Poznaj naszą klinikę</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <p className="display-7 my-0 text-green">Poznaj nasz personel</p>
    <h5 className="display-4 bold">Profesjonalny zespół</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <p className="display-7 my-0 text-green">Wysoki standard usług stomatologicznych</p>
    <h5 className="display-4 bold">Najnowsze technologie</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide4}
      alt="Third slide"
    />
    <Carousel.Caption>
    <p className="display-7 my-0 text-green">Zapewniamy 100% zadowolenia z naszych usług</p>
    <h5 className="display-4 bold">Gwarancja satysfakcji</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide5}
      alt="Third slide"
    />
    <Carousel.Caption>
    <p className="display-7 my-0 text-green">Przystępne ceny, najwyższa jakość</p>
    <h5 className="display-4 bold">Poznaj naszą ofertę</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<CardGroup className="my-2 w-75 mx-auto">
<Card className="mx-1">

    <Card.Img variant="top" src={Slide1} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="mx-1">

    <Card.Img variant="top" src={Slide1} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="mx-1">
    <Card.Img variant="top" src={Slide1} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="mx-1">
    <Card.Img variant="top" src={Slide1} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="mx-1">
    <Card.Img variant="top" src={Slide1} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

<Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item active>{1} aaa</Pagination.Item>

  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>

    </p>
  );
}

export default App;
