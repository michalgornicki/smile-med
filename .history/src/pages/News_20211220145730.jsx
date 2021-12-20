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
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="py-3 p-auto flex-column shadow"
    >

<Container>
        <Navbar.Brand href="#home">
          <span className="display-5 very-bold p-2">SMILE MED</span>
        </Navbar.Brand>

        <Nav className="justify-content-end">
          <Nav.Link  className="mx-3 text-green display-7">
            telefon: 662-444-222
          </Nav.Link>
          <Nav.Link  className="mx-3 text-green display-7">
            napisz do nas: smile@med.pl
          </Nav.Link>
        </Nav>
      </Container>
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
    <CardGroup className="my-2 w-50-d w-90-m mx-auto flex-column">
    <Card className="mx-1 my-5">
        <Card.Img variant="top" src={Card1} className="m-auto" />
        <Card.Body>
          <Card.Title>Błędy rodziców w dbaniu o uzębienie dzieci</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">9.12.2021</small>
        </Card.Footer>
      </Card>
      <Card className="mx-1 mb-5">
        <Card.Img variant="top" src={Card2} />
        <Card.Body>
          <Card.Title>Błędy rodziców w dbaniu o uzębienie dzieci</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">9.12.2021</small>
        </Card.Footer>
      </Card>
      <Card className="mx-1 mb-5">
        <Card.Img variant="top" src={Card3} />
        <Card.Body>
          <Card.Title>Medycyna estetyczna, a stomatologia</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">5.12.2021</small>
        </Card.Footer>
      </Card>
      <Card className="mx-1 mb-5">
        <Card.Img variant="top" src={Card4} />
        <Card.Body>
          <Card.Title>Dezynfekcja tylko wg reguł sztuki</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
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
              Początek
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
