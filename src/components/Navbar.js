import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import myImg from "../Assets/logo.png";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={myImg} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Nutrients
              </Nav.Link>
            </Nav.Item>

            {/*<Nav.Item>*/}
            {/*  <Nav.Link*/}
            {/*    as={Link}*/}
            {/*    to="/foodnutrients"*/}
            {/*    onClick={() => updateExpanded(false)}*/}
            {/*  >*/}
            {/*    <AiOutlineUser style={{ marginBottom: "2px" }} /> Food Nutrients*/}
            {/*  </Nav.Link>*/}
            {/*</Nav.Item>*/}

            {/*<Nav.Item>*/}
            {/*  <Nav.Link*/}
            {/*    as={Link}*/}
            {/*    to="/project"*/}
            {/*    onClick={() => updateExpanded(false)}*/}
            {/*  >*/}
            {/*    <AiOutlineFundProjectionScreen*/}
            {/*      style={{ marginBottom: "2px" }}*/}
            {/*    />{" "}*/}
            {/*    Recipes*/}
            {/*  </Nav.Link>*/}
            {/*</Nav.Item>*/}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
