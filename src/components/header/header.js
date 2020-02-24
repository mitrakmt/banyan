import React from "react";
import logo from "images/logo/logo.png";
import { Link } from "react-router-dom";

import "./header.scss";

function App() {
  return (
    <div className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <div className="header-container" />
      <Link to="/" className="header-link">
        <h4>Banyan Code Camp</h4>
      </Link>
    </div>
  );
}

export default App;
