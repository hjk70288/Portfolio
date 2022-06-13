import React from "react";
import styles from "./me.module.scss";
import useScrollFadeIn from "Hooks/useScrollFadeIn";

const Me = () => {
  return (
    <div {...useScrollFadeIn(0.7, 0)} className={styles["me"]}>
      나입니다
    </div>
  );
};

export default Me;
