import { useEffect, useState } from "react";
export default function Square(props) {
    return (
        <>
            <div className="square" onClick={props.draw}>
                <div className={props.color}></div>
            </div>
        </>)
}
