import { Link, Outlet, useNavigate } from "react-router-dom";
import { users } from "./Data";

export default function Users(){

    const navigate = useNavigate()

    return <>
        <nav>
            <ul>   
                { users.map(u => <li><Link to={ `${u.id}` }>{ u.fullName }</Link></li>) }
            </ul>            
        </nav>
        {/* כאשר מנטווים לURL בלי סלש הוא משרשר את הURL שקיבל לסוף הURL הקיים (ולא מחליף אותו) */}
        <button onClick={ () => navigate('add') }>Add user</button>
        <div>
            {/* כאן יצטיירו הקומפוננטות של התת ראוטינג */}
            <Outlet/>
        </div>
    </>

}