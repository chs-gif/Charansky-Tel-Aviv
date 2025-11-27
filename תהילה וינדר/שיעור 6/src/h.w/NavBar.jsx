import { Link } from "react-router-dom";

export default function NavBar() {
    return <nav>
        <ul>
            <li><Link to={"/contact"}>Contact  </Link></li>
            <li><Link to={"/gallery"}>Gallery</Link></li>
        </ul>
    </nav>
}