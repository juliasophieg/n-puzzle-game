import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";
import PuzzleBrick from "./PuzzleBrick";
import Modal from "./Modal";
import shuffleBricks from "../utils/shuffleBricks";
import moveBrick from "../utils/moveBrick";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  width: 100%;
  margin-top: 2rem;
  @media (max-width: 430px) {
    margin-top: 1rem;
  }
`;

const PuzzleContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
  gap: 1rem;
  width: 100%;
  min-height: 450px;
  max-width: 600px;
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--light-yellow);
  @media (max-width: 430px) {
    gap: 0.5rem;
  }
`;

function PuzzleBoard({ rows, columns }) {
  const [bricks, setBricks] = useState([]);
  const [emptySlot, setEmptySlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Wrapper function to shuffle bricks
  const shuffle = () => {
    shuffleBricks(rows, columns, setBricks, setEmptySlot);
    setShowModal(false);
  };

  // Initial bricks array
  useEffect(() => {
    shuffle();
  }, [rows, columns]);

  // Check if brick position is correct, turns green if correct
  const isPositionCorrect = (index) => {
    return bricks[index] === index + 1;
  };

  // Check if the puzzle is solved
  const isPuzzleSolved = () => {
    for (let i = 0; i < bricks.length - 1; i++) {
      if (bricks[i] !== i + 1) {
        return false;
      }
    }
    return true;
  };

  // Wrapper function to handle brick move
  const handleMoveBrick = (clickedIndex) => {
    moveBrick(
      bricks,
      setBricks,
      emptySlot,
      setEmptySlot,
      clickedIndex,
      columns,
      isPuzzleSolved,
      setShowModal
    );
  };

  return (
    <Wrapper>
      <button onClick={shuffle}>Shuffle</button>
      <PuzzleContainer columns={columns} rows={rows}>
        {bricks.map((brick, index) => (
          <div key={index} onClick={() => handleMoveBrick(index)}>
            <PuzzleBrick
              brick={brick}
              isEmptySlot={brick === null}
              correctPosition={isPositionCorrect(index)}
            />
          </div>
        ))}
      </PuzzleContainer>
      {showModal && (
        <Modal
          message="You solved it! 🎉"
          onClose={() => setShowModal(false)}
        />
      )}
    </Wrapper>
  );
}

export default PuzzleBoard;
