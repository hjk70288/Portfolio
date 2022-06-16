import React, { useRef } from "react";
import styles from "./detail.module.scss";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import ImageGallery from "react-image-gallery";

const Detail = props => {
  const detailRef = useRef();
  const history = useHistory();

  const { title, images } = props;

  const imageList = [];
  images.map(image => imageList.push({ original: image, thumbnail: image }));

  const closeDetail = () => {
    detailRef.current.style.animation = "unset";
    setTimeout(() => {
      detailRef.current.style.transform = "translate3d(100%, 0, 0)";
    }, 1);

    setTimeout(() => {
      history.push("/project");
    }, 1000);
  };

  return (
    <div ref={detailRef} className={styles["detail"]}>
      <div className={styles["detail__content"]}>
        <div className={styles["detail__close-button"]} onClick={closeDetail}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["detail__title"]}>{title}</div>

        <Container fluid>
          <Row>
            <Col md={6.5}>
              <ImageGallery
                items={imageList}
                autoPlay={true}
                showNav={false}
                showPlayButton={false}
                showFullscreenButton={false}
              />
            </Col>
            <Col md={5.5}>
              <div className={styles["detail__desc"]}>
                <div className={styles["desc__title"]}>Description</div>
                {props.children}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Detail;
