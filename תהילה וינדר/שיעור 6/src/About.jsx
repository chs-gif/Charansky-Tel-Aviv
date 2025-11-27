import { useNavigate } from "react-router-dom"

export default function About(){
    const navigate =useNavigate()
    function back(){
        navigate(-1)
    }
    return(
    <>
    <h1>About</h1>
    <button onClick={ back }>back</button>
    </>)
}