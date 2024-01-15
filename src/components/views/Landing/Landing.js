import { forwardRef, useEffect, useState } from "react";
import img from "../../../assets/images/me-min.png";
import styles from "./Landing.module.css";

const DESC = ["Goal-driven", "Adaptable", "Agile", "Creative", "Curious"];

const FADE_INTERVAL_MS = 1750;
const DESC_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;

const Landing = forwardRef((_, ref) => {
  const [animateProp, setAnimateProp] = useState("slide-in");
  const [descOrder, setDescOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      animateProp === "slide-in" ? setAnimateProp("slide-out") : setAnimateProp("slide-in");
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [animateProp]);

  useEffect(() => {
    const descTimeout = setInterval(() => {
      setDescOrder((prevDescOrder) => (prevDescOrder + 1) % DESC.length);
    }, DESC_CHANGE_INTERVAL_MS);

    return () => clearInterval(descTimeout);
  }, []);

  return (
    <section ref={ref} className={styles.landing}>
      <div className={`${styles["landing-wrapper"]}`}>
        <div className={styles["animate-container"]}>
          <p>
            <span>I am</span>
            <span className={styles[animateProp]}>{DESC[descOrder]}</span>
          </p>
        </div>
        <div className={styles["image-container"]}>
          <img src={img} alt="me" />
        </div>
      </div>
    </section>
  );
});

Landing.displayName = "Landing";

export default Landing;
