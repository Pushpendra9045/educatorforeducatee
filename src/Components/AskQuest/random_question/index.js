import React from "react";
import "./randquest.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
const AskQuest = () => {
  return (
    <>
      <div className="questsec">
        <textarea
          rows={15}
          placeholder="Ask your question ......"
          style={{ minheight: 20, width: "60%" }}
          name="question"
        ></textarea>
        <div className="btn">
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              className="buttn"
              style={{ width: "160px", margin: 10 }}
            >
              <p style={{ display: "flex", justifycontent: "center" }}>
                {" "}
                <AttachFileIcon />
                Attach pic
              </p>
            </Button>
          </label>
          <Link to="/stream">
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AskQuest;
