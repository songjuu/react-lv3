import React from "react";
import FirstSelect from "./FirstSelect";
import SecondSelect from "./SecondSelect";
import { styled } from "styled-components";

function Select() {
  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      <h1>Select</h1>
      <StBox>
        <FirstSelect />
        <SecondSelect />
      </StBox>
    </div>
  );
}

//css
const StBox = styled.div`
  display: flex;
  border: 1px solid black;
  width: 500px;
  height: 200px;
  overflow: hidden;
`;

export default Select;
