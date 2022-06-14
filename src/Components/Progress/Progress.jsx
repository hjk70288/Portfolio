import React from "react";
import styles from "./progress.module.scss";

const Progress = props => {
  const { title, progress } = props;

  return (
    <div className={styles["progress"]}>
      <div className={styles["progress__title"]}>
        <div className={styles["title__name"]}>{title}</div>
        <div className={styles["title__percentage"]}>{progress}%</div>
      </div>
      <div className={styles["progress__bar"]}>
        <div
          style={{ width: `${progress}%` }}
          className={styles["progress__bar--fill"]}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
