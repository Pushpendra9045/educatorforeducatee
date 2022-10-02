import React from "react";
import "../Styles/conference.css";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
//  Icons
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import CallEndIcon from "@mui/icons-material/CallEnd";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatComponent from "../chat_component";
const Conference = () => {
  const initialstate = {
    video: false,
    audio: false,
    chat: false,
  };
  const [icons_status, setIconStatus] = useState(initialstate);
  const changeStatus = (e) => {
    const icon = e.currentTarget.dataset.icon;
    setIconStatus({
      ...icons_status,
      [icon]: !icons_status[icon],
    });
  };
  return (
    <div className="conference">
      <div className="video_section">
        <div className="video_part">
          {icons_status.video ? "Video On" : "Video Off"}
        </div>
        {icons_status.chat ? (
          <div className="chat_part">
            <ChatComponent />
          </div>
        ) : null}
      </div>
      <div className="options">
        {icons_status.audio ? (
          <Tooltip title="Volumn On" placement="bottom">
            <VolumeUpIcon
              className="options_icon"
              data-icon="audio"
              onClick={changeStatus}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Volumn Off" placement="bottom">
            <VolumeOffIcon
              className="options_icon"
              data-icon="audio"
              onClick={changeStatus}
            />
          </Tooltip>
        )}
        {icons_status.video ? (
          <Tooltip title="Camera On" placement="bottom">
            <VideocamIcon
              className="options_icon"
              data-icon="video"
              onClick={changeStatus}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Camera Off" placement="bottom">
            <VideocamOffIcon
              className="options_icon"
              data-icon="video"
              onClick={changeStatus}
            />
          </Tooltip>
        )}
        <Tooltip title="End Call" placement="bottom">
          <CallEndIcon className="options_icon" />
        </Tooltip>
        <Tooltip title="Toggle Chat" placement="bottom">
          <ChatIcon
            data-icon="chat"
            className="options_icon"
            onClick={changeStatus}
          />
        </Tooltip>
        <Tooltip title="More Options" placement="bottom">
          <MoreVertIcon className="options_icon" />
        </Tooltip>
      </div>
    </div>
  );
};

export default Conference;
