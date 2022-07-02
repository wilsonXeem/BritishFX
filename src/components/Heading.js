import React from "react";
import Logo from "../secure investment data/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Heading() {
  const navigate = useNavigate()
  return (
    <Navbar sticky="top" expand="lg" style={{ backgroundColor: "white" }}>
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src={Logo} alt="Secure Forex Trading" width={200} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>
              <span className="li">Home</span>
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/about-us")}>
              <span className="li">About us</span>
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/account")}>
              <span className="li">Open an Account</span>
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/performance")}>
              <span className="li">
                <span className="li">Performance</span>
              </span>
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/how-it-works")}>
              <span className="li">How it Works</span>
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/faqs")}>
              <span className="li">FAQs</span>
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/contact-us")}>
              <span className="li">Contact us</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
