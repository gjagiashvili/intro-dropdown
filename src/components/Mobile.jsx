import Arrow from "../assets/images/icon-arrow-down.svg";
import Xicon from "../assets/images/icon-close-menu.svg";
import Company from "./Company";
import Features from "./Features";

import styles from "../modules/Mobile.module.scss";

const Mobile = ({ setClick, features, company, setMobile }) => {
  return (
    <div className={styles["mobile"]}>
      <img
        className={styles.close}
        onClick={() => setMobile(false)}
        src={Xicon}
      />
      <ul className={styles["mob-menu"]}>
        <li
          className={styles.features}
          onClick={() =>
            setClick((e) => ({ company: e.company, features: !e.features }))
          }
        >
          <li className={styles["features-mob"]}>
            <p>Features</p>
            <img src={Arrow} className={styles.arrow} />
          </li>
          {features && <Features />}
        </li>
        <li
          onClick={() =>
            setClick((e) => ({ features: e.features, company: !e.company }))
          }
          className={styles.company}
        >
          <li className={styles["company-mob"]}>
            <p>Company</p>
            <img className={styles.arrow} src={Arrow} />
          </li>
          {company && <Company />}
        </li>
        <li>
          <a href="/" className={styles["a-careers"]}>
            Careers
          </a>
        </li>
        <li>
          <a href="/" className={styles["a-about"]}>
            About
          </a>
        </li>
      </ul>
      <div className={styles["buttons mobile-yes"]}>
        <button className={styles.login}>Login </button>
        <button className={styles.register}>Register </button>
      </div>
    </div>
  );
};

export default Mobile;
