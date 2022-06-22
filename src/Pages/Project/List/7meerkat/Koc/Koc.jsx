import React from "react";
import styles from "Components/Project/Detail/detail.module.scss";
import Detail from "Components/Project/Detail/Detail";
import img0 from "Images/Project/7meerkat/Koc/koc0.png";
import img1 from "Images/Project/7meerkat/Koc/koc1.png";
import img2 from "Images/Project/7meerkat/Koc/koc2.png";
import img3 from "Images/Project/7meerkat/Koc/koc3.png";
import img4 from "Images/Project/7meerkat/Koc/koc4.png";
import img5 from "Images/Project/7meerkat/Koc/koc5.png";

const Koc = () => {
  return (
    <Detail
      title={"💻 회사 관리자 페이지 개발"}
      images={[img0, img1, img2, img3, img4, img5]}
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
        주차장, 차량, 앱 사용자, 커머스 등 세븐미어캣의 모든 요소와 데이터들을
        총괄하고 분석하는 회사 관리자 페이지를 개발하였습니다.
        <br />
        <br />
        데이터는 세븐미어캣의 운영 및 주요 의사 결정의 원동력이며 핵심적인
        역할을 합니다. 하루마다 누적되는 약 5만건의 입출차 데이터는 무궁무진한
        정보를 창출해낼 수 있게 하며 이러한 데이터는 곧 비즈니스와도 연결되게
        됩니다.
        <br />
        <br />
        해당 관리자 페이지에서는 세븐미어캣의 모든 데이터들이 낭비되지 않고
        제대로 관리될 수 있도록 합니다. 데이터를 분석하고 가치있는 정보를
        뽑아내, 차트화 및 엑셀화하여 회사 내 모든 팀이 쉽게 접근할 수 있도록
        하였습니다.
        <br />
        <br />
        위에 서술한 데이터 조회의 기능 뿐만 아니라 앱으로 전송되는 푸시 알림
        예약, 관리자 계정 관리 등 회사에서 필요로하는 엄청나게 다양한 관리자
        기능들을 제공합니다.
        <div className="white-space-v" />
        <b># 역할</b>
        개발 1명
        <br />
        저는 본 프로젝트에서 풀스택 웹 개발 포지션으로 개발을 총괄하여 기능 개발
        및 유지보수를 진행하였습니다.
        <div className="white-space-v" />
        <b># 기술 스택</b>
        React / Redux / Node.js / MariaDB / Highcharts.js / Firebase
      </div>
    </Detail>
  );
};

export default Koc;
