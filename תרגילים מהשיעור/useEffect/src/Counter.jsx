import { useEffect, useState } from "react";

export default function Counter() {
    const [tick, setTick] = useState(0)

    useEffect(() => {

        const id = setInterval(() => {
            setTick((old) => old + 1)
        }, 1000)   
        
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        console.log('tick: ', tick);

        return () => {}
    }, [tick])

    return <p>Ticks: { tick }</p>
}