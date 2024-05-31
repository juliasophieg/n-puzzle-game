import styled from "@emotion/styled";

const Brick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 600;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isEmptySlot
      ? "var(--light-yellow)"
      : props.correctPosition
      ? "var(--green)"
      : "var(--yellow)"};
  border: 1px solid
    ${(props) =>
      props.isEmptySlot
        ? "var(--light-yellow)"
        : props.correctPosition
        ? "var(--green)"
        : "var(--yellow)"};
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.isEmptySlot
        ? "var(--light-yellow)"
        : props.correctPosition
        ? "var(--dark-green)"
        : "var(--dark-yellow)"};
    border: 1px solid
      ${(props) =>
        props.isEmptySlot ? "var(--light-yellow)" : "var(--almost-black)"};
    font-weight: 700;
    cursor: ${(props) => (props.isEmptySlot ? "unset" : "pointer")};
    transform: scale(1.03);
    transition: transform 0.3s ease, background-color 0.3s ease,
      font-weight 0.3s ease;
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
