import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Hamburger from "../Hamburger/Hamburger";
import logo from "../../../assets/images/logo.png";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    title: "home",
    urlPath: "/",
  },
  {
    title: "about",
    urlPath: "/about",
  },
  {
    title: "projects",
    urlPath: "/projects",
  },
  {
    title: "contact",
    urlPath: "/contact",
  },
];

const Navbar = ({ refs }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  console.log(refs);
  useEffect(() => {
    switch (location.pathname) {
      case "/about":
        scrollSmoothHandler(refs.aboutRef);
        break;
      case "/projects":
        scrollSmoothHandler(refs.projectsRef);
        break;
      case "/contact":
        scrollSmoothHandler(refs.contactRef);
        break;
      default:
        scrollSmoothHandler(refs.homeRef);
        break;
    }
  }, [location, refs]);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.header}>
      <div className={styles["menu-wrapper"]}>
        <div className={styles["logo-container"]}>
          <NavLink to="/">
            <img src={logo} alt="migel" aria-label="home" className={styles.logo} />
          </NavLink>
        </div>
        <nav>
          <div className={`${styles.navigation} ${showNavbar ? styles.active : ""}`}>
            <ul>
              {menuItems.map((item, idx) => {
                return (
                  <li key={idx}>
                    <NavLink to={item.urlPath}>{item.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <div className={styles["menu-icon"]} onClick={handleShowNavbar}>
          <Hamburger isOpen={showNavbar} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
