import React from "react";
import SideBar from "./SideBar";
import Main from "./Main";

function App() {
  return (
    <div className="app-container">
      <div className="page-container">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
