import React, { useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../store/LanguageContext";
import ColorContext from "../store/ColorContext";

import "./App.css";

const App = (props: any) => {
  const [language, setLanguage] = useState<string>("english");
  const onLanguageChange = (language: string): void => {
    setLanguage(language);
  };

  return (
    <div className="ui container">
      <div>
        Select a language:
        <p>
          <span className={`country ${language === "english" ? "active" : ""}`}>
            <i
              className="flag us"
              onClick={() => onLanguageChange("english")}
            />
          </span>
          <span className={`country ${language === "chinese" ? "active" : ""}`}>
            <i
              className="flag tw"
              onClick={() => onLanguageChange("chinese")}
            />
          </span>
        </p>
      </div>
      <ColorContext.Provider value="red">
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
      <br></br>
      {/* <LanguageContext.Provider value={"english"}>
        <UserCreate />
      </LanguageContext.Provider> */}
    </div>
  );
};

export default App;
