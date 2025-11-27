import { useState } from "react"

export default function Counter(props){
    // const countState = useState(0)
    // const count = countState[0]
    // const setCount = countState[1]

    // useState() == [משתנה, פונקציה שמשנה את המשתנה הזה]
    const [count, setCount] = useState(0)

    return <>
        <h1>Count: { count }</h1>
        <button onClick={() => setCount(count+props.delta) }>+</button>
    </>
}