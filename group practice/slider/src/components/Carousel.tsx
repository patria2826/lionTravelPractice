import React from "react";
import "../style/Carousel.scss";
import cx from "classnames";

const className = "carousel";

const Carousel = (props: any) => {
  return (
    <div className={cx(`${className}`)}>
      <a href="/#" className={cx(`${className}-pic`)}>
        <img src="./imgs/Austria ‧ Czechia_12Day.jpg"></img>
      </a>
      <a href="/#" className={cx(`${className}-pic`)}>
        <img src="./imgs/France_11Day.jpg"></img>
      </a>
    </div>
  );
};

export default Carousel;
