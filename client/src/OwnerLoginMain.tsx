import React from "react";
import Header from "./components/Header";
import ButtonChild from "./components/Button";
import "./App.css";

function OwnerLoginMain() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="OwnerLoginMain">
        <div className="text_owLoginMain">
          <h2>Welcome to Taberu!!</h2>
        </div>
        <nav className="navi_owLoginMain">
          <ButtonChild link={"/user/family"} text={"Family"} />
          <ButtonChild link={"/AllRecipe"} text={"All Recipes"} />
          <ButtonChild link={"/user/recipe"} text={"My Recipe Reviews"} />
        </nav>
      </main>
    </div>
  );
}

export default OwnerLoginMain;
