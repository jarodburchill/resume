import React from "react";
import SideBar from "./SideBar";
import Main from "./Main";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div>
          <SideBar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
