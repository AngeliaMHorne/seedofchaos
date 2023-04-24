import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Nav = () => {

  return(
        <div className="navbar">
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <li><a href="angelia.seedofchaos.com">Angelia</a></li>
           </ul>
        </div>
  );

  

}

export default Nav;