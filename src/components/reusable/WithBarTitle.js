import React from "react";
import styled from "styled-components";

export default function WithBarTitle({ title }) {
  return (
    <Box>
      <Line />
      <Title>{title}</Title>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: fadeInLeft;
  animation-duration: 2s;
`;

const Line = styled.div`
  width: 60px;
  height: 2px;
  background: #b5b847;
  margin-right: 20px;
`;

const Title = styled.p`
  color: #b5b847;
  text-transform: uppercase;
  font-weight: 400;
`;
