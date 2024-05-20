import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";
import PuzzleBrick from "./PuzzleBrick";
import Modal from "./Modal";
import shuffleBricks from "../../utils/shuffleBricks";

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
  background-color: #fff0bd;
  @media (max-width: 430px) {
    gap: 0.5rem;
  }
`;

function PuzzleBoard({ rows, columns }) {
  const [bricks, setBricks] = useState([]);
  const [emptySlot, setEmptySlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Function to shuffle bricks
  const shuffle = () => {
    shuffleBricks(rows, columns, setBricks, setEmptySlot);
    setShowModal(false);
  };

  // Initial bricks array
  useEffect(() => {
    shuffle();
  }, [rows, columns]);

  // Check if brick position is correct, turns yellow if correct
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

  const moveBrick = (clickedIndex) => {
    // Calculate row and column of clicked brick
    const clickedRow = Math.floor(clickedIndex / columns);
    const clickedColumn = clickedIndex % columns;

    // Calculate row and column of empty slot
    const emptyRow = Math.floor(emptySlot / columns);
    const emptyColumn = emptySlot % columns;

    if (clickedRow === emptyRow || clickedColumn === emptyColumn) {
      // Determine the direction of the shift
      const direction = clickedRow === emptyRow ? 1 : columns;
      const step = clickedIndex < emptySlot ? direction : -direction;

      // Shift the numbers towards the empty slot
      for (let i = emptySlot; i !== clickedIndex; i -= step) {
        bricks[i] = bricks[i - step];
      }

      // Place the clicked brick in the empty slot
      bricks[clickedIndex] = null;
      setEmptySlot(clickedIndex);

      // If puzzle is solved, show the modal
      if (isPuzzleSolved()) {
        setShowModal(true);
      }
    }
  };

  return (
    <Wrapper>
      <button onClick={shuffle}>Shuffle</button>
      <PuzzleContainer columns={columns} rows={rows}>
        {bricks.map((brick, index) => (
          <div key={index} onClick={() => moveBrick(index)}>
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
