import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <img src={logo} alt="" className="mr-auto" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM d, YYYY")}</p>
      </div>

      <div className="d-flex">
        <button className="bg-danger border border-none text-white h-3 p-2">
          Latest
        </button>
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text..... I can be a React component, multiple React components, or
          just some text..... I can be a React component, multiple React
          components, or just some text..... I can be a React component,
          multiple React components, or just some text.
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto text-center">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="" className="btn btn-link">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </Button>
              <Button variant="dark">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
