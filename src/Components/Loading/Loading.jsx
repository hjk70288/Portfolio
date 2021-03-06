import React, { useState, useEffect, useRef } from "react";
import styles from "./loading.module.scss";

const Loading = () => {
  const loadingRef = useRef();
  const [afterLoad, setAfterLoad] = useState(false);

  useEffect(() => {
    let isComponentMount = true;

    // 로딩 컴포넌트의 display을 0.3초 뒤에 none으로 변경
    const removeLoadingDisplay = () => {
      setTimeout(() => {
        if (loadingRef.current) {
          loadingRef.current.style.display = "none";
        }
      }, 300);
    };

    // 0.3초동안 로딩 컴포넌트 띄우기
    setTimeout(() => {
      if (isComponentMount) {
        setAfterLoad(true);
        removeLoadingDisplay();
      }
    }, 300);

    return () => {
      isComponentMount = false;
    };
  });

  return (
    <div
      ref={loadingRef}
      className={!afterLoad ? styles["before-load"] : styles["after-load"]}
    >
      <div className={styles["loading"]}>
        <svg className={styles["loading__circle"]}>
          <circle cx="50%" cy="50%" r="25"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
