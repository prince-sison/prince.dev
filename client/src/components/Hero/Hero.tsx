import { Button } from "react-bootstrap";
import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-summary">
        <h2>Hi,</h2>
        <h1>I'm Prince</h1>
        <h3>Full Stack Developer</h3>
        Hi, I'm Prince — a Software Engineer Who Loves Building Web Apps.
        <Button variant="primary" href="#projects">
          View My Work
        </Button>
      </div>
      <img src="/developer_male.jpg" alt="Hero Image" className="hero-image" />
    </div>
  );
};
