import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./student_mainpage.css";
import HeaderClassRoom from "../header_classroom";
import Footer from "../footer";
import Header from "../header";
import { Link } from "react-router-dom";
import HeaderClassRoomCopy from "../header_classroom copy";
const ClassCard = () => {
  return (
    <>
      <div className="classcard">
        <a className="card" href="#">
          <h2>BT CS 402 A</h2>
          <p>Divyanshu verma</p>
        </a>
      </div>
    </>
  );
};

const Studentmainpage = () => {
  return (
    <>
      <HeaderClassRoomCopy />
      <div className="maindiv">
        <a className="askquest" href="#">
          <div className="ask_cir">
            <Link to={"/question"}>
              <h1>?</h1>
            </Link>
            <p>Ask Question</p>
          </div>
          <p className="ask_par">Get your doubts solved ....</p>
        </a>
        <div className="classes">
          <h1>Your classroom</h1>
          <Link to="/stream">
            <ClassCard />
          </Link>
        </div>
      </div>

      <button className="addclass">
        <AddIcon />
      </button>
      <Footer />
    </>
  );
};

export default Studentmainpage;
