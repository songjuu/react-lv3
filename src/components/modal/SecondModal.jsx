import { React, useState, useRef, useEffect } from "react";
import { styled } from "styled-components";

function SecondModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const clickOutside = (e) => {
    console.log(modalRef.current);
    console.log(e.target);

    if (modalRef.current && modalRef.current === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <div>
      {/* modalcurrentref */}
      <StButton onClick={openModal}>2: 여는 버튼</StButton>
      {isOpen && (
        <StModalBox ref={modalRef}>
          <StModalContents>
            <p>바깥 영역 누르면 닫히는 모달</p>
            <button onClick={closeModal}>X</button>
          </StModalContents>
        </StModalBox>
      )}
    </div>
  );
}

//css
const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StModalContents = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 70%;
  height: 50%;
  border-radius: 12px;
`;

const StButton = styled.button`
  margin-top: 5px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: #b17efc;
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
`;

export default SecondModal;
