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
      title={"π¨ μ¨λΌμΈ μ μν VARIOUS"}
      images={[img0, img1, img2, img3, img4]}
    >
      <div className={styles["desc__info"]}>
        <div>
          <i>π»</i> κΉμ©λ―Ό
        </div>
        <div>
          <i>π</i> 2022
        </div>
        <div>
          <i>π</i>
          <a
            href="https://hjk70288.github.io/Various"
            target="blank"
            style={{ color: "#0099cc" }}
          >
            λ³΄λ¬κ°κΈ°
          </a>
        </div>
      </div>
      <div className={styles["desc__content"]}>
        <b># νλ‘μ νΈ λ΄μ©</b>
        νμ λμμ΄ μΈμ€νκ·Έλ¨μ μ¬λ¦¬λ κ·Έλ¦Όλ€μ λ³΄κ³  μ΄ κ·Έλ¦Όλ€λ‘ μ¨λΌμΈ
        μ μνλ₯Ό ν΄λ³΄λ©΄ μ΄λ¨κΉ νλ μκ°μ΄ λ€μ΄ μ§νν ν μ΄ νλ‘μ νΈμλλ€.
        <br />
        <br />
        μΈκ°μ λ€μν κ°μ μ νννλκ²μ μ£Όμ λ‘ νμμΌλ©° μ¬λ, λΆμ, κ³ ν΅μ
        νννλ 3κ°μ§ κ·Έλ¦Όλ€μ μ μνμμ΅λλ€.
        <br />
        <br />
        λ©μΈ νμ΄μ§μλ λ§μ°μ€λ₯Ό λ°λΌλ€λλ SVGλ‘ λ²½μ μμ λ±μ λΉμΆλλ―ν
        ν¨κ³Όλ₯Ό νννκ³ μ νμμ΅λλ€. ν΄λ¦­ κ°λ₯ν μμ μμ λ§μ°μ€λ₯Ό μ€λ²νλ©΄
        μμ λ±μ΄ λ°κ² λΉλλλ‘ κ΅¬ννμμ΅λλ€.
        <br />
        <br />
        κ·Έλ¦Όμ μμΈνμ΄μ§μλ κ° κ°μ κ³Ό μ΄μΈλ¦°λ€κ³  μκ°μ΄ λλ CSS ν¨κ³Όλ₯Ό
        κ΅¬νν΄λ³΄μμ΅λλ€.
        <div className="white-space-v" />
        <b># μ­ν </b>
        κ°λ° 1λͺ / λ―Έμ  1λͺ
        <br />
        λ³Έ νλ‘μ νΈμμ, κ°λ°μ μ΄κ΄νμ¬ μ§ννμμ΅λλ€.
        <div className="white-space-v" />
        <b># κΈ°μ  μ€ν</b>
        React / CSS (SCSS)
      </div>
    </Detail>
  );
};

export default Various;
