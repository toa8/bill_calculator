import React, { useState } from "react";
// STYLE
import styled from "styled-components";
// STATES
import {
  useGetBill,
  useGetPeople,
  useGetTipResult,
  useGetTotalResult,
} from "../states/states";

interface Props {
  title: string;
}

interface StyleProps {
  clicked: boolean;
}

const Box = styled.div<StyleProps>`
  width: 90px;
  height: 40px;
  border-radius: 8px;
  background-color: ${(props) => (props.clicked ? "#26c0ab" : "#00494d")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Values = styled.p<StyleProps>`
  color: ${(props) => (props.clicked ? "#00494d" : "#ffffff")};
  font-weight: bold;

  font-size: 20px;
`;

const TipBoxes: React.FC<Props> = ({ title }) => {
  const bill = useGetBill((state) => state.input);
  const people = useGetPeople((state) => state.input);
  const setTipResult = useGetTipResult((state) => state.setResult);
  const setTotalResult = useGetTotalResult((state) => state.setResult);

  let tipResult: number;
  let value: number;

  const [percent, setPercent] = useState(0);
  const [clicked, setClicked] = useState(false);

  const calculateTax = () => {
    setClicked(!clicked);

    value = parseInt(title);
    setPercent(value);
    tipResult = (bill * percent) / 100;
    setTipResult(tipResult);
    setTotalResult((bill + tipResult) / people);
  };

  return (
    <Box clicked={clicked} onClick={calculateTax}>
      <Values clicked={clicked}>{title}</Values>
    </Box>
  );
};

export default TipBoxes;
