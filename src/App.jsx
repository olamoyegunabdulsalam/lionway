import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Products from "./components/Products";
import Process from "./components/Process";
import WhyLionWay from "./components/WhyLionWay";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Services />
        <Projects />
        <Products />
        <Process />
        <WhyLionWay />
        <About />
        <CTA />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
