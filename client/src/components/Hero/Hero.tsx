import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero-container">
      <span className="hero-text">Welcome to Prince.Dev</span>
      <img src="/hero-landing.jpg" alt="Hero Image" className="hero-image" />
    </div>
  );
};
