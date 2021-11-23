import React from "react";
import { Carousel } from "react-bootstrap";
import cl1 from '../components/Pictures/General/Clean1.jpg';
import cl2 from '../components/Pictures/General/Clean2.jpg';
import cl3 from '../components/Pictures/General/Clean3.jpg';
import boy1 from '../components/Pictures/General/boy1.jpg';
import boy2 from '../components/Pictures/General/boy2.jpg';
import girl1 from '../components/Pictures/General/girl1.jpg';
import { Card , CardGroup } from "react-bootstrap";

export const Home = () => (
    <>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cl2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 class="ml-2">Доброго дня</h3>
      <p>Вас вітає клінінгова компанія.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cl3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Ми виконуємо:</h3>
      <p>Різні роботи по дому/на дворі/на городі</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cl1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Відгуки</h3>
      <p>Понад 100 задоволених замовників.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="m-5">

<h1></h1>
<h1>Працівники року:</h1>
<h1></h1>
<CardGroup mg-10>
  
  <Card className="m-3">
    <Card.Img variant="top" src={boy1} />
    <Card.Body>
      <Card.Title>Петренко Іван Сергійович</Card.Title>
      <Card.Text>
        Спеціаліст з миття підлоги.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="m-3">
    <Card.Img variant="top" src={girl1} />
    <Card.Body>
      <Card.Title>Іваненко Олена Сергіївна</Card.Title>
      <Card.Text>
        Майстер чищення коврів.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="m-3">
    <Card.Img variant="top" src={boy2} />
    <Card.Body>
      <Card.Title>Богдан Андрій Степанович</Card.Title>
      <Card.Text>
        Професфйний мийщик вікон.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>

</>
)