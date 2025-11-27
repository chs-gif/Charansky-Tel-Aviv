import { useEffect, useState } from "react";
import Square from "./Square";

// פונקציית עזר לבדיקת מנצח
function calculateWinner(board) {
    // רשימה של כל הקווים המנצחים (אינדקסים)
    const lines = [
        // שורות
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        // עמודות
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        // אלכסונים
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
    ];

    // ודא שהלוח אתחל לפני שמנסים לגשת אליו
    if (board.length === 0) {
        return null;
    }

    for (let i = 0; i < lines.length; i++) {
        const [[r1, c1], [r2, c2], [r3, c3]] = lines[i];

        const val1 = board[r1][c1];
        const val2 = board[r2][c2];
        const val3 = board[r3][c3];

        // אם התא הראשון לא ריק, וכל השלושה זהים
        if (val1 && val1 === val2 && val1 === val3) {
            return val1; // מחזיר את המנצח 'X' או 'O'
        }
    }

    return null; // אין מנצח
}

export default function GameBoard(props) {
    const [board, setBoard] = useState([])
    useEffect(() => {
        setBoard([["", "", ""], ["", "", ""], ["", "", ""]])
    }, [])
    const [shape, setShape] = useState("O")
    function Draw(i, j) {
        if (board[i][j] == "") {
            const newBoard = board.map(row => [...row]);
            newBoard[i][j] = shape;
            setBoard(newBoard);
            setShape(shape == "X" ? "O" : "X")
        }
    }
    useEffect(() => {
        let winner = calculateWinner(board)
        if (winner != null) {
            alert(`המנצח הוא: ${winner}!`)
            setBoard([["", "", ""], ["", "", ""], ["", "", ""]])
        }
    }, [board])

    return (
        <>
            <div className="game-board">
                {board.map((row, rowIndex) => (
                    <div className="board-row" key={rowIndex}>
                        {row.map((column, columnIndex) => (
                            <Square
                                key={columnIndex}
                                shape={column}
                                draw={() => Draw(rowIndex, columnIndex)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </>
    )

}