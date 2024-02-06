import { useState } from "react";
import styles from "../modules/Header.module.scss";
import Mobile from "./Mobile";

import Logo from "../assets/images/logo.svg";
import Arrow from "../assets/images/icon-arrow-down.svg";
import ThreeLines from "../assets/images/icon-menu.svg";
import Features from "./Features";
import Company from "./Company";

const Header = ({ setMobile, mobile }) => {
  // const [mobile, setMobile] = useState(false)
  const [click, setClick] = useState({
    features: false,
    company: false,
  });

  return (
    <>
      {mobile && (
        <Mobile
          setClick={setClick}
          features={click.features}
          company={click.company}
          setMobile={setMobile}
        />
      )}
      <div className={styles["header"]}>
        <div className={styles["main"]}>
          <img src={Logo} />
          <ul className={styles["main-desktop"]}>
            <li
              onClick={() =>
                setClick((e) => ({
                  company: e.company,
                  features: !e.features,
                }))
              }
              className={styles["features"]}
            >
              <p className={styles["features-p"]}>Features</p>
              <img src={Arrow} className={styles["arrow"]} />
            </li>
            <li
              onClick={() =>
                setClick((e) => ({
                  company: !e.company,
                  features: e.features,
                }))
              }
              className={styles["company"]}
            >
              <p className={styles["company-p"]}>Company</p>
              <img src={Arrow} className={styles["arrow"]} />
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
        <img
          src={ThreeLines}
          className={styles["three-lines-icon"]}
          onClick={() => setMobile(true)}
        />
        <div className={styles.buttons}>
          <button className={styles.login}>Login </button>
          <button className={styles.register}>Register </button>
        </div>
        {click.features && !mobile && <Features />}
        {click.company && !mobile && <Company />}
      </div>
    </>
  );
};

export default Header;
