import React from "react";
import { Link } from "react-router-dom";
import styles from "./projectItme.module.scss";
import useScrollFadeIn from "Hooks/useScrollFadeIn";

const ProjectItem = props => {
  const { to, title, period, skills } = props;

  return (
    <Link to={`/project/${to}`}>
      <div {...useScrollFadeIn(2, 0.7, 0.5)} className={styles["project"]}>
        <div className={styles["project__content"]}>
          <div className={styles["project__thumbnail"]}></div>
          <div className={styles["project__desc"]}>
            <div className={styles["desc__title"]}>{title}</div>
            <div className={styles["desc__period"]}>
              <i>🗓</i> {period}
            </div>
            <div className={styles["desc__skills"]}>
              <i>🛠</i> {skills}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
