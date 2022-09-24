import React from "react";
import "./header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <>
      <div className="head">
        <h1>EducateForEducatee</h1>
        <AccountCircleIcon className="profile"/>
      </div>
    </>
  );
};

export default Header;
