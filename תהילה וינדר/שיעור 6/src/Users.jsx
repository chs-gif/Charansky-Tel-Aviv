import {users} from './Data'
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Users()
{
    const nanigate=useNavigate()
    return<>
    <nav>
     <ul>

         {users.map(u =><li><Link to={`${u.id}`}>{u.fullName}</Link></li> )}
   
    </ul>
    </nav>
    <Outlet></Outlet>
    <button onClick={()=> nanigate('add')}> Add user</button>
    </>
}