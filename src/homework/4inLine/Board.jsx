import React, { useState } from "react";
import Cell from "./Cell";

export default function Board() {
  const [board, setBoard] = useState(
    Array.from({ length: 6 }, () => Array(7).fill(""))
  );
  const [currentColor, setColor] = useState("red");
  const [winner, setWinner] = useState(null);

  function play(col) {
    if (winner) return; // אם כבר יש מנצח, לא ניתן לשחק

    const newBoard = board.map((row) => [...row]);
    for (let row = newBoard.length - 1; row >= 0; row--) {
      if (newBoard[row][col] === "") {
        newBoard[row][col] = currentColor;
        setBoard(newBoard);

        if (checkWinner(newBoard, row, col, currentColor)) {
          setWinner(currentColor);
        } else {
          setColor(currentColor === "red" ? "green" : "red");
        }

        break;
      }
    }
  }

  function checkWinner(board, row, col, color) {
    const directions = [
      [0, 1], // אופקי
      [1, 0], // אנכי
      [1, 1], // אלכסון ↘
      [1, -1], // אלכסון ↙
    ];

    for (let [dx, dy] of directions) {
      let count = 1;

      // קדימה
      let r = row + dx,
        c = col + dy;
      while (r >= 0 && r < 6 && c >= 0 && c < 7 && board[r][c] === color) {
        count++;
        r += dx;
        c += dy;
      }

      // אחורה
      r = row - dx;
      c = col - dy;
      while (r >= 0 && r < 6 && c >= 0 && c < 7 && board[r][c] === color) {
        count++;
        r -= dx;
        c -= dy;
      }

      if (count >= 4) return true;
    }

    return false;
  }

  return (
    <div
      style={{
        backgroundColor: winner ? winner : "white", // אם יש מנצח – צבע הרקע שלו
        transition: "background-color 0.5s ease",
        minHeight: "100vh", // שהצבע ימלא את כל המסך
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {winner && <h2 style={{ color: "white" }}> {winner} ניצח!</h2>}

      {board.map((row, i) => (
        <div key={i} style={{ display: "flex" }}>
          {row.map((cell, j) => (
            <Cell key={`${i}-${j}`} value={cell} onClick={() => play(j)} />
          ))}
        </div>
      ))}
    </div>
  );
}

