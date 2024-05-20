const moveBrick = (
  clickedIndex,
  columns,
  rows,
  bricks,
  emptySlot,
  setBricks,
  setEmptySlot
) => {
  // Calculate row and column of clicked brick
  const clickedRow = Math.floor(clickedIndex / columns);
  const clickedColumn = clickedIndex % columns;

  // Calculate row and column of empty slot
  const emptyRow = Math.floor(emptySlot / columns);
  const emptyColumn = emptySlot % columns;

  console.log(`Clicked Index: ${clickedIndex}`);
  console.log(`Empty Slot: ${emptySlot}`);
  console.log(`Clicked Row: ${clickedRow}, Clicked Column: ${clickedColumn}`);
  console.log(`Empty Row: ${emptyRow}, Empty Column: ${emptyColumn}`);

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
    setBricks([...bricks]);
  } else {
    console.log("Clicked brick cannot be moved");
  }
};

export default moveBrick;
