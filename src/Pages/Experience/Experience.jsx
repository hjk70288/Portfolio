import React from "react";
import styles from "./experience.module.scss";
import useScrollFadeIn from "Hooks/useScrollFadeIn";

const Experience = () => {
  return (
    <div {...useScrollFadeIn(0.7, 0)} className={styles["experience"]}>
      경험입니다
    </div>
  );
};

export default Experience;
