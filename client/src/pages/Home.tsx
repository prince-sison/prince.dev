import { About } from "../components/About/About";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";

export const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};
