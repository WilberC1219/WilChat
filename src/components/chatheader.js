import React from "react";
import "../styles/chatheader.css";
import { HelpRounded, Notifications, SearchRounded, SendRounded } from "@mui/icons-material";
import { EditLocation, PeopleAlt } from "@mui/icons-material";
function ChatHeader({ channelName }) {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <h3>
          <span className="chat-header-hash">#</span>
          {channelName}
        </h3>
      </div>

      <div className="chat-header-right MuiSvgIcon-root">
        <Notifications />
        <EditLocation />
        <PeopleAlt />

        <div className="chat-header-search">
          <input placeholder="Search" />
          <SearchRounded />
        </div>

        <SendRounded className="MuiSvgIcon-root" />
        <HelpRounded className="MuiSvgIcon-root" />
      </div>
    </div>
  );
}

export default ChatHeader;
