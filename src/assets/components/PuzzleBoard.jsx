import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";
import PuzzleBrick from "./PuzzleBrick";

const PuzzleContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
  gap: 10px;
  height: 500px;
  width: 500px;
  padding: 0.5rem;
  background-color: #dcf5e8;
`;

function PuzzleBoard({ rows, columns }) {
  const [bricks, setBricks] = useState([]);
  const [emptySlot, setEmptySlot] = useState(null);

  // Function to shuffle bricks array
  const shuffleBricks = () => {
    const newArray = [];
    for (let i = 0; i < rows * columns - 1; i++) {
      newArray.push(i + 1);
    }
    const shuffledBricks = newArray.sort(() => Math.random() - 0.5);
    const emptySlotPosition = Math.floor(Math.random() * (rows * columns));
    shuffledBricks.splice(emptySlotPosition, 0, null);
    setBricks(shuffledBricks);
    setEmptySlot(emptySlotPosition);
    console.log("Bricks", shuffledBricks);
  };

  // Intial bricks array
  useEffect(() => {
    shuffleBricks();
  }, [rows, columns]);

  // Check if brick position is correct, turn yellow if correct
  const isPositionCorrect = (index) => {
    return bricks[index] === index + 1;
  };

  const moveBrick = (clickedIndex) => {
    // Calculate row and column of clicked brick
    const clickedRow = Math.floor(clickedIndex / columns);
    const clickedColumn = clickedIndex % columns;

    // Calculate row and column of empty slot
    const emptyRow = Math.floor(emptySlot / columns);
    const emptyColumn = emptySlot % columns;

    // Check if clicked brick and empty slot are in the same row or column
    if (clickedRow === emptyRow || clickedColumn === emptyColumn) {
      console.log("Clicked brick can be moved");

      // Create a subarray of the row or column
      if (clickedRow === emptyRow) {
        // Same row
        const rowIndex = clickedRow;
        const rowArray = bricks.slice(
          rowIndex * columns,
          (rowIndex + 1) * columns
        );
        console.log("Row array:", rowArray);

        // Shift the numbers towards the empty slot
        if (clickedIndex < emptySlot) {
          for (let i = emptySlot; i > clickedIndex; i--) {
            bricks[i] = bricks[i - 1];
          }
        } else {
          for (let i = emptySlot; i < clickedIndex; i++) {
            bricks[i] = bricks[i + 1];
          }
        }

        // Place the clicked brick in the empty slot
        bricks[clickedIndex] = null;
        setEmptySlot(clickedIndex);
      } else {
        // Same column
        const colIndex = clickedColumn;
        const colArray = [];
        for (let i = 0; i < rows; i++) {
          colArray.push(bricks[colIndex + i * columns]);
        }
        console.log("Column array:", colArray);

        // Shift the numbers towards the empty slot
        if (clickedIndex < emptySlot) {
          for (let i = emptySlot; i > clickedIndex; i -= columns) {
            bricks[i] = bricks[i - columns];
          }
        } else {
          for (let i = emptySlot; i < clickedIndex; i += columns) {
            bricks[i] = bricks[i + columns];
          }
        }

        // Place the clicked brick in the empty slot
        bricks[clickedIndex] = null;
        setEmptySlot(clickedIndex);

        console.log("New shuffledArray:", bricks);
        console.log(clickedIndex);
      }

      // Calculate direction of movement
      const direction =
        clickedRow === emptyRow
          ? emptyColumn > clickedColumn
            ? "right"
            : "left"
          : emptyRow > clickedRow
          ? "down"
          : "up";
      console.log("direction", direction);
    } else {
      console.log("Clicked brick can not be moved");
    }
  };

  return (
    <>
      <button onClick={shuffleBricks}>Shuffle</button>
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
    </>
  );
}

export default PuzzleBoard;
