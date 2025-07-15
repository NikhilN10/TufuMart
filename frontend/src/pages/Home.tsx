import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import WTCU from "../components/WTCU";

interface HomeProps {
  setShowContactForm: (show: boolean) => void;
}

export default function Home({ setShowContactForm }: HomeProps) {
  return (
    <div>
      <Hero setShowContactForm={setShowContactForm} />
      <Services />
      <About />
      <WTCU />
    </div>
  );
}
