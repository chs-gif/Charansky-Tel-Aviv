import { Link } from "react-router-dom";

export default function NavBar(){

    return <nav>
            {/* Link מנווט לכתובת URL שקיבל בלי לרנדר את הדף*/}
            <Link to={'/home'} style={ { margin: "20px" } }>Home</Link>
            <Link to={'/about'} style={ { margin: "20px" } }>About</Link>
            <Link to={'/users'} style={ { margin: "20px" } }>Users</Link>
    </nav>
}