import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = ({ brand, links }) => (
  <Navbar bg="secondary" variant="dark" expand="md" className={"fixed-top"}>
    <Container>
      <Navbar.Brand href="">{brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          {links.map((link, index) => (
            <Nav.Link key={index} href={link.href}>
              {link.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
