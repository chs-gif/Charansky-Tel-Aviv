import { useEffect, useState } from "react"
import Cell from "./cell";
import './board.css';


export default function Bord() {
    // const [board, setBoard] = useState([
    //     ["", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", ""],]);
    const [board, setBoard] = useState(Array(6).fill(null).map(() => Array(7).fill("")));

    const [color, setColor] = useState("red");
    function play(col) {
        let k = -1;
        for (let i = 0; i < board.length; i++)
            if (board[i][col] === "")
                k = i;
        if (k !== -1) {
            const newBoard = board.map((r, i) =>
                r.map((cell, j) => (i === k && j === col ? color : cell))
            );
            setBoard(newBoard);
            setColor(color === "red" ? "green" : "red");
        }

    }
    function checkWinner() {
        for (let i = 0; i < board.length; i++)
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] !== "") {
                    if (j + 3 < board[i].length) {
                        let flag = true;
                        for (let k = 1; k <= 3 && flag; k++) {
                            if (board[i][j + k] !== board[i][j]) flag = false;
                        }
                        if (flag) {
                            alert(`${board[i][j]} wins horizontally!`);
                            return;
                        }
                    }

                    // בדיקה אנכית ↓
                    if (i + 3 < board.length) {
                        let flag = true;
                        for (let k = 1; k <= 3 && flag; k++) {
                            if (board[i + k][j] !== board[i][j]) flag = false;
                        }
                        if (flag) {
                            alert(`${board[i][j]} wins vertically!`);
                            return;
                        }
                    }

                    // בדיקה אלכסונית ↘
                    if (i + 3 < board.length && j + 3 < board[i].length) {
                        let flag = true;
                        for (let k = 1; k <= 3 && flag; k++) {
                            if (board[i + k][j + k] !== board[i][j]) flag = false;
                        }
                        if (flag) {
                            alert(`${board[i][j]} wins diagonally!`);
                            return;
                        }
                    }
                    // בדיקה אלכסונית לכייון השני
                     if (i + 3 < board.length && j - 3 >=0) {
                        let flag = true;
                        for (let k = 1; k <= 3 && flag; k++) {
                            if (board[i + k][j -k] !== board[i][j]) flag = false;
                        }
                        if (flag) {
                            alert(`${board[i][j]} wins diagonally!`);
                            return;
                        }
                    }
                }
            }
    }
    useEffect(() => {
        checkWinner()

    }, [board]);
    return <><div>
        {board.map((row, i) =>
            <div key={i} style={{ display: "flex" }}>{
                row.map((cell, j) =>
                    (<Cell key={`${i}-${j}`} onClick={() => play(j)} color={cell}></Cell>)
                )
            } </div>)}
    </div>

    </>
}