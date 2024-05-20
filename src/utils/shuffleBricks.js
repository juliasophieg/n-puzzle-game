const shuffleBricks = (rows, columns, setBricks, setEmptySlot) => {
  const newArray = [];
  for (let i = 0; i < rows * columns - 1; i++) {
    newArray.push(i + 1);
  }
  const shuffledBricks = newArray.sort(() => Math.random() - 0.5);
  const emptySlotPosition = Math.floor(Math.random() * (rows * columns));
  shuffledBricks.splice(emptySlotPosition, 0, null);
  setBricks(shuffledBricks);
  setEmptySlot(emptySlotPosition);
};

export default shuffleBricks;
