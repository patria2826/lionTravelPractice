import React, { useState, useEffect } from "react";
import BtmPanel from "./BtmPanel";
import Carousel from "./Carousel";
import cx from "classnames";
import "../style/App.scss";
import CurrentImgContext from "../reducers/CurrentImgContext";

const className = "app";
const App = (props: any) => {
  const totalPics = 2;
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log(currentItem);
      setCurrentItem(currentItem + 1);
    }, 5000);
    return () => {};
  }, [currentItem]);

  return (
    <div className={cx(`${className}`)}>
      <CurrentImgContext.Provider value={currentItem}>
        <Carousel />
      </CurrentImgContext.Provider>
      <div className={cx(`${className}-panel-container`)}>
        <BtmPanel />
        <BtmPanel />
        <BtmPanel />
        <BtmPanel />
        <BtmPanel />
      </div>
    </div>
  );
};

export default App;
