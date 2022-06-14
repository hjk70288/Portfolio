import React from "react";
import styles from "./project.module.scss";
import useScrollFadeIn from "Hooks/useScrollFadeIn";

const Project = () => {
  return (
    <div {...useScrollFadeIn(0.7, 0)} className={styles["project"]}>
      경험입니다
    </div>
  );
};

export default Project;
