import Box from "../box/Box";
import MyImage from "./1.jpeg";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    100% {
      transform: rotate(360deg);
    }
    0% {
      transform: rotate(0deg);
    }
  `;

const Div = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotate} 10s linear infinite;
  color: white;
`;

export default function RotatingText() {
  const pRef = useRef();
  const a = () => {
    pRef.current.innerHTML = pRef.current.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${
            i * 10
          }deg); position:absolute; left:50%; transform-origin: 0 125px; font-size:1.2em">${char}</span>`
      )
      .join("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onLoad={a}
    >
      <div
        style={{
          position: "relative",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          backgorund: "#ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            // backgorund: "#ccc",
            // border: "1px solid #686565",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={MyImage}
            alt="MyPhoto"
            style={{
              width: "100%",
              height: "100%",
              zIndex: "1",
            }}
          />
        </div>
        <Div>
          <p ref={pRef}>Sherwin Nofuente * React Developer *</p>
        </Div>
      </div>
    </div>
  );
}
