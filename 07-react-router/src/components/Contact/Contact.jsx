import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <div className="bg-white py-5 d-flex align-items-center" style={{ minHeight: '700px' }}>
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <div className="p-4 bg-light rounded">
              <h1 className="h3 fw-bold text-dark">Get in touch:</h1>
              <p className="lead text-secondary mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="d-flex align-items-center mt-4 text-secondary">
                <i className="bi bi-geo-alt-fill fs-3 text-muted me-3"></i>
                <div className="fw-semibold">Acme Inc, Street, State, Postal Code</div>
              </div>

              <div className="d-flex align-items-center mt-3 text-secondary">
                <i className="bi bi-telephone-fill fs-3 text-muted me-3"></i>
                <div className="fw-semibold">+44 1234567890</div>
              </div>

              <div className="d-flex align-items-center mt-3 text-secondary">
                <i className="bi bi-envelope-fill fs-3 text-muted me-3"></i>
                <div className="fw-semibold">info@acme.org</div>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <Form className="p-4 bg-white rounded shadow-sm">
              <Form.Group controlId="name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  className="py-3 px-3 fw-semibold border-secondary"
                />
              </Form.Group>

              <Form.Group controlId="email" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="py-3 px-3 fw-semibold border-secondary"
                />
              </Form.Group>

              <Form.Group controlId="tel" className="mb-3">
                <Form.Control
                  type="tel"
                  placeholder="Telephone Number"
                  className="py-3 px-3 fw-semibold border-secondary"
                />
              </Form.Group>

              <Button
                type="submit"
                className="bg-orange-700 text-white fw-bold py-3 px-4 mt-2 rounded border-0"
                style={{ backgroundColor: '#cc5200' }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
