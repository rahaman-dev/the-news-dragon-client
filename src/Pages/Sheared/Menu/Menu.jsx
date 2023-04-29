import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Menu = () => {
  const { user, loggedOut } = useContext(AuthContext);

  const handleLogOut = () => {
    loggedOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto text-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Button variant="" className="btn btn-link">
                  <FontAwesomeIcon icon={faUser} size="2x" />
                </Button>
              )}
              {user ? (
                <Button variant="dark" onClick={handleLogOut}>
                  Lou Out
                </Button>
              ) : (
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
