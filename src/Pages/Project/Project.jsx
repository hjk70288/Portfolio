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
// import apiThumbnail from "Images/Project/7meerkat/Api/7meerkat.ico";
import hunThumbnail from "Images/Project/HunMinJeomUm/hun0.png";
import varThumbnail from "Images/Project/Various/var0.png";

const Project = () => {
  return (
    <>
      <div {...useScrollFadeIn(1, 0.7, 0)} className={styles["project"]}>
        <div className={styles["project__content"]}>
          <div className={styles["project__title"]}>
            Project <span>List</span>
          </div>

          <Container fluid>
            <Row justify="between">
              <Col sm={6}>
                <ProjectItem
                  to={"7meerkat/kop"}
                  thumbnail={kopThumbnail}
                  title={"π μ£Όμ°¨μ₯ κ΄λ¦¬μ νμ΄μ§ κ°λ°"}
                  period={"2021 - 2022"}
                  skills={"#React #Node.js"}
                />
              </Col>
              <Col sm={6}>
                <ProjectItem
                  to={"7meerkat/koc"}
                  thumbnail={kocThumbnail}
                  title={"π» νμ¬ κ΄λ¦¬μ νμ΄μ§ κ°λ°"}
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
                  title={"π° μ»€λ¨Έμ€ κ΄λ¦¬μ νμ΄μ§ κ°λ°"}
                  period={"2021 - 2022"}
                  skills={"#React #Node.js"}
                />
              </Col>
              <Col sm={6}>
                <ProjectItem
                  to={"various"}
                  thumbnail={varThumbnail}
                  title={"π¨ μ¨λΌμΈ μ μν VARIOUS"}
                  period={"2022"}
                  skills={"#React"}
                />
              </Col>
              {/* <Col sm={6}>
                <ProjectItem
                  to={"7meerkat/api"}
                  thumbnail={apiThumbnail}
                  title={"π‘ μΈλΈλ―Έμ΄μΊ£ API μλ² κ°λ°"}
                  period={"2021 - 2022"}
                  skills={"#Node.js"}
                />
              </Col> */}
            </Row>

            <Row justify="between">
              <Col sm={6}>
                <ProjectItem
                  to={"hunminjeomum"}
                  thumbnail={hunThumbnail}
                  title={"π°π· νλ―Όμ μ"}
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
