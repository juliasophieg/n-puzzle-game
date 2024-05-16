import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";

const Brick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 3px;
  background-color: #a2dbbd;
  border: 1px solid #a2dbbd;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #7ec29e;
    border: 1px solid #7ec29e;
    font-weight: 600;
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.3s;
  }
`;

function PuzzleBrick({ brick }) {
  return <Brick>{brick}</Brick>;
}

export default PuzzleBrick;
