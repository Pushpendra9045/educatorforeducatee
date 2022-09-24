import React from "react";
import Header from "../header";
import AddIcon from "@mui/icons-material/Add";

import "./student_mainpage.css";
const ClassCard = () => {
  return (
    <div className="classcard">
      <a className="card" href="#">
        <h2>BT CS 402 A</h2>
        <p>Divyanshu verma</p>
      </a>
    </div>
  );
};

const Studentmainpage = () => {
  return (
    <>
      <Header />
      <div className="maindiv">
        <a className="askquest" href="#">
          <div className="ask_cir">
            <h1>?</h1>
            <p>Ask Question</p>
          </div>
          <p className="ask_par">Get your doubts solved ....</p>
        </a>
        <div className="classes">
          <h1>Your classroom</h1>
          <ClassCard />
        </div>
      </div>
      <button className="addclass">
        <AddIcon />
      </button>
    </>
  );
};

export default Studentmainpage;
