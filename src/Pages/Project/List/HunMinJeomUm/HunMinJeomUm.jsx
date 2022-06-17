import React from "react";
import styles from "Components/Project/Detail/detail.module.scss";
import Detail from "Components/Project/Detail/Detail";
import img0 from "Images/Project/HunMinJeomUm/hun0.png";
import img1 from "Images/Project/HunMinJeomUm/hun1.png";
import img2 from "Images/Project/HunMinJeomUm/hun2.png";
import img3 from "Images/Project/HunMinJeomUm/hun3.png";

const HunMinJeomUm = () => {
  return (
    <Detail title={"훈민점음"} images={[img0, img1, img2, img3]}>
      <div className={styles["desc__info"]}>
        <div>
          <i>💻</i> 김용민
        </div>
        <div>
          <i>🗓</i> 2021 - 2022
        </div>
        <div>
          <i>🔗</i>
          <a
            href="https://www.koreascience.or.kr/article/JAKO202130760005667.page"
            target="blank"
            style={{ color: "#0066a2" }}
          >
            논문 보러가기
          </a>
        </div>
      </div>
      <div className={styles["desc__content"]}>
        <b># 프로젝트 내용</b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
        quibusdam? Explicabo, quidem repudiandae architecto molestiae animi
        optio eos dolorum ea aperiam commodi fugiat facere doloribus suscipit
        non ipsa nam iusto?
        <div className="white-space-v" />
        <b># 주요 기능</b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
        quibusdam? Explicabo, quidem repudiandae architecto molestiae animi
        optio eos dolorum ea aperiam commodi fugiat facere doloribus suscipit
        non ipsa nam iusto?
        <div className="white-space-v" />
        <b># 역할</b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
        quibusdam? Explicabo, quidem repudiandae architecto molestiae animi
        optio eos dolorum ea aperiam commodi fugiat facere doloribus suscipit
        non ipsa nam iusto?
        <div className="white-space-v" />
        <b># 기술 스택</b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
        quibusdam? Explicabo, quidem repudiandae architecto molestiae animi
        optio eos dolorum ea aperiam commodi fugiat facere doloribus suscipit
        non ipsa nam iusto?
      </div>
    </Detail>
  );
};

export default HunMinJeomUm;
