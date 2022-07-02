import React from "react";
import Logo from "../secure investment data/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";


export default function Heading() {
  return (
    <Navbar sticky="top" expand="lg" style={{ backgroundColor: "white" }}>
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Secure Forex Trading" width={200} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <span className="li">Home</span>
            </Nav.Link>
            <Nav.Link href="/about-us">
              <span className="li">About us</span>
            </Nav.Link>
            <Nav.Link href="/acc">
              <span className="li">Open an Account</span>
            </Nav.Link>
            <Nav.Link href="/performance">
              <span className="li">
                <span className="li">Performance</span>
              </span>
            </Nav.Link>
            <Nav.Link href="/how-it-works">
              <span className="li">How it Works</span>
            </Nav.Link>
            <Nav.Link href="/faqs">
              <span className="li">FAQs</span>
            </Nav.Link>
            <Nav.Link href="/contact-us">
              <span className="li">Contact us</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
