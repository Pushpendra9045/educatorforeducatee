import React from "react";
import "../Styles/home.css";
import display_img from "../../images/home-page.jpg";
const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <div className="display-text">
          <p>
            Lorem <br />
            Ipsem Dolor
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="get-started-btn">Get Started</p>
        </div>
        <div className="display-img">
          <img src={display_img} alt="online teaching" />
        </div>
      </div>
      <div className="features">
        <p>FEATURES</p>
        <div className="feature-content"></div>
      </div>
    </>
  );
};

export default HomePage;
