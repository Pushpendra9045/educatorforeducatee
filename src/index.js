import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Components/footer";
import Header from "./Components/header";
import HomePage from "./Components/home";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    {/* <Studentmainpage/> */}
    <HomePage />
    <Footer />
  </React.StrictMode>
);
