import Company1 from "../assets/images/client-databiz.svg";
import Company2 from "../assets/images/client-audiophile.svg";
import Company3 from "../assets/images/client-meet.svg";
import Company4 from "../assets/images/client-maker.svg";
import desktopImg from "../assets/images/image-hero-desktop.png";
import mobileImg from "../assets/images/image-hero-mobile.png";

import styles from "../modules/Home.module.scss";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <div className={styles["left"]}>
        <h1 className={styles["left-main"]}>
          Make <br />
          remote work
        </h1>
        <p className={styles["left-para"]}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <button className={styles["learn-more-button"]}>
          <a href="/">Learn More</a>
        </button>
        <div className={styles["companies"]}>
          <img src={Company1} className={styles["single-company"]} />
          <img src={Company2} className={styles["single-company"]} />
          <img src={Company3} className={styles["single-company"]} />
          <img src={Company4} className={styles["single-company"]} />
        </div>
      </div>

      <div className={styles["right"]}>
        {window.innerWidth >= 768 ? (
          <img src={desktopImg} className={styles["desktop-img"]} />
        ) : (
          <img src={mobileImg} className={styles["mobile-img"]} />
        )}
      </div>
    </div>
  );
};

export default Home;
