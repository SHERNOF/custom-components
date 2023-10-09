import React from "react";
import Box from "../box/Box";
import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0% {
      --a: 0deg
    }
    100% {
        --a: 360deg
    }
  `;

const Div = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background: repeating-conic-gradient(
    from var(--a),
    #ff2770 0%,
    #ff2770 5%,
    transparent 5%,
    transparent 40%,
    #ff2770 50%
  );
  animation: ${animate} 8s linear infinite;
  border-radius: 20px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-conic-gradient(
      from var(--a),
      #45f3ff 0%,
      #45f3ff 5%,
      transparent 5%,
      transparent 40%,
      #45f3ff 50%
    );
    animation: ${animate} 8s linear infinite;
    border-radius: 20px;
    animation-delay: 2s;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 1px;
    background: #2d2d39;
    border-radius: 20px;
    border: 1px solid #25252b;
  }
`;

export default function ABox() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // width: "50%",
        padding: "2rem",
      }}
    >
      <Div></Div>
    </div>
  );
}
