import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import styles from "./Header.module.css"; // Import your CSS file for custom styles

export default function Header() {
  return (
    <header className="sticky-top shadow">
      <Navbar
        expand="lg"
        bg="white"
        variant="light"
        className="py-2 border-bottom"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <Image
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              height={48}
              alt="Logo"
              className="me-3"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `me-2 ${isActive ? styles.textOrange : styles.textSimple}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `me-2 ${isActive ? styles.textOrange : styles.textSimple}`
                }
              >
                About
              </NavLink>
              <NavLink
              to={'/contact'}
              className={(isActive)=>` ${isActive? styles.textOrange: styles.textSimple}`}
              >Contact</NavLink>
            </Nav>
            <div className="d-flex">
              <Button variant="outline-dark" className="me-2">
                Log in
              </Button>
              <Button className={`${styles.BtnOrange}`}>Get started</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
