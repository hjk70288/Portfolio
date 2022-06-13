import React from "react";
import styles from "./header.module.scss";
import Button from "Components/Button/Button";

const Header = props => {
  const { history } = props;
  const pathname = history.location.pathname;

  return (
    <div className={styles["header"]}>
      <div className={styles["header__profile"]}>
        <img
          src="https://avatars.githubusercontent.com/u/56548968?s=400&u=95d5a439e056ea9bc91e0ed20296481da592cb45&v=4"
          alt="profile_image"
        ></img>
      </div>
      <div className={styles["header__title"]}>
        <div className={styles["main-title"]}>김용민</div>
        <div className={styles["sub-title"]}>Web Developer</div>
      </div>
      <div className={styles["header__social"]}>
        <span className={styles["social-link"]}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/hjk70288"
          >
            <i className="fab fa-github"></i>
          </a>
        </span>
        <span className={styles["social-link"]}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/kym.dev"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </span>
        <span className={styles["social-link"]}>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:kimyongmin1228@gmail.com"
          >
            <i className="far fa-envelope"></i>
          </a>
        </span>
      </div>
      <div className={styles["header__links"]}>
        <Button selected={pathname === "/"} link="/">
          Home
        </Button>
        <Button selected={pathname === "/me"} link="/me">
          About Me
        </Button>
        <Button selected={pathname === "/experience"} link="/experience">
          Experience
        </Button>
      </div>

      <div className={styles["header__copyright"]}>
        © 2022. (KYM) all rights reserved.
      </div>
    </div>
  );
};

export default Header;
