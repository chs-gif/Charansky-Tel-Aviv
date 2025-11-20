import { useEffect, useMemo, useState } from "react";
import Cell from "./Cell";
import "./board.css";

export default function Board() {
  const ROWS = 6;
  const COLS = 7;

  const [board, setBoard] = useState(
    Array(ROWS).fill(null).map(() => Array(COLS).fill(""))
  );
  const [player, setPlayer] = useState("red");   // תור נוכחי
  const [winner, setWinner] = useState(null);    // 'red' | 'green' | null
  const [draw, setDraw] = useState(false);       // תיקו

  // NEW: פונקציה לשינוי צבע רקע העמוד לפי המנצח
  function applyWinnerBackground(color) {
    document.body.style.transition = "background-color 300ms ease"; // רך ויפה
    document.body.style.backgroundColor = color || "white";
  }

  // זריקת דיסק לעמודה
  function play(col) {
    if (winner || draw) return; // עצור אם המשחק הסתיים

    let rowToFill = -1;
    for (let r = 0; r < ROWS; r++) {
      if (board[r][col] === "") rowToFill = r; // לוקח את התחתון הפנוי
    }
    if (rowToFill === -1) return; // העמודה מלאה

    const newBoard = board.map((row, r) =>
      row.map((cell, c) => (r === rowToFill && c === col ? player : cell))
    );

    setBoard(newBoard);
    setPlayer((p) => (p === "red" ? "green" : "red"));
  }

  // בדיקת ניצחון/תיקו – פונקציה מחזירה 'red'/'green'/null
  function computeWinner(b) {
    // ארבעה כיוונים: ימינה, מטה, אלכסון ↘, אלכסון ↗
    const dirs = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
    ];

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const color = b[r][c];
        if (!color) continue;

        for (const [dr, dc] of dirs) {
          let ok = true;
          for (let k = 1; k <= 3; k++) {
            const rr = r + dr * k;
            const cc = c + dc * k;
            if (rr < 0 || rr >= ROWS || cc < 0 || cc >= COLS || b[rr][cc] !== color) {
              ok = false;
              break;
            }
          }
          if (ok) return color; // נמצא מנצח
        }
      }
    }
    return null;
  }

  // בדיקות אחרי כל מהלך
  useEffect(() => {
    const w = computeWinner(board);
    if (w) {
      setWinner(w);
      return;
    }
    // בדיקת תיקו: אין אף תא ריק
    const full = board.every((row) => row.every((cell) => cell !== ""));
    if (full) setDraw(true);
  }, [board]);

  // NEW: כשהמצב winner משתנה — עדכני את צבע הרקע
  useEffect(() => {
    if (winner) {
      applyWinnerBackground(winner);
    } else if (draw) {
      applyWinnerBackground("#f0f0f0"); // רמיזה עדינה לתיקו (אופציונלי)
    } else {
      applyWinnerBackground("white");
    }
  }, [winner, draw]);

  // כפתור לאיפוס
  function reset() {
    setBoard(Array(ROWS).fill(null).map(() => Array(COLS).fill("")));
    setPlayer("red");
    setWinner(null);
    setDraw(false);
    applyWinnerBackground("white"); // NEW: החזרת הרקע ללבן
  }

  return (
    <>
      <div style={{ marginBottom: 12 }}>
        {!winner && !draw && <b>תור: {player}</b>}
        {winner && <b style={{ marginInlineStart: 12 }}>{winner} ניצח/ה!</b>}
        {draw && <b style={{ marginInlineStart: 12 }}>תיקו</b>}
        <button onClick={reset} style={{ marginInlineStart: 12 }}>איפוס</button>
      </div>

      <div>
        {board.map((row, i) => (
          <div key={`row-${i}`} style={{ display: "flex" }}>
            {row.map((cell, j) => (
              <Cell
                key={`${i}-${j}`}
                onClick={() => play(j)}
                color={cell || "white"}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

