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
    <Detail
      title={"🎨 온라인 전시회 VARIOUS"}
      images={[img0, img1, img2, img3, img4]}
    >
      <div className={styles["desc__info"]}>
        <div>
          <i>💻</i> 김용민
        </div>
        <div>
          <i>🗓</i> 2022
        </div>
        <div>
          <i>🔗</i>
          <a
            href="https://hjk70288.github.io/Various"
            target="blank"
            style={{ color: "#0099cc" }}
          >
            보러가기
          </a>
        </div>
      </div>
      <div className={styles["desc__content"]}>
        <b># 프로젝트 내용</b>
        평소 동생이 인스타그램에 올리는 그림들을 보고 이 그림들로 온라인
        전시회를 해보면 어떨까 하는 생각이 들어 진행한 토이 프로젝트입니다.
        <br />
        <br />
        인간의 다양한 감정을 표현하는것을 주제로 하였으며 사랑, 불안, 고통을
        표현하는 3가지 그림들을 전시하였습니다.
        <br />
        <br />
        메인 페이지에는 마우스를 따라다니는 SVG로 벽에 손전등을 비추는듯한
        효과를 표현하고자 하였습니다. 클릭 가능한 요소 위에 마우스를 오버하면
        손전등이 밝게 빛나도록 구현하였습니다.
        <br />
        <br />
        그림의 상세페이지에는 각 감정과 어울린다고 생각이 드는 CSS 효과를
        구현해보았습니다.
        <div className="white-space-v" />
        <b># 역할</b>
        개발 1명 / 미술 1명
        <br />
        본 프로젝트에서, 개발을 총괄하여 진행하였습니다.
        <div className="white-space-v" />
        <b># 기술 스택</b>
        React / CSS (SCSS)
      </div>
    </Detail>
  );
};

export default Various;
