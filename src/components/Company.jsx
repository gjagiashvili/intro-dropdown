import styles from "../modules/Company.module.scss";

const Company = () => {
  return (
    <ul className={styles["comp-dropdown"]}>
      <li className={styles["comp-dropdown-ele"]}>History</li>
      <li className={styles["comp-dropdown-ele"]}>Our Team</li>
      <li className={styles["comp-dropdown-ele"]}>Blog</li>
    </ul>
  );
};

export default Company;
