import { useState } from "react";

const initialGameBoard: (null | string)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameBoard((prev) => {
      // create a deep copy of the game board instead of mutating the original
      const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = "X";
      return updatedBoard;
    });
  };

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
