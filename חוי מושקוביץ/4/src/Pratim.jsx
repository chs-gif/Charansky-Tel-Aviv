import { Outlet, useNavigate, useParams } from "react-router-dom"
import { plays } from "./Data";

export default function Pratim() 
{
    const params = useParams()
    const navigate = useNavigate()
      
    function back(){
        // מנווט לכתובת URL האחרונה שהיה בה (אחד אחורה)
        navigate(-1)
    }
    return<>
   < p>
   {plays.id}
   {plays.name}
   </p>
 <button onClick={ back }>Back</button>
   <Outlet/>
      <Outlet/>
    </>
}
