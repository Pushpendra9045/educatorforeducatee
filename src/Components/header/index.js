import React from "react";
import "./header.css";
import LogoDark from "../logo_dark/index.jsx";

const Header = () => {
  return (
    <>
      <div className="head">
        <LogoDark />

        <div className="btns">
          <p className="login_btn">Login</p>
        </div>
      </div>
    </>
  );
};

export default Header;
