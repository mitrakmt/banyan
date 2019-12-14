import React from "react";
import logo from "logo.svg";

import "./header.scss";

function App() {
  return (
    <div className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <div className="header-container" />
      <h4>Banyan Code Camp</h4>
    </div>
  );
}

export default App;
