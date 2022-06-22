import React from "react";
import styles from "Components/Project/Detail/detail.module.scss";
import Detail from "Components/Project/Detail/Detail";
import img0 from "Images/Project/7meerkat/Commerce/com0.png";
import img1 from "Images/Project/7meerkat/Commerce/com1.png";
import img2 from "Images/Project/7meerkat/Commerce/com2.png";
import img3 from "Images/Project/7meerkat/Commerce/com3.png";
import img4 from "Images/Project/7meerkat/Commerce/com4.png";
import img5 from "Images/Project/7meerkat/Commerce/com5.png";

const Commerce = () => {
  return (
    <Detail
      title={"💰 커머스 관리자 페이지 개발"}
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
        세븐미어캣에서 서비스하는 샵 기능을 관리할 수 있는 페이지를
        개발하였습니다.
        <div className="white-space-v" />
        <b># 주요 기능</b>
        상품 CRUD, 주문 관리(배송 관리)등의 커머스 관리 기능들을 주로
        제공합니다.
        <br />
        <br />
        상품 등록 시 옵션을 설정할 수 있게 하여 옵션 별 가격 책정도 다르게 할 수
        있도록 개발하였습니다.
        <br />
        <br />
        주문된 상품의 송장 번호로 배송 정보를 조회해 배송 상태를 알아내는 작업을
        자동화하여 사람이 수작업으로 배송 상태를 바꾸지 않아도 되도록
        개발하였습니다.
        <br />
        <br />
        이 외에도 결제와 결제 취소 내역을 살펴볼 수 있는 결제 관리 기능과 결제
        횟수 통계를 나타낸 그래프를 확인할 수 있는 기능 또한 제공합니다.
        <div className="white-space-v" />
        <b># 역할</b>
        DB 설계 1명 / 개발 1명
        <br />
        저는 본 프로젝트에서 풀스택 웹 개발 포지션으로 설계된 DB를 바탕으로
        전체적인 기능 개발을 진행하였습니다.
        <div className="white-space-v" />
        <b># 기술 스택</b>
        React / Node.js / MariaDB
      </div>
    </Detail>
  );
};

export default Commerce;
