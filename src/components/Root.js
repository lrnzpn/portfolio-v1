import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";

const Root = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main ref={homeRef}>
      <BrowserRouter>
        <Navbar refs={{ homeRef, aboutRef, projectsRef, contactRef }} />
      </BrowserRouter>
    </main>
  );
};

export default Root;
