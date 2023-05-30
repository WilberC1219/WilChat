import React, { useEffect, useState } from "react";
import "../styles/sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./sidebarchannel";
import { Call, Headset, InfoOutlined, Mic, Settings, SignalCellularAlt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import db from "../firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const channelsCollection = collection(db, "channels");
    onSnapshot(channelsCollection, (snapshot) => {
      const channelsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        channel: doc.data(),
      }));
      setChannels(channelsData);
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter the new channel name");
    if (channelName) {
      const channelsCollection = collection(db, "channels");

      addDoc(channelsCollection, {
        channelName: channelName,
      });
    } else {
      alert("New channel name cannot be left blank!");
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h3>WilChat by Wilber Claudio</h3>

        <ExpandMoreIcon />
      </div>

      <div className="sidebar-channels">
        <div className="sidebar-channel-headers">
          <div className="sidebar-channel-header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon onClick={handleAddChannel} className="sidebar-add-channel" />
        </div>

        <div className="sidebar-channel-list">
          {channels.map(({ id, channel }) => (
            <SidebarChannel key={id} id={id} channelName={channel.channelName} />
          ))}
        </div>
      </div>

      <div className="sidebar-voice">
        <SignalCellularAlt className="sidebar-voice-icons" fontSize="large" />
        <div className="sidebar-voice-info">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar-voice-icons MuiSvgIcon-root">
          <InfoOutlined />
          <Call />
        </div>
      </div>

      <div className="sidebar-profile">
        <Avatar onClick={() => auth.signOut()} src={`${user.photo}`} />
        <div className="sidebar-profile-info">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 4)}</p>
        </div>
        <div className="sidebar-profile-icons MuiSvgIcon-root">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
