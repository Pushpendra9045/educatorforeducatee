import React from "react";
import "./header_classroom.css";
import LogoDark from "../logo_dark/index.jsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const HeaderClassRoom = () => {
  return (
    <>
      <div className="header-cls">
        <div className="logo-cls">
          <LogoDark />
        </div>
        <div className="options">
          <Tabs
            // value={value}
            // onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Stream" />
            <Tab label="Test" />
            <Link to="/question">
              <Tab label="Q&A" />
            </Link>
          </Tabs>
        </div>
        <div className="pro-icon">
          <AccountCircleIcon />
          <p>Profile</p>
        </div>
      </div>
    </>
  );
};

export default HeaderClassRoom;
