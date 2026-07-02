import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// UI
import Loader from "./components/ui/Loader";
import ScrollProgressBar from "./components/ui/ScrollProgressBar";
import ScrollToTop from "./components/ui/ScrollToTop";
import CursorGlow from "./components/ui/CursorGlow";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";

function PortfolioApp() {
  return (
    <>
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {!loaded ? (
          <Loader key="loader" onDone={() => setLoaded(true)} />
        ) : (
          <PortfolioApp key="app" />
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
