import React, { useContext } from "react";
import LanguageContext from "../store/LanguageContext";

const Field = (props: any) => {
  const language = useContext(LanguageContext);
  const text = language === "english" ? "Name" : "姓名";
  return (
    <div className="ui field">
      <label>{text}</label>
      <input></input>
    </div>
  );
};

export default Field;
