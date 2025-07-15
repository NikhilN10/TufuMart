
import Services from "../components/Services";
import Hero from "../components/Hero";
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
