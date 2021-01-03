import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import CartIcon from "../NavBar/CartIcon";

// <NavLink to="/cart"></NavLink> agregar el cartIcon aqui

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav-bar-container"
    >
      <Icon />
      <Link to="/">
        <Navbar.Brand href="#home" className="title-pr">
          Goes
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto nav-links">
          <Nav.Link href="#features">Loggin</Nav.Link>
          <NavDropdown
            title="Productos"
            id="collasible-nav-dropdown"
            className="prueba-uno"
          >
            <Link to="/category/zapatillas">
              <NavDropdown.Item href="#action/3.1" className="prueba">
                Zapatillas
              </NavDropdown.Item>
            </Link>
            <Link to="/category/remeras">
              <NavDropdown.Item href="#action/3.2" className="prueba">
                Remeras
              </NavDropdown.Item>
            </Link>
            {/* <NavDropdown.Item href="#action/3.3" className="prueba"> Shorts </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="prueba"> Camperas </NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link href="#pricing">Sobre nosotros</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartIcon className="cart-icon" />
      <Form inline>
        <FormControl
          type="text"
          placeholder="Busca aqui.."
          className="mr-sm-2"
        />
        <Button variant="outline-danger" className="search-link">
          Busqueda
        </Button>
      </Form>
    </Navbar>
  );
};

export default NavBar;
