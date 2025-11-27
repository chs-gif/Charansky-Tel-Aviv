import { useEffect, useState, useRef } from "react";
import Square from "./Square";

function calculateWinner(board, color, i, j) {
    let count , x , y 
    count = -1; x = i; y = j;

    while (y < 7 && board[x][y] === color) {
        count++
        y++
    }
    y = j
    while (y > -1 && board[x][y] === color) {
        count++
        y--
    }
    if (count >= 4)
        return color

    count = -1; x = i; y = j;
    while (x < 6 && board[x][y] === color) {
        count++
        x++
    }
    x = i
    while (x > -1 && board[x][y] === color) {
        count++
        x--
    }
    if (count >= 4)
        return color


    count = -1; x = i; y = j;
    while (x < 6 &&y<7&& board[x][y] === color) {
        count++
        x++
        y++
    }
    x = i; y = j
    while (x > -1&&y>-1 && board[x][y] === color) {
        count++
        x--
        y--
    }
    if (count >= 4)
        return color

    count = -1; x = i; y = j;
    while (x < 6 &&y>-1&& board[x][y] === color) {
        count++
        x++
        y--
    }
    x = i; y = j
    while (x > -1&&y<7 && board[x][y] === color) {
        count++
        x--
        y++
    }
    if (count >= 4)
        return color

    return null

}

export default function Board() {
    const [board, setBoard] = useState([["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""]])
    const [color, setColor] = useState("red")
    const bref=useRef(null)

    function Draw(j) {
        var i = 5
        while (board[i][j] != "" && i > 0)
            i--
        if (board[i][j] == "") {
            const newBoard = board.map(row => [...row]);
            newBoard[i][j] = color;
            setBoard(newBoard);

            let winner = calculateWinner(newBoard, color, i, j)
            if (winner != null) {
                // alert(`המנצח הוא: ${winner}!`)
                bref.current.style.background = "green";
                // setBoard([["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""]])
            }
            setColor(color == "red" ? "yellow" : "red")

        }
    }

    return (
        <>
            <div className="game-board" ref={bref}>
                {board.map((row, rowIndex) => (
                    <div className="board-row" key={rowIndex}>
                        {row.map((column, columnIndex) => (
                            <Square
                                key={columnIndex}
                                color={column}
                                draw={() => Draw(columnIndex)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}