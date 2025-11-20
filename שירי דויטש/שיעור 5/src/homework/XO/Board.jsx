import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import "./Board.css";

export default function Board() {

  const emptyBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  const [board, setBoard] = useState(emptyBoard);
  const [currentShape, setCurrentShape] = useState("X");



  function handleClick(row, col) {
    if (board[row][col] !== '') 
      return; // אם כבר יש צורה, לא מציירים
    const newBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? currentShape : cell))
    );
    setBoard(newBoard);
    setCurrentShape(currentShape === "X" ? "O" : "X");
  }

  // בדיקה אם יש שורה מנצחת
  useEffect(() => {
    const checkWinner = () => {
      for (let i = 0; i < 3; i++) {
        // בדיקה שורות
        if (
          board[i][0] &&
          board[i][0] === board[i][1] &&
          board[i][1] === board[i][2]
        ) 
        {
          return board[i][0];
        }
        // בדיקה עמודות
        if (
          board[0][i] &&
          board[0][i] === board[1][i] &&
          board[1][i] === board[2][i]
        ) {
          return board[0][i];
        }
      }
      // בדיקה אלכסונים
      if (
        board[0][0] &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]
      ) {
        return board[0][0];
      }
      if (
        board[0][2] &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0]
      ) {
        return board[0][2];
      }
      return null;
    };

    const winner = checkWinner();
    if (winner) 
      alert(`${winner} ניצחת!`);
  }, [board]);

  return (
    <div className="board">
      {board.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => (
            <Cell key={j} value={cell} onClick={() => handleClick(i, j)} />
          ))}
        </div>
      ))}
    </div>
  );
}



  