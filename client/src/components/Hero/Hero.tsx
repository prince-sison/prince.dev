import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-summary">
        <h2>Hi,</h2>
        <h1>I'm Prince</h1>
        <h3>Full Stack Developer</h3>
        <p>
          Welcome to my portfolio website. Here you can find my projects and
          skills.
        </p>
        Hi, I'm Prince — a Software Engineer Who Loves Building Web Apps.
      </div>
      <img src="/developer_male.jpg" alt="Hero Image" className="hero-image" />
    </div>
  );
};
