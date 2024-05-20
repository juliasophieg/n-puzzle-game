import { useState } from "react";
import styled from "@emotion/styled";
import PuzzleBoard from "./assets/components/PuzzleBoard";
import "./App.css";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function App() {
  const [rows, setRows] = useState(3); //Change number of rows
  const [columns, setColumns] = useState(3); // Change number of columns

  return (
    <PageWrapper>
      <h1>Sliding Puzzle Game</h1>
      <PuzzleBoard rows={rows} columns={columns} />
    </PageWrapper>
  );
}

export default App;
