import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./main.module.scss";
import Loading from "Components/Loading/Loading";
import Header from "Components/Header/Header";
import Home from "Pages/Home/Home";
import Me from "Pages/Me/Me";
import Project from "Pages/Project/Project";
import Error from "Pages/Error/Error";

const Main = ({ history }) => {
  const handleResizeWindow = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  useEffect(() => {
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <>
      <Loading />
      <div className={styles["page"]}>
        <div className={styles["page__content"]}>
          <Header history={history} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/me" component={Me} />
            <Route exact path="/project" component={Project} />
            <Route path="*" component={Error} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Main;
