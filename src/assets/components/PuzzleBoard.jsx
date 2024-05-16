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

  // Function to shuffle bricks array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    // Generate bricks based on rows and columns
    const newBricks = [];
    for (let i = 0; i < rows * columns - 1; i++) {
      newBricks.push(i + 1);
    }

    // Shuffle bricks initially
    const shuffledBricks = shuffleArray(newBricks);
    setBricks(shuffledBricks);
  }, [rows, columns]);

  // Shuffle bricks on button click
  const shuffleBricks = () => {
    const shuffledBricks = shuffleArray(bricks);
    setBricks(shuffledBricks);
  };

  return (
    <>
      <button onClick={shuffleBricks}>Shuffle</button>
      <PuzzleContainer columns={columns} rows={rows}>
        {bricks.map((brick, index) => (
          <div key={index} onClick={() => handlebrickClick(brick)}>
            <PuzzleBrick brick={brick} />
          </div>
        ))}
      </PuzzleContainer>
    </>
  );
}

export default PuzzleBoard;
