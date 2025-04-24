import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function About() {
  return (
    <div className="py-5 bg-white">
      <Container className="px-3 text-secondary">
        <Row className="align-items-center gy-4 gx-lg-5">
          <Col md={5} lg={5}>
            <Image
              src="img/three.svg"
              alt="image"
              fluid
            />
          </Col>
          <Col md={7} lg={6}>
            <h2 className="h2 text-dark fw-bold">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-4 text-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
              aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-3 text-secondary">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
