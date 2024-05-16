import { useState } from "react";
import styled from "@emotion/styled";
import PuzzleBoard from "./assets/components/PuzzleBoard";

import "./App.css";

function App() {
  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(4);

  return (
    <div>
      <p>Rows: {rows}</p>
      <p>Columns: {columns}</p>
      <PuzzleBoard rows={rows} columns={columns} />
    </div>
  );
}

export default App;
