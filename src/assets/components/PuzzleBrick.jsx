import styled from "@emotion/styled";

const Brick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isEmptySlot
      ? "#fff0bd"
      : props.correctPosition
      ? "#8cd1af"
      : "#ffd782"};
  border: 1px solid
    ${(props) =>
      props.isEmptySlot
        ? "#fff0bd"
        : props.correctPosition
        ? "#8cd1af"
        : "#ffd782"};
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.isEmptySlot
        ? "#fff0bd"
        : props.correctPosition
        ? "#6bc79a"
        : "#ffbe57"};
    border: 1px solid ${(props) => (props.isEmptySlot ? "#fff0bd" : "black")};
    font-weight: 800;
    cursor: ${(props) => (props.isEmptySlot ? "unset" : "pointer")};
    transform: scale(1.02);
    transition: all 0.3s;
  }
  @media (max-width: 430px) {
    font-size: 1rem;
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
