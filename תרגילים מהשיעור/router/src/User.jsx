import { useNavigate, useParams } from "react-router-dom"
import { users } from "./Data";

export default function User() {

    // מחזיר אובייקט עם כל הפרמטרים מהURL
    // { id: <הערך מתוך הURL> }
    const params = useParams()
    console.log(params);

    // מאפשר לנו לשנות את הURL
    const navigate = useNavigate()

    const user = users.find(u => u.id === +params.id)
    
    function navigateToNext(){
        // מקבל כתובת URL שאליה הוא ינווט
        navigate(`/user/${ (+params.id % 3) + 1 }`)
    }

    return <>
        <h1>Welcome to { user.fullName }</h1>
        <button onClick={ navigateToNext }>Next {'>>'}</button>
    </>
}