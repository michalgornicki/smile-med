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
import Card1 from "../card1.jpg";
import Card2 from "../card2.jpg";
import Card3 from "../card3.jpg";
import Card4 from "../card4.jpg";

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
              <Nav.Link className="mx-3 text-dark display-7">Cennik</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content">
        

      <div className="display-5 w-75 m-auto mt-5" id="news">Aktualności</div>
    <CardGroup className="my-2 w-75 mx-auto flex flex-row">
      <Card className="mx-1">
        <Card.Img variant="top" src={Card1} />
        <Card.Body>
          <Card.Title>Szukamy higienistek na staż</Card.Title>
          <Card.Text>
            Zapraszamy do kontaktu w celu uzyskania informacji na temat oferty
            pracy.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">15.12.2021</small>
        </Card.Footer>
      </Card>
      <Card className="mx-1">
        <Card.Img variant="top" src={Card2} />
        <Card.Body>
          <Card.Title>Błędy rodziców w dbaniu o uzębienie dzieci</Card.Title>
          <Card.Text>
            Z uwagi na fakt, że niewielu rodziców właściwie wdraża w życie
            zalecenia stomatologów 40 proc. dzieci w wieku dwóch lat ma
            próchnicę, wśród pięciolatków wskaźnik ten wzrasta do 80 proc...{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">9.12.2021</small>
        </Card.Footer>
      </Card>
      <Card className="mx-1">
        <Card.Img variant="top" src={Card3} />
        <Card.Body>
          <Card.Title>Medycyna estetyczna, a stomatologia</Card.Title>
          <Card.Text>
            Dążenie do gwiazdorskiego uśmiechu nie powinno przysłonić
            najważniejszego aspektu, czyli zdrowych zębów i dziąseł. Zęby z
            próchnicą czy dziąsła zaatakowane przez paradontozę nie będą
            ładne...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">5.12.2021</small>
        </Card.Footer>
      </Card>
      <Card className="mx-1">
        <Card.Img variant="top" src={Card4} />
        <Card.Body>
          <Card.Title>Dezynfekcja tylko wg reguł sztuki</Card.Title>
          <Card.Text>
            Producenci środków certyfikowanych prowadzą badania skuteczności
            swoich produktów. To są długotrwałe i bardzo drogie badania. Na
            produktach profesjonalnych producentów...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">30.11.2021</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      
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
