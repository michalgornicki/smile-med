import React, { useState } from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Slide0 from "../0.jpg";
import Slide1 from "../1.jpg";
import Slide2 from "../2.jpg";
import Slide3 from "../3.jpg";
import Slide4 from "../4.jpg";
import Slide5 from "../5.jpg";
import Card1 from "../card1.jpg";
import Card2 from "../card2.jpg";
import Card3 from "../card3.jpg";
import Card4 from "../card4.jpg";
import { useEffect } from 'react';
import { Container } from "react-bootstrap";


export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
 

 const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
        if (window.pageYOffset > 700){
        if (scrolled === false) {counter();}
        setScrolled(true)
        }
  }
  
  const counter = () => {
    var i = 0;
    var j = 0;
    var k = 0;

    var intervSpeed = setInterval(function () {
      if (i < 3) document.getElementById("counter1").innerHTML = ++i;
      else clearInterval(intervSpeed);
    }, 1000);

    var intervPower = setInterval(function () {
      if (j < 20) document.getElementById("counter2").innerHTML = ++j + "+";
      else clearInterval(intervPower);
    }, 200);

    var intervDispl = setInterval(function () {
      if (k < 2369) document.getElementById("counter3").innerHTML = ++k + "+";
      else clearInterval(intervDispl);
    }, 1);
  };



  return (
    <div>

    <div className="content">

    <Carousel controls={false} indicators={false} variant="dark" fade interval="3000" pause="none">
      <Carousel.Item className="">
        <img className="d-block w-100" src={Slide0} alt="First slide" />
        <Carousel.Caption className="mobile-hide">
          <p className="display-7 my-0 text-white bg-black text-center px-2">
            Zapraszamy do naszej kliniki
          </p>
          <h5 className="display-6 bold">Mi??a, profesjonalna obs??uga</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide2} alt="Second slide" />
        <Carousel.Caption className="mobile-hide">
          <p className="display-7 my-0  text-white bg-black text-center px-2">Poznaj nasz personel</p>
          <h5 className="display-6 bold">Profesjonalny zesp????</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide3} alt="Third slide" />
        <Carousel.Caption className="mobile-hide">
          <p className="display-7 my-0  text-white bg-black text-center px-2">
            Wysoki standard us??ug stomatologicznych
          </p>
          <h5 className="display-6 bold">Najnowsze technologie</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide4} alt="Third slide" />
        <Carousel.Caption className="mobile-hide">
          <p className="display-7 my-0  text-white bg-black text-center px-2">
            Zapewniamy 100% zadowolenia z naszych us??ug
          </p>
          <h5 className="display-6 bold">Gwarancja satysfakcji</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide5} alt="Third slide" />
        <Carousel.Caption className="mobile-hide">
          <p className="display-7 my-0  text-white bg-black text-center px-2">
            Przyst??pne ceny, najwy??sza jako????
          </p>
          <h5 className="display-6 bold">Poznaj nasz?? ofert??</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="w-50-d w-90-m mx-auto my-5 bg-light">
      <div>
        <div className=" mt-4 very-bold display-7 text-center">
          Szanowni Pacjenci,
        </div>
        <div className="text-center">
          {" "}
          W zwi??zku z epidemi?? wirusa COVID-19, w trosce o bezpiecze??stwo
          Pa??stwa oraz naszych pracownik??w, uprzejmie prosimy o zapoznanie si??
          i stosowanie do poni??szej PROCEDURY NA CZAS PANDEMII COVID-19.
        </div>
      </div>

      <div>
        <div className=" mt-4 very-bold display-7 text-center">
          REJESTRACJA:
        </div>

        <div>
          - zalecamy telefoniczn?? rejestracj?? wizyt <br></br>- zalecamy, by
          Pacjenci z objawami grypopodobnymi: gor??czka, kaszel, duszno???? itp.,
          przesun??li termin swojej wizyty o co najmniej 14 dni<br></br>-
          zalecamy, by Pacjenci powy??ej 65. r.??. oraz z chorobami
          wsp????istniej??cymi przenie??li wizyt?? na p????niejszy termin<br></br>-
          prosimy o punktualne przybycie do gabinetu i - je??li jest to mo??liwe
          - bez os??b towarzysz??cych<br></br>
        </div>
      </div>
      <div>
        <div className=" mt-4 very-bold display-7 text-center">
          2. WIZYTA W GABINECIE:
        </div>

        <div>
          - po wej??ciu do recepcji prosimy Pa??stwa o zdezynfekowanie r??k i
          schowanie maseczki<br></br>- asystentka zmierzy Pa??stwu temperatur??
          cia??a. Je??li wyniesie powy??ej 37,3??C, wizyta musi zosta?? prze??o??ona
          o minimum 14 dni<br></br>- prosimy o podpisanie o??wiadczenie dot.
          COVID-19 <br></br>- bezpo??rednio przed wykonanym zabiegiem prosimy
          Pa??stwa o przep??ukanie ust roztworem p??ynu antyseptycznego.<br></br>
        </div>
      </div>
    </div>

    <Carousel controls={false} indicators={false}  variant="dark" interval="3000" pause="none">
      <Carousel.Item className="">
        <img className="d-block w-100" src={Slide1} alt="First slide" />
        <Carousel.Caption>
          <p className="display-7 my-0 text-white bg-black text-center px-2">
            Stawiamy na przyjazn?? atmosfer??
          </p>
          <h5 className="display-4 bold">Poznaj nasz?? klinik??</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    <div className="display-5 w-75 m-auto mt-5" id="news">Aktualno??ci</div>
    <Link to="/news"><CardGroup className="my-2 w-75 mx-auto">
      <Card className="mx-1">
        <Card.Img variant="top" src={Card1} />
        <Card.Body>
          <Card.Title>Szukamy higienistek na sta??</Card.Title>
          <Card.Text>
            Zapraszamy do kontaktu w celu uzyskania informacji na temat oferty
            pracy.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-success text-white">
          <small className="text-white">15.12.2021</small>
        </Card.Footer>
      </Card>
      <Card className="mx-1">
        <Card.Img variant="top" src={Card2} />
        <Card.Body>
          <Card.Title>B????dy rodzic??w w dbaniu o uz??bienie dzieci</Card.Title>
          <Card.Text>
            Z uwagi na fakt, ??e niewielu rodzic??w w??a??ciwie wdra??a w ??ycie
            zalecenia stomatolog??w 40 proc. dzieci w wieku dw??ch lat ma
            pr??chnic??, w??r??d pi??ciolatk??w wska??nik ten wzrasta do 80 proc...{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-success">
          <small className="text-white">9.12.2021</small>
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
        <Card.Footer className="bg-success">
          <small className="text-white">5.12.2021</small>
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
        <Card.Footer className="bg-success">
          <small className="text-white">30.11.2021</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Link>

    <Container className="height-80 position-relative">

    <div className="counter-container d-flex flex-lg-row flex-column justify-content-evenly w-75 m-auto text-center text-black display-6">
        <div className="d-flex flex-column my-3">
          <div>
            <img className="counter-icon w-lg-50 w-25" src={Slide0} alt="" />
          </div>
          <div id="counter1">0</div>
          <div>happy clients</div>
        </div>
        <div className="d-flex flex-column my-3">
          <div>
            <img className="counter-icon w-lg-50 w-25" src={Slide0} alt="" />
          </div>
          <div id="counter2">0</div>
          <div>projects done</div>
        </div>
        <div className="d-flex flex-column my-3">
          <div>
            <img className="counter-icon w-lg-50 w-25" src={Slide0} alt="" />
          </div>
          <div id="counter3">0</div>
          <div>hours spent</div>
        </div>
      </div>
      </Container>

    </div>  

  
  </div>
  );
}
