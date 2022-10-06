import React from "react";
// STYLE
import styled from "styled-components";
// COMPONENTS
import TipBoxes from "./TipBoxes";
// STATES
import { useGetBill } from "../states/states";
import { useGetPeople } from "../states/states";

const Display = styled.div`
  width: 50%;
  height: 100%;
`;

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-left: 1.5rem;
  width: 100%;
`;

const Input = styled.input`
  width: 80%;
  border-radius: 8px;
  background-color: rgba(128, 128, 128, 0.2);
  text-align: right;
  border: none;
  margin-left: 1.5rem;
  padding: 0.8rem;

  &::placeholder {
    text-align: left;
    font-weight: bold;
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.p`
  color: #5e7a7d;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-bottom: 1rem;
  font-size: 16px;
`;

const UserInput: React.FC = () => {
  const setBill = useGetBill((state) => state.setInput);
  const setPeople = useGetPeople((state) => state.setInput);

  return (
    <Display>
      <Title>Bill</Title>
      <Input
        type="number"
        placeholder="$"
        onChange={(e) => setBill(e.currentTarget.valueAsNumber)}
      />
      <Title>Number of People</Title>
      <Input
        type="number"
        onChange={(e) => setPeople(e.currentTarget.valueAsNumber)}
      />
      <Title>Select Tip %</Title>
      <Boxes>
        <TipBoxes title="5%" />
        <TipBoxes title="10%" />
        <TipBoxes title="15%" />
        <TipBoxes title="20%" />
        <TipBoxes title="35%" />
        <TipBoxes title="50%" />
      </Boxes>
    </Display>
  );
};

export default UserInput;
