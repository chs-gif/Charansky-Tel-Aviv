import { Link } from "react-router-dom";

export default function Nav(){
    return <nav>
        <ul>
            {/* Link מנווט לכתובת URL שקיבל בלי לרנדר את הדף*/}
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/file'}>File</Link></li>
             <li><Link to={'/user'}>User</Link></li>
        </ul>              
    </nav>
}