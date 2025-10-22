import { Button } from "react-bootstrap";
import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-summary">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Building Scalable, Cloud-Driven Web Applications
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-6">
          I’m <span className="font-semibold">Prince Sison</span>, a Full Stack
          Software Engineer specializing in C#, .NET Core, React, and Azure —
          crafting reliable and modern web solutions.
        </p>
        <div className="call-to-action">
          <Button className="btn" href="#projects">
            View My Work
          </Button>
          <Button className="btn" href="#contact">
            Get In Touch
          </Button>
        </div>
      </div>
      <img src="/developer_male.png" alt="Hero Image" className="hero-image" />
    </div>
  );
};
