import React from "react";
import "../style/BtmPanel.scss";
import cx from "classnames";

const className = "btm-panel";
const BtmPanel = (props: any) => {
  const { tripName } = props;
  return (
    <div className={cx(`${className}`)}>
      <strong>德瑞秘境12日</strong>
      <div className={cx(`${className}-progress-container`)}></div>
      <div className={cx(`${className}-progress-bar`)}></div>
    </div>
  );
};

export default BtmPanel;
