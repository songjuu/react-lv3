import React, { useState } from "react";
import { styled } from "styled-components";

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const saveName = (e) => {
    setName(e.target.value);
  };

  //숫자 콤마 찍기
  const savePrice = (str) => {
    console.log("s", str);
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };

  const dataInput = () => {
    if (!name || !price) {
      alert("이름과 가격을 다시 입력해주세요.");
      return false;
    }
    alert(`{name: ${name} price: ${price.replaceAll(",", "")}}`);
    setName("");
    setPrice("");
  };

  return (
    <div style={{ margin: "10px" }}>
      <h1>Input</h1>
      <InputFormBox>
        <InputLabel>이름</InputLabel>
        <Inputbox type="text" value={name} onChange={saveName}></Inputbox>
        <InputLabel marginpx="35px">가격</InputLabel>
        <Inputbox
          value={price}
          onChange={(e) => setPrice(savePrice(e.target.value))}
        ></Inputbox>
        <ButtonInput type="button" onClick={dataInput}>
          저장
        </ButtonInput>
      </InputFormBox>
    </div>
  );
}

//css
const InputFormBox = styled.form`
  display: flex;
  align-items: center;
`;

const Inputbox = styled.input`
  border-radius: 10px;
  padding: 10px;
  width: 200px;
`;

const InputLabel = styled.label`
  margin-left: ${(props) => props.marginpx};
`;

const ButtonInput = styled.button`
  border-radius: 5px;
  margin-left: 35px;
  padding: 5px;
  height: 40px;
  width: 100px;
  background-color: #b17efc;
  border: none;
  cursor: pointer;
`;

export default Input;
