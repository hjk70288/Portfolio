import React from "react";
import styles from "./project.module.scss";
import useScrollFadeIn from "Hooks/useScrollFadeIn";
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import ProjectItem from "Components/Project/Item/ProjectItem";
import Kop from "./List/7meerkat/Kop/Kop";

const Project = () => {
  return (
    <>
      <div {...useScrollFadeIn(1, 0.7, 0)} className={styles["project"]}>
        <div className={styles["project__content"]}>
          <div className={styles["project__title"]}>Project</div>

          <Container fluid>
            <Row justify="between">
              <Col sm={6}>
                <ProjectItem
                  to={"7meerkat/kop"}
                  title={"🚗 주차장 관리자 페이지 개발"}
                  period={"2021 - 2022"}
                  skills={"#React #Node.js"}
                />
                <ProjectItem
                  to={"ex"}
                  title={"💻 주차장 관리자 개발"}
                  period={"2021 - 2022"}
                  skills={"#React #Node.js"}
                />
                <ProjectItem
                  to={"ex"}
                  title={"🚗 주차장 관리자 개발"}
                  period={"2021 - 2022"}
                  skills={"#React #Node.js"}
                />
              </Col>
              <Col sm={6}>
                <ProjectItem
                  to={"ex"}
                  title={"🚗 주차장 관리자 개발"}
                  period={"2021 - 2022"}
                  skills={"#React #Node.js"}
                />
                <ProjectItem
                  to={"ex"}
                  title={"🚗 주차장 관리자 개발"}
                  period={"2021 - 2022"}
                  skills={"#React #Node.js"}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Switch>
        <Route exact path="/project/7meerkat/kop" component={Kop} />
      </Switch>
    </>
  );
};

export default Project;
