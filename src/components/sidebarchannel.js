import React from "react";
import "../styles/sidebarchannel.css";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../features/appSlice";

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();
  return (
    <div
      className="sidebar-channel"
      onClick={() => {
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        );
      }}
    >
      <h4>
        <span className="sidebar-channel-hash">#</span>
        {channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
