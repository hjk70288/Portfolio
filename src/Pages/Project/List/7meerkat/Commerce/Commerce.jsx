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
      title={"π° μ»€λ¨Έμ€ κ΄λ¦¬μ νμ΄μ§ κ°λ°"}
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
        μΈλΈλ―Έμ΄μΊ£μμ μλΉμ€νλ μ΅ κΈ°λ₯μ κ΄λ¦¬ν  μ μλ νμ΄μ§λ₯Ό
        κ°λ°νμμ΅λλ€.
        <div className="white-space-v" />
        <b># μ£Όμ κΈ°λ₯</b>
        μν CRUD, μ£Όλ¬Έ κ΄λ¦¬(λ°°μ‘ κ΄λ¦¬)λ±μ μ»€λ¨Έμ€ κ΄λ¦¬ κΈ°λ₯λ€μ μ£Όλ‘
        μ κ³΅ν©λλ€.
        <br />
        <br />
        μν λ±λ‘ μ μ΅μμ μ€μ ν  μ μκ² νμ¬ μ΅μ λ³ κ°κ²© μ±μ λ λ€λ₯΄κ² ν  μ
        μλλ‘ κ°λ°νμμ΅λλ€.
        <br />
        <br />
        μ£Όλ¬Έλ μνμ μ‘μ₯ λ²νΈλ‘ λ°°μ‘ μ λ³΄λ₯Ό μ‘°νν΄ λ°°μ‘ μνλ₯Ό μμλ΄λ μμμ
        μλννμ¬ μ¬λμ΄ μμμμΌλ‘ λ°°μ‘ μνλ₯Ό λ°κΎΈμ§ μμλ λλλ‘
        κ°λ°νμμ΅λλ€.
        <br />
        <br />
        μ΄ μΈμλ κ²°μ μ κ²°μ  μ·¨μ λ΄μ­μ μ΄ν΄λ³Ό μ μλ κ²°μ  κ΄λ¦¬ κΈ°λ₯κ³Ό κ²°μ 
        νμ ν΅κ³λ₯Ό λνλΈ κ·Έλνλ₯Ό νμΈν  μ μλ κΈ°λ₯ λν μ κ³΅ν©λλ€.
        <div className="white-space-v" />
        <b># μ­ν </b>
        DB μ€κ³ 1λͺ / κ°λ° 1λͺ
        <br />
        μ λ λ³Έ νλ‘μ νΈμμ νμ€ν μΉ κ°λ° ν¬μ§μμΌλ‘ μ€κ³λ DBλ₯Ό λ°νμΌλ‘
        μ μ²΄μ μΈ κΈ°λ₯ κ°λ°μ μ§ννμμ΅λλ€.
        <div className="white-space-v" />
        <b># κΈ°μ  μ€ν</b>
        React / Node.js / MariaDB
      </div>
    </Detail>
  );
};

export default Commerce;
