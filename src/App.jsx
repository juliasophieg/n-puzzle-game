import { useState } from "react";
import styled from "@emotion/styled";
import PuzzleBoard from "./components/PuzzleBoard";
import "./App.css";
import RowsColumnsChanger from "./components/RowsColumnsChanger";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function App() {
  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(4);

  // Handlers to update rows and columns
  const handleRowsChange = (newRows) => {
    setRows(newRows);
  };

  const handleColumnsChange = (newColumns) => {
    setColumns(newColumns);
  };

  return (
    <PageWrapper>
      <h1>Sliding Puzzle Game</h1>
      <RowsColumnsChanger
        rows={rows}
        columns={columns}
        onRowsChange={handleRowsChange}
        onColumnsChange={handleColumnsChange}
      />
      <PuzzleBoard rows={rows} columns={columns} />
    </PageWrapper>
  );
}

export default App;
