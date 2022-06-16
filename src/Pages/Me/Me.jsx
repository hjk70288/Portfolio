import React from "react";
import styles from "./me.module.scss";
import useScrollFadeIn from "Hooks/useScrollFadeIn";
import { Container, Row, Col } from "react-grid-system";
import Timeline from "Components/Timeline/Timeline";
import Progress from "Components/Progress/Progress";

const Me = () => {
  return (
    <div {...useScrollFadeIn(2, 0.7, 0)} className={styles["me"]}>
      <div className={styles["me__content"]}>
        <div className={styles["me__title"]}>
          About <span>Me</span>
        </div>
        <Container fluid>
          <Row>
            <Col sm={7}>
              <div className={styles["me__introduce"]}>
                안녕하세요 개발자 김용민입니다!
                <br />
                저는 현재 웹 프론트 / 백엔드 개발을 하고있으며, 주로 React와
                Node.js 기반의 프로젝트를 다루고 있습니다.
                <br />
                이곳은 제 소개와 주로 사용하는 기술 스택, 경험 등의 내용을
                기술해놓은 공간입니다. 😼
              </div>
            </Col>
            <Col sm={5}>
              <div className={styles["me__contact"]}>
                <div className={styles["contact__title"]}>Name</div>
                <span>김용민</span>
              </div>
              <div className={styles["me__contact"]}>
                <div className={styles["contact__title"]}>Age</div>
                <span>24</span>
              </div>
              <div className={styles["me__contact"]}>
                <div className={styles["contact__title"]}>Address</div>
                <span>Siheung, Gyeonggi</span>
              </div>
              <div className={styles["me__contact"]}>
                <div className={styles["contact__title"]}>Phone</div>
                <span>010 3703 0728</span>
              </div>
            </Col>
          </Row>

          <div className="white-space-v" />

          <Row>
            <Col sm={7}>
              <div className={styles["me__experience"]}>
                <div className={styles["experience__title"]}>
                  My <span>Experience</span>
                </div>
                <Timeline
                  period={"2021 - 2022"}
                  agency={"세븐미어캣"}
                  title={"풀스택 웹 개발"}
                >
                  (주)세븐미어캣에서 풀스택 웹 개발자로 1년간 근무.
                  <br />
                  주차장 관리자 페이지, 회사 관리자 페이지, 회사 홈페이지,
                  커머스 관리자 페이지 등의 프로젝트를 진행.
                  <br />
                  <b>#React</b> <b>#Node.js</b> <b>#MariaDB</b>
                </Timeline>

                <Timeline
                  period={"2020 - 2021"}
                  agency={"한국공학대"}
                  title={"시각 장애인을 위한 학습 보조 점자 시스템"}
                >
                  사용자로부터 사진, 워드, ppt등의 파일을 수신하여 OCR 처리하는
                  서버 개발.
                  <br />
                  이미지 전처리, OCR, 텍스트 후처리 등의 과정을 구현.
                  <br />
                  <b>#Python3</b> <b>#Socket</b> <b>#OpenCV</b>
                </Timeline>
              </div>

              <div className={styles["me__certificate"]}>
                <div className={styles["certificate__title"]}>Certificate</div>
                <Timeline
                  period={"2021"}
                  agency={"한국산업인력공단"}
                  title={"정보처리기사"}
                >
                  정보처리기사 자격증 취득
                </Timeline>

                <Timeline
                  period={"2020"}
                  agency={"한국공학대"}
                  title={"장려상"}
                >
                  2020 KPU 소프트웨어 경진대회
                </Timeline>

                <Timeline
                  period={"2019"}
                  agency={"한국공학대"}
                  title={"장려상"}
                >
                  2019 KPU 소프트웨어 경진대회
                </Timeline>
              </div>

              <div className={styles["me__education"]}>
                <div className={styles["education__title"]}>Education</div>
                <Timeline
                  period={"2018 - 2022"}
                  agency={"한국공학대"}
                  title={"Computer Engineering"}
                >
                  한국공학대학교 컴퓨터공학과 - 수료
                </Timeline>
              </div>
            </Col>

            <Col sm={5}>
              <div className={styles["me__tech-skill"]}>
                <div className={styles["tech-skill__title"]}>
                  Tech <span>Skills</span>
                </div>
                <Progress title={"React"} progress={90} />
                <Progress title={"SCSS"} progress={85} />
                <Progress title={"Node.js"} progress={90} />
                <Progress title={"MySQL(MariaDB)"} progress={85} />
                <Progress title={"AWS"} progress={80} />
                <Progress title={"Nginx"} progress={80} />
                <Progress title={"Git"} progress={90} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Me;
