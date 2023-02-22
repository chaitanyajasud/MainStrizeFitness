import React from "react";
import styled from "styled-components";

export default function Button({ children, style, animation }) {
  return (
    <BTN className="slide" style={style} animation={animation}>
      {children}
    </BTN>
  );
}

const BTN = styled.button`
  outline: none;
  border: none;
  text-transform: uppercase;
  text:bold;
  padding: 25px;
  background-color: #b5b847;
  color: black;
  cursor: pointer;
  animation: ${(props) => props.animation};
  animation-duration: 2s;
`;
