import React ,{useEffect,useState} from "react";
import './Cell.css';


export default function Cell({ value, onClick }) {
    return (
      <div className="cell" onClick={onClick}>
        {value && <div className={value}></div>}
      </div>
    )
  }