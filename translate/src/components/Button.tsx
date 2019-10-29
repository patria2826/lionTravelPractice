import React, { ReactNode } from "react";
import LanguageContext from "../store/LanguageContext";
import ColorContext from "../store/ColorContext";

const Button = (props: any) => {
  // helper functions
  const submitBtnText = (value: string): ReactNode => {
    return value === "english" ? "Submit" : "送出";
  };

  const renderBtn = (color: string): ReactNode => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value: string): ReactNode => {
            return submitBtnText(value);
          }}
        </LanguageContext.Consumer>
      </button>
    );
  };
  return (
    //  the child of consumer must be a funciton
    //  use the consumer when retrieving multiple context objs
    <ColorContext.Consumer>
      {(color: string): ReactNode => {
        return renderBtn(color);
      }}
    </ColorContext.Consumer>
  );
};

export default Button;
