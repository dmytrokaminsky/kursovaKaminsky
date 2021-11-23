import React from "react";
import {Navbar, Nav, Button,Container} from 'react-bootstrap';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
export default function Navibar() {
    return (
        <>
      
  <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home">Clean</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Nav className="me-auto">
      <Nav.Link><Link to="/home">Головна</Link></Nav.Link>
      <Nav.Link><Link to="/services">Послуги</Link></Nav.Link>
      <Nav.Link><Link to="/selected">Вибране</Link></Nav.Link>
      <Nav.Link><Link to="/about">Про нас</Link></Nav.Link>
      
      
      
      
    </Nav>
    
    </Container>
  </Navbar>
  
 
</>
   
)}