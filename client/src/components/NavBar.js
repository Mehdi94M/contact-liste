import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleFalse } from "../redux/actions/contactActions";
function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleToggleFalse = () => {
    dispatch(toggleFalse());
    navigate("/addEdit");
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/contacts">
            Contacts
          </Nav.Link>
          <Nav.Link as={Link} to="/addEdit" onClick={handleToggleFalse} >
            Add Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
