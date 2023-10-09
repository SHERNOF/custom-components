import React from "react";
import ABox from "../animatedBorder/AnimatedBorder";
import Box from "../box/Box";
import RotatingText from "../rotating text/RotatingText";

export default function Deck1() {
  return (
    <Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "4rem 4rem",
        }}
      >
        <RotatingText />
        <ABox />
      </div>
    </Box>
  );
}
