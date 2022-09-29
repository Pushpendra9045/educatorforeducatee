import React from "react";
import ReactDOM from "react-dom/client";
import AskQuest from "./Components/AskQuest/random_question";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Stream from "../src/Components/ClassRoom/Stream";
// import HomePage from "./Components/home";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    {/* <Studentmainpage/> */}
    {/* <HomePage /> */}
    <AskQuest/>
    <Stream/>
    <Footer />
  </React.StrictMode>
  
);
