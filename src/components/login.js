import React from "react";
import "../styles/login.css";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import WilChatIcon from "../assets/favicon_io/android-chrome-512x512.png";
import Socials from "./socials";

function Login() {
  const signIn = async () => {
    //fix to notifer if user closes the popup before signing in
    await signInWithPopup(auth, provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-logo">
        <img src={WilChatIcon} alt="" />
        <h1>WilChat</h1>
      </div>

      <div className="login-disclaimer">
        <p>
          WilChat is inspired by Discord and is my own clone version that was created for personal enrichment and to
          showcase my technical ability. WilChat is not affiliated with, endorsed by, or supported by Discord Inc.
        </p>
      </div>

      <Button onClick={signIn}>Sign In</Button>

      <div className="social-links">
        <Socials />
      </div>
    </div>
  );
}

export default Login;
