import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";
import Landing from "./views/Landing/Landing";
import About from "./views/About/About";
import Projects from "./views/Projects/Projects";
import Contact from "./views/Contact/Contact";

const Root = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main ref={homeRef}>
      <BrowserRouter>
        <Navbar refs={{ homeRef, aboutRef, projectsRef, contactRef }} />
        <Landing ref={homeRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </BrowserRouter>
    </main>
  );
};

export default Root;
