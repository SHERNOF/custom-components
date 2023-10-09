import React from "react";
import Box from "../box/Box";

import styled from "styled-components";

const A = styled.a`
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 500;
  color: #333;
  padding: 1rem 3rem;
  &:hover {
    color: #0ef;
  }
`;
const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: -1; */
  border-bottom: 1px solid #0ef;
  border-radius: 4px;
  transform: scale(0) translateY(10px);
  opacity: 0;
  background: transparent;
  transition: all 0.8s;

  &:hover {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

export default function ANav() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem ",
      }}
    >
      <nav
        style={{
          position: "relative",
        }}
      >
        <A href="#">
          Home <Span></Span>
        </A>
        <A href="#">
          About <Span></Span>
        </A>
        <A href="#">
          Contact <Span></Span>
        </A>
        <A href="#">
          Skills <Span></Span>
        </A>
      </nav>
    </div>
  );
}
