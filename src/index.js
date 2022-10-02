import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conference from "./Components/conference";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Stream from "../src/Components/ClassRoom/Stream";
import HomePage from "./Components/home";
import Studentmainpage from "./Components/student_mainpage";
import AskQuest from "./Components/AskQuest/random_question";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stream" element={<Stream />} />
      <Route path="/question" element={<AskQuest />} />
      <Route path="/meet" element={<Conference />} />
      <Route path="/student" element={<Studentmainpage />} />
      <Route path= "/login" element={<Login/>}></Route> 
      <Route path= "/signup" element={<SignUp/>}></Route>
      </Routes>

    <Footer />
  </BrowserRouter>
);
