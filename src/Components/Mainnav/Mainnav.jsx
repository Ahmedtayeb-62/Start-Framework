import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Use NavLink from react-router-dom
import "./Mainnav.css";

export default function Mainnav() {
  return (
    <>
      <Navbar expand="lg" className="nav-bg position-fixed w-100 ">
        <Container className=" position-relative">
          <Navbar.Brand className="text-uppercase Start-Framework">
            Start Framework
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <Nav.Link
                as={NavLink}
                to="about"
                className="text-uppercase tabs"
                activeClassName="active"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="portfolio"
                className="text-uppercase tabs mx-lg-4"
                activeClassName="active"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="contact"
                className="text-uppercase tabs"
                activeClassName="active"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
