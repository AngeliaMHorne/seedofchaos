import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Nav = () => {

  return(
        <div className="navbar">
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/">About</Link>
           </ul>
        </div>
  );

  

}

export default Nav;