import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
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

function App() {
  return (
      <div>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#home">
              <span className="display-5 very-bold p-2">SMILE MED</span>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav.Link href="#features" className="mx-3 text-green display-7">
                telefon: 662-444-222
              </Nav.Link>
              <Nav.Link href="#features" className="mx-3 text-green display-7">
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
                <Nav.Link href="#features" className="mx-3 text-dark display-7">
                  Oferta
                </Nav.Link>
                <Link to="/expenses">Expenses</Link><Nav.Link className="mx-3 text-dark display-7">Zesp????</Nav.Link>
                <Nav.Link href="#pricing" className="mx-3 text-dark display-7">
                  Gabinet
                </Nav.Link>
                <Nav.Link href="#pricing" className="mx-3 text-dark display-7">
                  Aktualno??ci
                </Nav.Link>
                <NavDropdown
                  title="Us??ugi"
                  id="collasible-nav-dropdown"
                  className="mx-3 text-dark display-7"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Ortodoncja
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Protetyka
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Chirurgia stomatologiczna
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Implanty
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    Protetyka
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.6">
                    Stomatologia dzieci??ca
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing" className="mx-3 text-dark display-7">
                  Cennik
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Carousel variant="dark" fade interval="3000" pause="none">
          <Carousel.Item className="">
            <img className="d-block w-100" src={Slide0} alt="First slide" />
            <Carousel.Caption>
              <p className="display-7 my-0 text-green">
                Zapraszamy do naszej kliniki
              </p>
              <h5 className="display-4 bold">Mi??a, profesjonalna obs??uga</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide2} alt="Second slide" />
            <Carousel.Caption>
              <p className="display-7 my-0 text-green">Poznaj nasz personel</p>
              <h5 className="display-4 bold">Profesjonalny zesp????</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide3} alt="Third slide" />
            <Carousel.Caption>
              <p className="display-7 my-0 text-green">
                Wysoki standard us??ug stomatologicznych
              </p>
              <h5 className="display-4 bold">Najnowsze technologie</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide4} alt="Third slide" />
            <Carousel.Caption>
              <p className="display-7 my-0 text-green">
                Zapewniamy 100% zadowolenia z naszych us??ug
              </p>
              <h5 className="display-4 bold">Gwarancja satysfakcji</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide5} alt="Third slide" />
            <Carousel.Caption>
              <p className="display-7 my-0 text-green">
                Przyst??pne ceny, najwy??sza jako????
              </p>
              <h5 className="display-4 bold">Poznaj nasz?? ofert??</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="w-50 mx-auto my-5">
          <div>
            <div className=" mt-4 very-bold display-7 text-center">
              Szanowni Pacjenci,
            </div>
            <div className="text-center">
              {" "}
              W zwi??zku z epidemi?? wirusa COVID-19, w trosce o bezpiecze??stwo
              Pa??stwa oraz naszych pracownik??w, uprzejmie prosimy o zapoznanie
              si?? i stosowanie do poni??szej PROCEDURY NA CZAS PANDEMII COVID-19.
            </div>
          </div>

          <div>
            <div className=" mt-4 very-bold display-7 text-center">
              REJESTRACJA:
            </div>

            <div>
              - zalecamy telefoniczn?? rejestracj?? wizyt <br></br>- zalecamy, by
              Pacjenci z objawami grypopodobnymi: gor??czka, kaszel, duszno????
              itp., przesun??li termin swojej wizyty o co najmniej 14 dni
              <br></br>- zalecamy, by Pacjenci powy??ej 65. r.??. oraz z chorobami
              wsp????istniej??cymi przenie??li wizyt?? na p????niejszy termin<br></br>-
              prosimy o punktualne przybycie do gabinetu i - je??li jest to
              mo??liwe - bez os??b towarzysz??cych<br></br>
            </div>
          </div>
          <div>
            <div className=" mt-4 very-bold display-7 text-center">
              2. WIZYTA W GABINECIE:
            </div>

            <div>
              - po wej??ciu do recepcji prosimy Pa??stwa o zdezynfekowanie r??k i
              schowanie maseczki<br></br>- asystentka zmierzy Pa??stwu
              temperatur?? cia??a. Je??li wyniesie powy??ej 37,3??C, wizyta musi
              zosta?? prze??o??ona o minimum 14 dni<br></br>- prosimy o podpisanie
              o??wiadczenie dot. COVID-19 <br></br>- bezpo??rednio przed wykonanym
              zabiegiem prosimy Pa??stwa o przep??ukanie ust roztworem p??ynu
              antyseptycznego.<br></br>
            </div>
          </div>
        </div>

        <Carousel variant="dark" interval="3000" pause="none">
          <Carousel.Item className="">
            <img className="d-block w-100" src={Slide1} alt="First slide" />
            <Carousel.Caption>
              <p className="display-7 my-0 text-green">
                Stawiamy na przyjazn?? atmosfer??
              </p>
              <h5 className="display-4 bold">Poznaj nasz?? klinik??</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="display-5 w-75 m-auto mt-5">Aktualno??ci</div>
        <CardGroup className="my-2 w-75 mx-auto">
          <Card className="mx-1">
            <Card.Img variant="top" src={Card1} />
            <Card.Body>
              <Card.Title>Szukamy higienistek na sta??</Card.Title>
              <Card.Text>
                Zapraszamy do kontaktu w celu uzyskania informacji na temat
                oferty pracy.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">15.12.2021</small>
            </Card.Footer>
          </Card>
          <Card className="mx-1">
            <Card.Img variant="top" src={Card2} />
            <Card.Body>
              <Card.Title>
                B????dy rodzic??w w dbaniu o uz??bienie dzieci
              </Card.Title>
              <Card.Text>
                Z uwagi na fakt, ??e niewielu rodzic??w w??a??ciwie wdra??a w ??ycie
                zalecenia stomatolog??w 40 proc. dzieci w wieku dw??ch lat ma
                pr??chnic??, w??r??d pi??ciolatk??w wska??nik ten wzrasta do 80 proc...{" "}
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
                D????enie do gwiazdorskiego u??miechu nie powinno przys??oni??
                najwa??niejszego aspektu, czyli zdrowych z??b??w i dzi??se??. Z??by z
                pr??chnic?? czy dzi??s??a zaatakowane przez paradontoz?? nie b??d??
                ??adne...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">5.12.2021</small>
            </Card.Footer>
          </Card>
          <Card className="mx-1">
            <Card.Img variant="top" src={Card4} />
            <Card.Body>
              <Card.Title>Dezynfekcja tylko wg regu?? sztuki</Card.Title>
              <Card.Text>
                Producenci ??rodk??w certyfikowanych prowadz?? badania skuteczno??ci
                swoich produkt??w. To s?? d??ugotrwa??e i bardzo drogie badania. Na
                produktach profesjonalnych producent??w...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">30.11.2021</small>
            </Card.Footer>
          </Card>
        </CardGroup>

        <Navbar
          collapseOnSelect
          expand="lg"
          bg="secondary"
          variant="dark"
          className="py-6 p-auto mt-5"
        >
          <Container>
            <Nav className="justify-content-start w-75 m-auto">
              <Nav.Link
                href="#features"
                className="mx-3 text-light display-7 very-bold"
              >
                SMILE MED
              </Nav.Link>
              <Nav.Link href="#features" className="mx-3 text-light display-7">
                Cennik
              </Nav.Link>
              <Nav.Link href="#pricing" className="mx-3 text-light display-7">
                Zesp????
              </Nav.Link>
              <Nav.Link href="#pricing" className="mx-3 text-light display-7">
                Gabinet
              </Nav.Link>
              <Nav.Link href="#pricing" className="mx-3 text-light display-7">
                Dla lekarzy
              </Nav.Link>
              <Nav.Link href="#pricing" className="mx-3 text-light display-7">
                Aktualno??ci
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
  );
}

export default App;
