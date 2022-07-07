import React from "react";
import Logo from "../secure investment data/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Heading() {
  const navigate = useNavigate();
  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{
        backgroundColor: "white",
        boxShadow: "0.5px 0.5px 2px 0.5px grey",
      }}
    >
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
          <img src={Logo} alt="Secure Forex Trading" width={150} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              <span className="li">Home</span>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about-us");
                window.location.reload();
              }}
            >
              <span className="li">About us</span>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/performance");
                window.location.reload();
              }}
            >
              <span className="li">
                <span className="li">Performance</span>
              </span>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/how-it-works");
                window.location.reload();
              }}
            >
              <span className="li">How it Works</span>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/faqs");
                window.location.reload();
              }}
            >
              <span className="li">FAQs</span>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/contact-us");
                window.location.reload();
              }}
            >
              <span className="li">Contact us</span>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/signup");
                window.location.reload();
              }}
            >
              <button>Open an Account</button>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/signin");
                window.location.reload();
              }}
            >
              <button>Sign in</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
