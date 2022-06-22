import React from "react";
import styles from "Components/Project/Detail/detail.module.scss";
import Detail from "Components/Project/Detail/Detail";
import img0 from "Images/Project/7meerkat/Kop/kop0.png";
import img1 from "Images/Project/7meerkat/Kop/kop1.png";
import img2 from "Images/Project/7meerkat/Kop/kop2.png";
import img3 from "Images/Project/7meerkat/Kop/kop3.png";

const Kop = () => {
  return (
    <Detail
      title={"🚗 주차장 관리자 페이지 개발"}
      images={[img0, img1, img2, img3]}
    >
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
        세븐미어캣 제휴 아파트의 주차장을 관리하는 관리자 페이지를
        개발하였습니다.
        <br />
        <br />
        세븐미어캣 제휴 아파트에서는 인공지능이 차량 번호를 인식하고, 등록되어
        있는 차량만을 선별해 출입을 통제 관리합니다. 등록되어 있는 차량을
        선택적으로 통과시키는 것만이 아니라, 재난이나 사고 발생 시 긴급자동차의
        전용번호판을 인식하여 경찰차와 소방차, 구급차 등이 자동 통과할 수 있도록
        합니다.
        <br />
        <br />
        해당 관리자 페이지에서는 주차 차단기 원격 조정은 물론, 차량의 입출차
        조건을 실시간으로 손쉽게 변경할 수 있습니다. 주차한 차량의 번호를
        인식하고 주차 경과일까지 한 번에 데이터화 해 엑셀로 다운받을 수 있게
        하여 일일이 확인하며 수기로 적어야하는 순찰일지를 대신할 수 있도록
        해줍니다.
        <div className="white-space-v" />
        <b># 역할</b>
        PM 1명 / 웹 개발 1명
        <br />
        저는 풀스택 웹 개발 포지션으로 전체적인 기능 개발 및 유지보수를
        진행하였습니다.
        <div className="white-space-v" />
        <b># 기술 스택</b>
        React / Redux / Node.js / MariaDB / AWS(S3)
      </div>
    </Detail>
  );
};

export default Kop;
