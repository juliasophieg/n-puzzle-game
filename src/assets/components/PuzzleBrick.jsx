import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";

const Brick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 3px;
  background-color: ${(props) =>
    props.isEmptySlot
      ? "#dcf5e8"
      : props.correctPosition
      ? "#ffd87d"
      : "#a2dbbd"};
  border: 1px solid
    ${(props) =>
      props.isEmptySlot
        ? "#dcf5e8"
        : props.correctPosition
        ? "#ffd87d"
        : "#a2dbbd"};
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.isEmptySlot
        ? "#dcf5e8"
        : props.correctPosition
        ? "#ffbe57"
        : "#7ec29e"};
    border: 1px solid
      ${(props) =>
        props.isEmptySlot
          ? "#dcf5e8"
          : props.correctPosition
          ? "#ffbe57"
          : "#7ec29e"};
    font-weight: 600;
    cursor: ${(props) => (props.isEmptySlot ? "unset" : "pointer")};
    transform: scale(1.02);
    transition: all 0.3s;
  }
`;

function PuzzleBrick({ brick, correctPosition, isEmptySlot }) {
  return (
    <Brick correctPosition={correctPosition} isEmptySlot={isEmptySlot}>
      {brick}
    </Brick>
  );
}

export default PuzzleBrick;
