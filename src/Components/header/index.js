import React from "react";
import "./header.css";
import LogoDark from "../logo_dark/index.jsx";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="head">
        <LogoDark />
        <div className="btns">
          <Link className="login_btn" to="/login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
