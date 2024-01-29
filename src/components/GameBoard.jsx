import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelect, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleBoardClick(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = structuredClone(prevGameBoard);
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelect();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbolHolder, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleBoardClick(rowIndex, colIndex)}>
                  {symbolHolder}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
