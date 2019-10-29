import React, { ReactNode } from "react";
import LanguageContext from "../store/LanguageContext";
import ColorContext from "../store/ColorContext";

const Button = (props: any) => {
  // helper function
  const submitBtnText = (value: string): ReactNode => {
    return value === "english" ? "Submit" : "送出";
  };
  return (
    <ColorContext.Consumer>
      {(color: string): ReactNode => {
        return (
          <button className={`ui button ${color}`}>
            {/* the child of consumer must be a funciton */}
            {/* use the consumer when retrieving multiple context objs */}
            {/* not necessary while using hooks? */}
            <LanguageContext.Consumer>
              {(value: string): ReactNode => {
                return submitBtnText(value);
              }}
            </LanguageContext.Consumer>
          </button>
        );
      }}
    </ColorContext.Consumer>
  );
};

export default Button;
