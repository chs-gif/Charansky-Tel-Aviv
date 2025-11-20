import { Link } from "react-router-dom";
export default function NavBar() {
    return <nav>
        <ul>
            <li> <Link to={'/4inrow'}>4inrow</Link> </li>
            <li><Link to={"/cities"}>Cities</Link></li>
        </ul>
    </nav>
}