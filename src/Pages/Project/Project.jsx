import React from "react";
import styles from "./project.module.scss";
import useScrollFadeIn from "Hooks/useScrollFadeIn";

const Project = () => {
  return (
    <div {...useScrollFadeIn(0.7, 0)} className={styles["project"]}>
      개발중
    </div>
  );
};

export default Project;
