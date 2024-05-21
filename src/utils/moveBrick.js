const moveBrick = (
  bricks,
  setBricks,
  emptySlot,
  setEmptySlot,
  clickedIndex,
  columns,
  isPuzzleSolved,
  setShowModal
) => {
  // Calculate row and column of clicked brick
  const clickedRow = Math.floor(clickedIndex / columns);
  const clickedColumn = clickedIndex % columns;

  // Calculate row and column of empty slot
  const emptyRow = Math.floor(emptySlot / columns);
  const emptyColumn = emptySlot % columns;

  if (clickedRow === emptyRow || clickedColumn === emptyColumn) {
    // Determine the direction of the brick shift
    const direction = clickedRow === emptyRow ? 1 : columns;
    const step = clickedIndex < emptySlot ? direction : -direction;

    // Shift the bricks towards the empty slot
    for (let i = emptySlot; i !== clickedIndex; i -= step) {
      bricks[i] = bricks[i - step];
    }

    // Place the clicked brick in the empty slot
    bricks[clickedIndex] = null;
    setEmptySlot(clickedIndex);
    setBricks([...bricks]);

    // If puzzle is solved, show the message modal
    if (isPuzzleSolved()) {
      setShowModal(true);
    }
  }
};

export default moveBrick;
