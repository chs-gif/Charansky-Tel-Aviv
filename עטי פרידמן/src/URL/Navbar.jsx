import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={"/XO"}>XO</Link></li>
                    <li><Link to={"/4Row"}>4 in a row</Link></li>
                </ul>
            </nav>
        </>
    )
}