import React from "react";
import FirstModal from "./FirstModal";
import SecondModal from "./SecondModal";

function Modal() {
  return (
    <>
      <div
        style={{
          margin: "10px",
        }}
      >
        <h1>Modal</h1>
        <FirstModal />
        <SecondModal />
      </div>
    </>
  );
}

export default Modal;
