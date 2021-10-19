import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  //   console.log(user.displayName);
  return (
    <>
      <Navbar
        bg="light"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home" className="brand">
            Medi Care
          </Navbar.Brand>
          {/* <Navbar.Toggle className='justify-content-end' id='toggle'/> */}
          <Navbar.Toggle
            className="navbar-toggler ml-auto custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nav3"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Navbar.Text>
              <p className="username">{user?.displayName || user?.email}</p>
            </Navbar.Text>
            {user?.email ? (
              <Button onClick={logOut} variant="light">
                Log Out
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
