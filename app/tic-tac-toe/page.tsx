"use client"; // Mark this file as a Client Component

import styles from "./page.module.css";
import { useState } from "react";

function Square({ value, onSquareClick, isDisabled }) {
  return (
    <button
      className={`${styles.square} ${isDisabled ? styles.disabled : ""}`} // Add a disabled class for tie/winner
      onClick={onSquareClick}
      disabled={isDisabled} // Disable button if there's a winner or tie
    >
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return winner ("X" or "O")
    }
  }
  return null; // No winner yet
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    const newWinner = calculateWinner(nextSquares);
    if (newWinner) {
      setWinner(newWinner); 
    }
  }

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setXIsNext(true);
  };

  const isTie = squares.every(square => square !== null);
  const status =
    winner? "Winner: " + winner: isTie ? "It's a Tie!": "Next player: " + (xIsNext ? "X" : "O");

  return (
    <main>
      <div>
        <h1 className={styles.h1}>Tic Tac Toe Game</h1>
        <div className={styles.status}>{status}</div>
        <div className={styles.board}>
          <div>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} isDisabled={!!winner || isTie} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} isDisabled={!!winner || isTie} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} isDisabled={!!winner || isTie} />
          </div>
          <div>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} isDisabled={!!winner || isTie} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} isDisabled={!!winner || isTie} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} isDisabled={!!winner || isTie} />
          </div>
          <div>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} isDisabled={!!winner || isTie} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} isDisabled={!!winner || isTie} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} isDisabled={!!winner || isTie} />
          </div>
        </div>
        <div className={styles.resetButtonContainer}>
          <button className={styles.resetButton} onClick={handleReset}>Reset Game</button>
        </div>
      </div>
    </main>
  );
}