import React from "react";
import "../styles/message.css";
import { Avatar } from "@mui/material";

function Message({ timestamp, message, user }) {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message-info">
        <h4>
          {user.displayName}
          <span className="message-timestamp">{new Date(timestamp?.toDate()).toLocaleString()}</span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
