import React from "react";
import styles from "Components/Project/Detail/detail.module.scss";
import Detail from "Components/Project/Detail/Detail";
import img0 from "Images/Project/HunMinJeomUm/hun0.png";
import img1 from "Images/Project/HunMinJeomUm/hun1.png";
import img2 from "Images/Project/HunMinJeomUm/hun2.png";
import img3 from "Images/Project/HunMinJeomUm/hun3.png";
import img4 from "Images/Project/HunMinJeomUm/hun4.png";

const HunMinJeomUm = () => {
  return (
    <Detail title={"🇰🇷 훈민점음"} images={[img0, img1, img2, img3, img4]}>
      <div className={styles["desc__info"]}>
        <div>
          <i>💻</i> 김용민
        </div>
        <div>
          <i>🗓</i> 2020 - 2021
        </div>
        <div>
          <i>🔗</i>
          <a
            href="https://www.koreascience.or.kr/article/JAKO202130760005667.page"
            target="blank"
            style={{ color: "#0099cc" }}
          >
            논문 보러가기
          </a>
        </div>
      </div>
      <div className={styles["desc__content"]}>
        <b># 프로젝트 내용</b>
        시각장애인의 수는 증가하고 있지만 시각장애인을 위한 점역 교재는 부족하여
        본인의 의지에 관계 없이 교육권을 침해받는 경우가 많습니다.
        <br />
        저희는 시각장애인의 교육권을 보장하기 위해 점자책으로 나오지 않는 교재나
        문서, 사진 등을 보호자의 도움 없이도 혼자 쉽게 공부할 수 있게끔 도와주는
        학습 시스템을 개발하였습니다. 장애인 접근성을 고려하여 어플리케이션과
        웹페이지를 설계하고 점자 키트는 아두이노와 점자 모듈을 이용하여
        제작하였습니다. 다양한 실험을 통해 점자 출력, 음성 출력이 정상적으로
        작동하는 것과 높은 OCR 인식률을 제공하는 것을 확인하였습니다. 또한,
        시각이 완전히 차단된 상태에서도 어플리케이션이 손쉽게 이용 가능하다는
        것을 확인하였습니다.
        <div className="white-space-v" />
        <b># 주요 기능</b>
        이 시스템은 다음과 같은 기능들을 지원합니다.
        <br />
        첫째, 원하는 문서(word, hwp, ppt 등) 또는 사진을 선택해 OCR을 이용하여
        텍스트를 추출한다.
        <br />
        둘째, 추출한 텍스트를 음성과 점자로 변환한다.
        <br />
        셋째, 회원가입 기능을 제공하여 추출된 텍스트를 다시 볼 수 있도록 한다.
        <div className="white-space-v" />
        <b># 역할</b>
        벡엔드 1명 / 웹 1명 / 하드웨어 1명/ 앱 1명
        <br />
        저는 본 프로젝트에서, 백엔드 포지션으로 OCR 서버의 구현을
        담당하였습니다.
        <br />
        <br />
        앱, 웹 파트로부터 문서, 사진 등의 파일을 수신받아 전처리 {"->"} OCR{" "}
        {"-> "}
        후처리의 과정을 거쳐 텍스트를 추출하여 송신하는 역할의 서버를
        구현하였습니다.
        <br />
        <br />
        이미지 전처리에는 OpenCV를 사용, OCR에는 Google Cloud의 Vision API를
        사용, 텍스트 후처리는 맞춤법 검사를 활용하여 개발하였습니다.
        <div className="white-space-v" />
        <b># 기술 스택</b>
        Python3 / OpenCV / Socket / Google Cloud / AWS / TTS / Arduino
      </div>
    </Detail>
  );
};

export default HunMinJeomUm;
