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
      title={"π» νμ¬ κ΄λ¦¬μ νμ΄μ§ κ°λ°"}
      images={[img0, img1, img2, img3, img4, img5]}
    >
      <div className={styles["desc__info"]}>
        <div>
          <i>π»</i> κΉμ©λ―Ό
        </div>
        <div>
          <i>π</i> 2021 - 2022
        </div>
      </div>
      <div className={styles["desc__content"]}>
        <b># νλ‘μ νΈ λ΄μ©</b>
        μ£Όμ°¨μ₯, μ°¨λ, μ± μ¬μ©μ, μ»€λ¨Έμ€ λ± μΈλΈλ―Έμ΄μΊ£μ λͺ¨λ  μμμ λ°μ΄ν°λ€μ
        μ΄κ΄νκ³  λΆμνλ νμ¬ κ΄λ¦¬μ νμ΄μ§λ₯Ό κ°λ°νμμ΅λλ€.
        <br />
        <br />
        λ°μ΄ν°λ μΈλΈλ―Έμ΄μΊ£μ μ΄μ λ° μ£Όμ μμ¬ κ²°μ μ μλλ ₯μ΄λ©° ν΅μ¬μ μΈ
        μ­ν μ ν©λλ€. νλ£¨λ§λ€ λμ λλ μ½ 5λ§κ±΄μ μμΆμ°¨ λ°μ΄ν°λ λ¬΄κΆλ¬΄μ§ν
        μ λ³΄λ₯Ό μ°½μΆν΄λΌ μ μκ² νλ©° μ΄λ¬ν λ°μ΄ν°λ κ³§ λΉμ¦λμ€μλ μ°κ²°λκ²
        λ©λλ€.
        <br />
        <br />
        ν΄λΉ κ΄λ¦¬μ νμ΄μ§μμλ μΈλΈλ―Έμ΄μΊ£μ λͺ¨λ  λ°μ΄ν°λ€μ΄ λ­λΉλμ§ μκ³ 
        μ λλ‘ κ΄λ¦¬λ  μ μλλ‘ ν©λλ€. λ°μ΄ν°λ₯Ό λΆμνκ³  κ°μΉμλ μ λ³΄λ₯Ό
        λ½μλ΄, μ°¨νΈν λ° μμννμ¬ νμ¬ λ΄ λͺ¨λ  νμ΄ μ½κ² μ κ·Όν  μ μλλ‘
        νμμ΅λλ€.
        <br />
        <br />
        μμ μμ ν λ°μ΄ν° μ‘°νμ κΈ°λ₯ λΏλ§ μλλΌ μ±μΌλ‘ μ μ‘λλ νΈμ μλ¦Ό
        μμ½, κ΄λ¦¬μ κ³μ  κ΄λ¦¬ λ± νμ¬μμ νμλ‘νλ μμ²­λκ² λ€μν κ΄λ¦¬μ
        κΈ°λ₯λ€μ μ κ³΅ν©λλ€.
        <div className="white-space-v" />
        <b># μ­ν </b>
        κ°λ° 1λͺ
        <br />
        μ λ λ³Έ νλ‘μ νΈμμ νμ€ν μΉ κ°λ° ν¬μ§μμΌλ‘ κ°λ°μ μ΄κ΄νμ¬ κΈ°λ₯ κ°λ°
        λ° μ μ§λ³΄μλ₯Ό μ§ννμμ΅λλ€.
        <div className="white-space-v" />
        <b># κΈ°μ  μ€ν</b>
        React / Redux / Node.js / MariaDB / Highcharts.js / Firebase
      </div>
    </Detail>
  );
};

export default Koc;
