import styles from "./Hamburger.module.css";

const Hamburger = ({ isOpen }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default Hamburger;
