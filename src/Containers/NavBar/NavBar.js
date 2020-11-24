import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Icon  from "./CartIcon";


const NavBar = () => {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-bar-container">
        <Icon/>
        <Navbar.Brand href="#home" className="title-pr" > Goes </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" className="nav-links">
            <Nav.Link href="#features">Loggin</Nav.Link>
            <Nav.Link href="#pricing">Galeria</Nav.Link>
            <NavDropdown title="Cursos" id="collasible-nav-dropdown" className="prueba-uno">
              <NavDropdown.Item href="#action/3.1" className="prueba"> Basketball </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="prueba"> Futbol </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="prueba"> Voley </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="prueba"> Natación </NavDropdown.Item>

            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
        <Form inline>
            <FormControl type="text" placeholder="Busca aqui.." className="mr-sm-2" />
            <Button variant="outline-success" className="search-link">Search</Button>
          </Form>
      </Navbar>
    )
}


export default NavBar;