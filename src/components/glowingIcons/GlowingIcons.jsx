import React from "react";
import Box from "../box/Box";
import "../../App.css";

import {
  FaApple,
  FaAmazon,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa";

export default function GlowingIcons() {
  return (
    <Box>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 0",
          width: "100%",
          height: "100%",
        }}
      >
        <FaApple className="apple" id="apple" />
        <i class="fa fa-facebook-official apple"></i>
        <FaAmazon
          className="amazon"
          id="amazon"
          style={{ textShadow: "5px 5px 5px blue" }}
        />
        <FaGithubSquare className="github" id="github" />
        <FaFacebookSquare className="fb" id="fb" />
      </div>
    </Box>
  );
}
