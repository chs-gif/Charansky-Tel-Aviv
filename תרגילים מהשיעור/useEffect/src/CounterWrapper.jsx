import { useState } from "react";
import Counter from "./Counter";

export default function CounterWrapper() {
    const [showCounter, setShowCounter] = useState(true)

    function toggle(){
        setShowCounter(old => !old)
    }

    return <>
    <button onClick={toggle}>Hide / Show counter</button>
    { showCounter && <Counter/> }
    </>
}