import "./About.scss";

export const About = () => {
  return (
    <>
      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I’m <span className="font-semibold">Prince Sison</span>, a Full Stack
          Software Engineer specializing in C#, .NET Core, React, and Azure —
          crafting reliable and modern web solutions.
        </p>
        <img src="/hero-landing.jpg" alt="About Me" className="about-image" />
      </div>
    </>
  );
};
