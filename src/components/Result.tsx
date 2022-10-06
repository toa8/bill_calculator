import React from "react";
// STYLE
import styled from "styled-components";
// STATES
import { useGetTotalResult, useGetTipResult } from "../states/states";

const Display = styled.div`
  background-color: #00494d;
  border-radius: 1rem;
  margin: 1rem;
  width: 50%;
  position: relative;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const ResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
  gap: 1rem;
  @media screen and (max-width: 600px) {
    gap: 2rem;
  }
`;

const ResultBox = styled.div`
  width: 100%;
  min-height: 40px;
  position: relative;
`;

const Title = styled.p`
  color: #ffffff;
  padding-top: 1rem;
  padding-left: 0.5rem;
  font-size: 16px;
`;

const SubTitle = styled.p`
  color: rgba(255, 255, 255, 0.5);
  padding-top: 1rem;
  font-size: 14px;
`;

const ResultText = styled.p`
  font-size: 32px;
  color: #26c0ab;
  padding-top: 1rem;
  position: absolute;
  right: 0;
  top: 0;
`;

const ResetBtn = styled.button`
  width: 80%;
  height: 35px;
  cursor: pointer;
  background-color: #26c0ab;
  color: #515452;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  position: absolute;
  bottom: 20px;
  left: 30px;

  @media screen and (max-width: 600px) {
    bottom: 0;
  }
`;

const Result: React.FC = () => {
  const tipResult = useGetTipResult((state) => state.result);
  const totalResult = useGetTotalResult((state) => state.result);

  return (
    <Display>
      <ResultDiv>
        <ResultBox>
          <Title>Tip Amount</Title>
          <SubTitle>/ total</SubTitle>
          <ResultText>{"$" + tipResult}</ResultText>
        </ResultBox>
        <ResultBox>
          <Title>Total</Title>
          <SubTitle>/ person </SubTitle>
          <ResultText>{"$" + totalResult}</ResultText>
        </ResultBox>
      </ResultDiv>
      <ResetBtn onClick={() => window.location.reload()}>RESET</ResetBtn>
    </Display>
  );
};

export default Result;
