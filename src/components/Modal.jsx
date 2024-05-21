import React from "react";
import styled from "@emotion/styled";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

function Modal({ message, onClose }) {
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent>
        <h2>{message}</h2>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
