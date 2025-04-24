import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="border-top border-bottom bg-white">
            <Container className="py-5">
                <Row className="mb-4">
                    <Col md="auto" className="mb-4 mb-md-0">
                        <Link to="/" className="d-flex align-items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                alt="Logo"
                                style={{ height: '64px' }}
                            />
                        </Link>
                    </Col>
                    <Col sm={6} md={3}>
                        <h5 className="text-uppercase fw-semibold">Resources</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className="text-muted text-decoration-none">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-muted text-decoration-none">About</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={3}>
                        <h5 className="text-uppercase fw-semibold">Follow us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://github.com/hiteshchoudhary" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Github</a>
                            </li>
                            <li>
                                <Link to="/" className="text-muted text-decoration-none">Discord</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={3}>
                        <h5 className="text-uppercase fw-semibold">Legal</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="#" className="text-muted text-decoration-none">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted text-decoration-none">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row className="align-items-center justify-content-between">
                    <Col sm="auto">
                        <small className="text-muted">
                            © 2023 <a href="https://hiteshchoudhary.com/" className="text-decoration-none">hiteshchoudhary</a>. All Rights Reserved.
                        </small>
                    </Col>
                    <Col sm="auto">
                        <div className="d-flex gap-3">
                            {/* Keep using inline SVGs or switch to icons from `react-icons` if preferred */}
                            {/* Example social link */}
                            <Link to="#" className="text-muted">
                                <i className="bi bi-facebook"></i>
                                <span className="visually-hidden">Facebook page</span>
                            </Link>
                            {/* Repeat for other icons */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
