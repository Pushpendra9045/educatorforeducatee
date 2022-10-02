import React from "react";
import "../Styles/footer.css";
import LogoWhite from "../logo_white";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <LogoWhite />
      <div className="copy-right">
        ©Copyright 2022 , Educator For Educatee Pvt. Ltd
      </div>
      <div className="social-icons">
        <FacebookIcon className="social-icon" />
        <TwitterIcon className="social-icon" />
        <LinkedInIcon className="social-icon" />
      </div>
    </div>
  );
};

export default Footer;
