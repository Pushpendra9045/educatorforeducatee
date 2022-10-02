import React from "react";
import { Link } from "react-router-dom";
import "./logo.css";
const LogoDark = () => {
  return (
    <Link to="/">
      <div className="logo_dark">
        <div className="logo_sign">
          <p>E</p>
          <p>E</p>
        </div>
        <div className="logo_text">
          <p>
            {" "}
            <span> Educator </span>FOR
          </p>
          <p>Educatee</p>
        </div>
      </div>
    </Link>
  );
};

export default LogoDark;
