import {Link} from "react-router-dom"

export default function NavBar(){
    return <nav>
        <ul>
            <li><Link to={"/4androw"}>4inrow</Link></li>
            <li><Link to={"/class 1"}>class 1</Link></li>
            <li><Link to={"/class 2"}>class 2</Link></li>
        </ul>
    </nav>
}
