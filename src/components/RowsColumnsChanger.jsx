import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 10px;
  width: 100px;
  text-align: right;
`;

const StyledRangeInput = styled.input`
  width: 150px;
  margin-left: 10px;
  -webkit-appearance: none;
  background-color: transparent;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: var(--middle-yellow);
    border-radius: 5px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid var(--almost-black);
    cursor: pointer;
    margin-top: -6px; /* Centers the thumb */
  }
  &:focus {
    outline: none;
  }
`;

function RowsColumnsChanger({ rows, columns, onRowsChange, onColumnsChange }) {
  const handleRowsChange = (e) => {
    onRowsChange(parseInt(e.target.value, 10));
  };

  const handleColumnsChange = (e) => {
    onColumnsChange(parseInt(e.target.value, 10));
  };

  return (
    <Container>
      <RowContainer>
        <Label htmlFor="rows">Rows: {rows}</Label>
        <StyledRangeInput
          type="range"
          id="rows"
          min="3"
          max="8"
          value={rows}
          onChange={handleRowsChange}
        />
      </RowContainer>

      <RowContainer>
        <Label htmlFor="columns">Columns: {columns}</Label>
        <StyledRangeInput
          type="range"
          id="columns"
          min="3"
          max="8"
          value={columns}
          onChange={handleColumnsChange}
        />
      </RowContainer>
    </Container>
  );
}

export default RowsColumnsChanger;
