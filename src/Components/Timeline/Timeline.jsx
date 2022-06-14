import React from "react";
import styles from "./timeline.module.scss";

const Timeline = props => {
  const { period, agency, title } = props;

  return (
    <div className={styles["timeline"]}>
      <div className={styles["timeline__period"]}>
        <div className={styles["period"]}>{period}</div>
        <div className={styles["agency"]}>{agency}</div>
      </div>
      <div className={styles["timeline__divider"]}></div>
      <div className={styles["timeline__desc"]}>
        <div className={styles["desc__title"]}>{title}</div>
        <div className={styles["desc__content"]}>{props.children}</div>
      </div>
    </div>
  );
};

export default Timeline;
