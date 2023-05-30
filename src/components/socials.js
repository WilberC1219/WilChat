import React from "react";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import "../styles/socials.css";

function Socials() {
  return (
    <div className="socials">
      <h3>Socials Links</h3>
      <ul>
        <li>
          <a href="https://github.com/WilberC1219" target="__blank">
            <GitHub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wilber-claudio-114612b6" target="__blank">
            <LinkedIn />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
