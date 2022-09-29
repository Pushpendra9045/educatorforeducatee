import React from "react";
import ReactDOM from "react-dom/client";

import Conference from "./Components/conference";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Stream from "../src/Components/ClassRoom/Stream";
// import HomePage from "./Components/home";
// import Studentmainpage from "./Components/student_mainpage";
import AskQuest from "./Components/AskQuest/random_question";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <>
    <Header />
    {/* <Studentmainpage/> */}
    {/* <HomePage /> */}
    {/*<Conference />*/}
    <AskQuest/>
    <Stream/>
    <Footer />

  </>

);
