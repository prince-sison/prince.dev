import { Nav } from "react-bootstrap";
import "./Navbar.scss";

export const Navbar = () => {
  const handleLogoClick = () => {
    // Navigate to home - you can use different methods:
    // Option 1: Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Option 2: Navigate to home URL (uncomment if needed)
    // window.location.href = '/';

    // Option 3: If using React Router, you would use navigate('/') here
  };

  return (
    <div className="navbar-container">
      <div
        className="d-flex align-items-center justify-content-center p-2 logo"
        onClick={handleLogoClick}
      >
        <img src="/code-icon.svg" alt="logo" />
        Prince.Dev
      </div>
      <Nav className="nav-links">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </div>
  );
};
