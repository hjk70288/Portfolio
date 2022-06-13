import React, { useEffect, useRef } from "react";
import styles from "./home.module.scss";
import useScrollFadeIn from "Hooks/useScrollFadeIn";

const Home = () => {
  const welcomeRef = useRef();

  const startTypingAnimation = (text, ref, speed, delay) => {
    const textWrap = ref;
    textWrap.innerHTML = "";

    setTimeout(() => {
      let textIndex = 0;

      function typing() {
        let txt = text[textIndex++];
        textWrap.innerHTML += txt === "\n" ? "<br/>" : txt;
      }

      function startTyping() {
        setTimeout(function () {
          typing();

          if (textIndex < text.length) {
            startTyping();
          }
        }, speed);
      }
      startTyping();
    }, delay);
  };

  useEffect(() => {
    const titleRef = welcomeRef.current.children[0];
    titleRef.innerHTML = "";
    const subTitleRef = welcomeRef.current.children[1];
    subTitleRef.innerHTML = "";
    const blinkRef = welcomeRef.current.children[2];
    blinkRef.style.height = "1.6rem";

    startTypingAnimation(
      "안녕하세요 웹 개발자 김용민입니다.\n",
      titleRef,
      100,
      700
    );
    startTypingAnimation("방문해주셔서 감사합니다.", subTitleRef, 100, 3200);
    setTimeout(() => {
      blinkRef.style.height = "1.2rem";
    }, 2800);
  }, []);

  return (
    <div {...useScrollFadeIn(0.7, 0)} className={styles["home"]}>
      <div ref={welcomeRef} className={styles["home__welcome"]}>
        <span className={styles["welcome__title"]}></span>
        <span className={styles["welcome__sub-title"]}>asdsa</span>
        <span className={styles["blink"]}></span>
      </div>
    </div>
  );
};

export default Home;
