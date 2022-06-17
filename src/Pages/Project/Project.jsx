import React from "react";
import styles from "./project.module.scss";
import useScrollFadeIn from "Hooks/useScrollFadeIn";
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import ProjectItem from "Components/Project/Item/ProjectItem";
import Kop from "./List/7meerkat/Kop/Kop";
import Koc from "./List/7meerkat/Koc/Koc";
import Commerce from "./List/7meerkat/Commerce/Commerce";
import Api from "./List/7meerkat/Api/Api";
import HunMinJeomUm from "./List/HunMinJeomUm/HunMinJeomUm";
import Various from "./List/Various/Various";
import kopThumbnail from "Images/Project/7meerkat/Kop/kop0.png";
import kocThumbnail from "Images/Project/7meerkat/Koc/koc0.png";
import comThumbnail from "Images/Project/7meerkat/Commerce/com0.png";
import apiThumbnail from "Images/Project/7meerkat/Api/7meerkat.ico";
import hunThumbnail from "Images/Project/HunMinJeomUm/hun0.png";
import varThumbnail from "Images/Project/Various/var0.png";

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
                  thumbnail={kopThumbnail}
                  title={"🚗 주차장 관리자 페이지 개발"}
                  period={"2021 - 2022"}
                  skills={"#React #Node.js"}
                />
              </Col>
              <Col sm={6}>
                <ProjectItem
                  to={"7meerkat/koc"}
                  thumbnail={kocThumbnail}
                  title={"💻 회사 관리자 페이지 개발"}
                  period={"2021 - 2022"}
                  skills={"#React #Node.js"}
                />
              </Col>
            </Row>

            <Row justify="between">
              <Col sm={6}>
                <ProjectItem
                  to={"7meerkat/commerce"}
                  thumbnail={comThumbnail}
                  title={"💰 커머스 관리자 페이지 개발"}
                  period={"2021 - 2022"}
                  skills={"#React #Node.js"}
                />
              </Col>
              <Col sm={6}>
                <ProjectItem
                  to={"7meerkat/api"}
                  thumbnail={apiThumbnail}
                  title={"📡 세븐미어캣 API 서버 개발"}
                  period={"2021 - 2022"}
                  skills={"#Node.js"}
                />
              </Col>
            </Row>

            <Row justify="between">
              <Col sm={6}>
                <ProjectItem
                  to={"various"}
                  thumbnail={varThumbnail}
                  title={"🎨 온라인 전시회 VARIOUS"}
                  period={"2022"}
                  skills={"#React"}
                />
              </Col>
              <Col sm={6}>
                <ProjectItem
                  to={"hunminjeomum"}
                  thumbnail={hunThumbnail}
                  title={"🇰🇷 훈민점음"}
                  period={"2020 - 2021"}
                  skills={"#Python3 #OpenCV"}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Switch>
        <Route exact path="/project/7meerkat/kop" component={Kop} />
        <Route exact path="/project/7meerkat/koc" component={Koc} />
        <Route exact path="/project/7meerkat/commerce" component={Commerce} />
        <Route exact path="/project/7meerkat/api" component={Api} />
        <Route exact path="/project/hunminjeomum" component={HunMinJeomUm} />
        <Route exact path="/project/various" component={Various} />
      </Switch>
    </>
  );
};

export default Project;
