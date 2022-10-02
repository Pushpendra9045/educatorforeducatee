import React from "react";
import "./header_classroom_copy.css";
import LogoDark from "../logo_dark/index.jsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const HeaderClassRoomCopy = () => {
  return (
    <>
      <div className="header-cls-copy">
        <div className="logo-cls">
          <LogoDark />
        </div>

        <div className="pro-icon">
          <AccountCircleIcon />
          <p>Profile</p>
        </div>
      </div>
    </>
  );
};

export default HeaderClassRoomCopy;
