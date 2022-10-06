import React from "react";
// STYLE
import styled from "styled-components";

const Title = styled.h3`
  color: #5e7a7d;
  text-align: center;
  cursor: pointer;
  padding-top: 2rem;
  font-size: 24px;
`;

const Header: React.FC = () => {
  return (
    <div>
      <Title>Bill Calculator</Title>
    </div>
  );
};

export default Header;
