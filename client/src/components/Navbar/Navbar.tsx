import { Nav } from "react-bootstrap";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="d-flex align-items-center justify-content-center p-2 logo">
        <img src="/code-icon.svg" alt="logo" />
        Prince.Dev
      </div>
      <Nav className="nav-links">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </div>
  );
};
