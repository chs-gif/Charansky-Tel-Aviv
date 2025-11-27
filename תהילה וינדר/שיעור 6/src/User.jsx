import { useNavigate, useParams } from "react-router-dom"
import {users} from './Data'

export default function User() {
   
    //מחזיר אובייקט עם כל הפרמטרים מה URL
    const parmas = useParams()
    const user = users.find(u => u.id === +parmas.id)
    //מאפשר לנו לשנות את ה URL
    const navigate=useNavigate()
    function navigateToNext(){
        navigate(`/user/${(+parmas.id)%2+1}`)
    }
    return <>
        <h1>welcome to {user.fullName}</h1>
        <button onClick={navigateToNext}>next {'>>'}</button>
    </>
}