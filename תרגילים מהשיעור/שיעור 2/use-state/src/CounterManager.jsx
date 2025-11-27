import { useState } from "react"
import Counter from "./Counter"

export default function CounterManager(){
    const [delta, setDelta] = useState()

    function changeDelta(event){
        console.log(event)
        setDelta(+event.target.value)
    }

    return <>
        <input type='number' onChange={changeDelta}/>
        <Counter delta={ delta }/>
        <Counter delta={ delta }/>
    </>
}