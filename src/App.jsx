import { useState } from "react";
import styled from "@emotion/styled";
import PuzzleBoard from "./components/PuzzleBoard";
import "./App.css";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function App() {
  const [rows, setRows] = useState(4); //Change number of rows here
  const [columns, setColumns] = useState(4); // Change number of columns here

  return (
    <PageWrapper>
      <h1>Sliding Puzzle Game</h1>
      <PuzzleBoard rows={rows} columns={columns} />
    </PageWrapper>
  );
}

export default App;
