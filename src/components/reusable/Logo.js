import React from "react";
import { CgGym } from "react-icons/cg";
import styled from "styled-components";
import bg from "../reusable/newlogo.ico";


export default function Logo() {
  return (
    <Box>
      <Img>
        <img src={`${bg}`}></img>
      </Img>
      <Title>STRIZEFITNESS</Title>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Img = styled.p`
  font-size: 22px;
  color: white;
  background: #b5b847;
  // background-image: url("${bg}");
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const img = styled.img`
 
  width: 100px;
  height: 40px;
  display: flex;
 
`;
const Title = styled.p`
  font-size: 36px;
  color: white;
`;
