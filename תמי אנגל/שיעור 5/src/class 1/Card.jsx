import './App.css'
import React from 'react'
export default function Card(props){
    return<>
    <div className='clothesCard' style={{color: props.colo}}>
        <h1>{props.clothes.desc}</h1>
        <h1>{props.clothes.size}</h1>
        <h1>{props.clothes.exists}</h1>
    </div>
    </>
}