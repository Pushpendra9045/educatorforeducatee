import React from "react";
import "./header_classroom.css";
import LogoDark from "../logo_dark/index.jsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
            <Tab label="Q&A" />
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default HeaderClassRoom;
