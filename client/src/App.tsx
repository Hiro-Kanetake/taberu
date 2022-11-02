import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChildMain from "./ChildMain";
import ChildMenu from "./ChildMenu";
import ChildDone from "./ChildDone";
import Top from "./Top";
import OwnerRegist from "./OwnerRegist";
import OwnerLogin from "./OwnerLogin";
import OwnerMatchFamily from "./OwnerMatchFamily";
import OwnerLoginMain from "./OwnerLoginMain";
import OwnerPost from "./OwnerPost";
import OwnerFamily from "./OwnerFamily";
import OwnerRecipe from "./OwnerRecipe";
import AllRecipe from "./AllRecipe";
import Header from "./components/Header";
import "./components/Reset.css";
import "./App.css";
import "./components/Text.css";
import "./components/Header.css";

function App() {
  const [accountId, setAccountId] = useState<number | undefined>();
  return (
    <div className="AppChild">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/register" element={<OwnerRegist />} />
          <Route path="/login" element={<OwnerLogin setAccountId={setAccountId} />} />
          <Route path="/user/main" element={
              <>
                <Header />
                <OwnerLoginMain />
              </>
            } />
          <Route path="/OwnerPost" element={
              <>
                <Header />
                <OwnerPost />
              </>
            } />
          <Route path="/OwnerFamily" element={
              <>
                <Header />
                <OwnerFamily account_id={accountId} />
              </>
            } />
          <Route path="/OwnerRecipe" element={
              <>
                <Header />
                <OwnerRecipe />
              </>
            } />
           <Route path="/AllRecipe" element={
              <>
                <Header />
                <AllRecipe />
              </>
            } />
          <Route path="/OwnerMatchFamily" element={<OwnerMatchFamily accountId={accountId} />} />
          <Route path="/ChildMenu" element={<ChildMenu account_id={accountId} />} />
          <Route path="/ChildMain" element={<ChildMain />} />
          <Route path="/ChildDone" element={<ChildDone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
