import React from 'react'
import './stayle.css'
export default function Sqer(props){

    return<>
    <div className="ta" onClick={props.onClick}>
        <div className={ props.shape }>{ props.shape }</div>
    </div>
    
    </>
}

  
  


