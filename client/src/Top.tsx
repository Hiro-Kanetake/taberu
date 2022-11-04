import React from "react";
import ButtonChild from "./components/Button";
import "./App.css";
import bg_top from "./assets/bg_top.png";
import logo from "./assets/logo.png";

function Top() {
  return (
    <div className="Top">
        <h1 className="logo">
          <img src={logo} alt="taberu" />
        </h1>
      <main>
        <div className="image_top">
          <img src={bg_top} alt="taberu" />
        </div>
        <div className="btuArea_top">
        <ButtonChild link={"/login"} text={"LOGIN"} />
        <ButtonChild link={"/register"} text={"SIGNUP"} />
      </div>
      </main>
    </div>
  );
}

export default Top;
