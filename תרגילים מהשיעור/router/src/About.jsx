import { useNavigate } from "react-router-dom"

export default function About(){
    const navigate = useNavigate()

    function back(){
        // מנווט לכתובת URL האחרונה שהיה בה (אחד אחורה)
        navigate(-1)
    }

    return <>
        <h1>About</h1>
        <button onClick={ back }>Back</button>
    </>
}