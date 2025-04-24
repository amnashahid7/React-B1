import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Container fluid className="px-0">
            <div className="mx-auto w-100" style={{ maxWidth: '1280px' }}>
                {/* Hero Section */}
                <div className="position-relative overflow-hidden text-black rounded bg-light mx-2 mx-sm-5 py-5 mt-5">
                    <Container className="position-relative z-1 text-center text-sm-end pt-5 pb-5 pb-sm-0">
                        <Row className="justify-content-end">
                            <Col sm={6} className="mt-sm-1 mt-5">
                                <h2 className="fw-bold display-5">
                                    Download Now
                                    <span className="d-none d-sm-block fs-2">Lorem Ipsum</span>
                                </h2>

                                <Link to="/" className="btn btn-lg mt-4 text-white bg-orange-700" style={{ backgroundColor: '#c2410c' }}>
                                    <svg
                                        fill="white"
                                        width="24"
                                        height="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        className="me-2"
                                    >
                                        <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                    </svg>
                                    Download now
                                </Link>
                            </Col>
                        </Row>
                    </Container>

                    {/* Background Image */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start pt-5 pt-sm-0">
                        <img src="img/one.svg" alt="image1" className="img-fluid" style={{ maxWidth: '384px' }} />
                        {/* <img src="" alt="" srcset="" /> */}
                    </div>
                </div>

                {/* Secondary Image */}
                <div className="d-grid justify-content-center mt-5">
                    <img
                        src="img/two.svg"
                        alt="image2"
                        className="img-fluid"
                        style={{ width: '12rem' }}
                        // Will expand on large screens
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Remote Work"
                    />
                </div>

                {/* Heading */}
                <h1 className="text-center display-6 display-sm-3 py-5 fw-medium">Lorem Ipsum Yojo</h1>
            </div>
        </Container>
    );
}
