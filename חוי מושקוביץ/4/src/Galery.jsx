import { useNavigate } from "react-router-dom"
import { plays } from "./Data";
export default function Galery(){
    const navigate = useNavigate()

     function navigated(id){
      
        navigate(`/Pratim/${ id }`)
    }

    return <>

{plays.map(p=> <div style={{width:"100px", height:"100px", color:"blue"}} onClick={() => navigated(p.id)}>{p.name}</div>)}

    </>
}