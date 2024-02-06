import react from "react";
import styles from "../modules/Features.module.scss";

import imgTodo from "../assets/images/icon-todo.svg";
import imgCalendar from "../assets/images/icon-calendar.svg";
import imgReminder from "../assets/images/icon-reminders.svg";
import imgPlanning from "../assets/images/icon-planning.svg";

const Features = () => {
  return (
    <ul className={styles["features-drop"]}>
      <li className={styles["features-drop-ele"]}>
        <img src={imgTodo} />
        <a href="/">Todo List</a>
      </li>
      <li className={styles["features-drop-ele"]}>
        <img src={imgCalendar} />
        <a href="/">Calendar</a>
      </li>
      <li className={styles["features-drop-ele"]}>
        <img src={imgReminder} />
        <a href="/">Reminders</a>
      </li>
      <li className={styles["features-drop-ele"]}>
        <img src={imgPlanning} />
        <a href="/"> Planning</a>
      </li>
    </ul>
  );
};

export default Features;
