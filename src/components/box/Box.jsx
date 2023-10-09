import React from "react";
import styled from "styled-components";

const MyBox = styled.div`
  /* width: 100%; */

  /* background-color: #18191f; */
  /* color: white; */
  height: auto;
  margin: 1rem;
  /* border-top: 1px solid #686565;
  border-bottom: 1px solid #686565; */
`;

export default function Box(props) {
  return <MyBox>{props.children}</MyBox>;
}
