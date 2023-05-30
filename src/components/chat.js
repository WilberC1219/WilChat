import React, { useEffect, useState } from "react";
import ChatHeader from "./chatheader";
import Message from "./message";
import "../styles/chat.css";
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import { collection, doc, query, orderBy, onSnapshot } from "firebase/firestore";
import { addDoc, serverTimestamp } from "firebase/firestore";
import db from "../firebase";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      const channelsCollection = collection(db, "channels");
      const channelDoc = doc(channelsCollection, channelId);
      const messagesCollection = collection(channelDoc, "messages");
      const messagesQuery = query(messagesCollection, orderBy("timestamp", "desc"));

      onSnapshot(messagesQuery, (snapshot) => {
        const messagesData = snapshot.docs.map((doc) => doc.data());
        setMessages(messagesData);
      });
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    const channelsCollection = collection(db, "channels");
    const channelDoc = doc(channelsCollection, channelId);
    const messagesCollection = collection(channelDoc, "messages");

    addDoc(messagesCollection, {
      timestamp: serverTimestamp(),
      message: input,
      user: user,
    });

    setInput("");
  };

  return (
    <div className="chat">
      {channelId && channelName ? (
        <>
          <ChatHeader channelName={channelName} />
          <div className="chat-messages">
            {messages
              .map((message) => <Message timestamp={message.timestamp} message={message.message} user={message.user} />)
              .reverse()}
          </div>

          <div className="chat-input">
            <AddCircle fontSize="large" />
            <form>
              <input
                value={input}
                disabled={!channelId}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message ${channelName}`}
              />
              <button onClick={sendMessage} className="chat-input-button" type="submit">
                Send Message
              </button>
            </form>

            <div className="chat-input-icons MuiSvgIcon-root">
              <CardGiftcard fontSize="large" />
              <Gif fontSize="large" />
              <EmojiEmotions fontSize="large" />
            </div>
          </div>
        </>
      ) : (
        <h2>Select a channel to view</h2>
      )}
    </div>
  );
}

export default Chat;
