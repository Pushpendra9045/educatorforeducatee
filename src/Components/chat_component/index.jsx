import React, { useEffect } from "react";
import "./chat_component.css";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
const ChatComponent = () => {
  const [msg, setMsg] = useState("");

  const displayChat = () => {
    if (msg === "") return;
    let prevmsgs = sessionStorage.getItem("current_chat");
    if (prevmsgs) {
      sessionStorage.setItem("current_chat", prevmsgs + "," + msg);
    } else {
      sessionStorage.setItem("current_chat", msg);
    }
    creatChatText(msg);
    setMsg("");
  };
  const creatChatText = (msg) => {
    const chat_area = document.querySelector(".display-chat");
    const textNode = document.createElement("p");
    textNode.innerText = msg;
    chat_area.appendChild(textNode);
    textNode.scrollIntoView();
  };
  useEffect(() => {
    let prevchat = sessionStorage.getItem("current_chat");
    if (prevchat) {
      prevchat.split(",").map((val) => {
        creatChatText(val);
        return 0;
      });
    }
  }, []);
  return (
    <div className="chat-component">
      <div className="display-chat">
        <p>Chats will appear like this</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          repellat praesentium dicta possimus cumque nulla quod officiis
          nesciunt alias nihil?
        </p>
      </div>
      <div className="chat-input-box">
        <input
          type="text"
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              displayChat();
            }
          }}
          placeholder="Ask your question"
        />
        <SendIcon className="send-icon" onClick={displayChat} />
      </div>
    </div>
  );
};

export default ChatComponent;
