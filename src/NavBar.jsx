import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li> */}
  
<li> <Link to={"/4inLIne"}>4 בשורה</Link></li>
<li><Link to={"/XO"}> איקס עיגול</Link></li>
        
      </ul>
    </nav>
  );
}
