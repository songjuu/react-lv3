import React from "react";
import { styled } from "styled-components";

function Button() {
  const buttonAlertPrimary = () => {
    alert("버튼을 만들어보세요");
  };

  const buttonAlertNegative = () => {
    prompt("어렵나요?");
  };

  return (
    <div style={{ margin: "10px" }}>
      <h1>Button</h1>
      <ButtonBox>
        <LargeButton1 onClick={buttonAlertPrimary} borderColor="#b17efc">
          Large Primary Button &#10003;
        </LargeButton1>
        <MediumButton backColor="#b17efc">Medium</MediumButton>
        <SmallButton backColor="#b17efc">Small</SmallButton>
      </ButtonBox>
      <ButtonBox>
        <LargeButton1 onClick={buttonAlertNegative} borderColor="#ff9e9e">
          Large Negative Button
        </LargeButton1>
        <MediumButton backColor="#ff9e9e">Medium</MediumButton>
        <SmallButton backColor="#ff9e9e">Small</SmallButton>
      </ButtonBox>
    </div>
  );
}

//css
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px;
`;

const LargeButton1 = styled.button`
  cursor: pointer;
  border-radius: 8px;
  height: 50px;
  width: 200px;
  border: 3px solid ${(props) => props.borderColor};
  font-weight: 600;
  background-color: white;
  &:hover {
    background-color: #ebe8e8;
  }
`;

const MediumButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => props.backColor};
  height: 45px;
  width: 130px;
`;

const SmallButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => props.backColor};
  height: 40px;
  width: 100px;
`;

export default Button;
