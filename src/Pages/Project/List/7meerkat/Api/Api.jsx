import React from "react";
import styles from "Components/Project/Detail/detail.module.scss";
import Detail from "Components/Project/Detail/Detail";
import img0 from "Images/Project/7meerkat/Api/7meerkat.ico";

const Api = () => {
  return (
    <Detail title={"📡 세븐미어캣 API 서버 개발"} images={[img0]}>
      <div className={styles["desc__info"]}>
        <div>
          <i>💻</i> 김용민
        </div>
        <div>
          <i>🗓</i> 2021 - 2022
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

export default Api;
