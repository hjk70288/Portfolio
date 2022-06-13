import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";

const Button = props => {
  const { selected, link } = props;

  return (
    <Link to={link}>
      <div
        className={`${styles["button"]} ${
          selected ? styles["button--selected"] : ""
        }`}
      >
        {props.children}
      </div>
    </Link>
  );
};

export default Button;
