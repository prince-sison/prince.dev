import { Nav } from "react-bootstrap";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">Prince.Dev</div>
      <Nav className="nav-links">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </div>
  );
};
