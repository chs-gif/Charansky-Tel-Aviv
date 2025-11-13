import React ,{useEffect,useState} from "react";
import "./Cell.css";


export default function Cell({ value, onClick })
{
    return (
        <div className="cell-outer" onClick={onClick}>
        <div className={`cell-inner ${value === 'X' ? 'x' : value === 'O' ? 'o' : ''}`}>
          {value}
        </div>
      </div>
      
      )


}