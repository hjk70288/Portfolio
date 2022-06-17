import React from "react";
import styles from "Components/Project/Detail/detail.module.scss";
import Detail from "Components/Project/Detail/Detail";
import img0 from "Images/Project/Various/var0.png";
import img1 from "Images/Project/Various/var1.png";
import img2 from "Images/Project/Various/var2.png";
import img3 from "Images/Project/Various/var3.png";
import img4 from "Images/Project/Various/var4.png";

const Various = () => {
  return (
    <Detail title={"Various"} images={[img0, img1, img2, img3, img4]}>
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
            href="https://hjk70288.github.io/Various"
            target="blank"
            style={{ color: "#0066a2" }}
          >
            보러가기
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

export default Various;
