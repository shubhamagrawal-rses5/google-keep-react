import React from "react";
import SearchBar from "./SearchBar";
import KeepLogo from "../resources/keep_logo.png";
function Header(props) {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={KeepLogo} alt="keep-logo"></img>
        Keep
      </div>
      <SearchBar {...props} />
      <div className="logo-container"></div>
    </div>
  );
}

export default Header;
