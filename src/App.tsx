import React from "react";
// COMPONENTS
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
// STYLE
import styled from "styled-components";

const Main = styled.div`
  width: 75%;
  height: 80vh;
  background-color: #c5e4e7;
  margin: 4rem auto;
  border-radius: 7px;

  @media screen and (max-width: 600px) {
    height: 150vh;
  }
`;

const InputArea = styled.div`
  width: 70%;
  height: 60vh;
  border-radius: 20px;
  background-color: #ffffff;
  margin: 2rem auto;
  box-shadow: 0px 0px 5px #ffffff;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    height: 90vh;
    width: 90%;
    align-items: center;
    justify-content: center;
  }
`;

const App: React.FC = () => {
  return (
    <div className="app">
      <Main>
        <Header />
        <InputArea>
          <UserInput />
          <Result />
        </InputArea>
      </Main>
    </div>
  );
};

export default App;
