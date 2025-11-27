import { useEffect, useRef, useState } from "react"

export default function UseRef() {
    const [divValues, setDivValues] = useState([])
    const ref = useRef(null)

    function keyPress(event, index){
        if (event.key === 'Enter'){
            ref.current.children[(index + 1) % 4].focus()
        } else {
            divValues[index] = (divValues[index] || "") + event.key
            setDivValues([...divValues])
        }  
    }

    useEffect(()=>{
        console.log(ref);
        
    }, [ref])

    return <div style={{ display: 'flex' }} ref={ref}>
        { Array(4).fill().map((v, i) => 
        <div tabIndex={0} style={{ border: '1px solid black', height: '200px', width: '200px' }} onKeyDown={(e) => keyPress(e, i)} key={i}>{divValues[i]}</div>
        )}
    </div>
}