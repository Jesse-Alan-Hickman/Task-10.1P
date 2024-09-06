import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

function NavBar(){
    return(
        <div id="navBar">
            <ul>
                <Link className="navButton" to="/">Post</Link>
                <Link className="navButton" to="/Login">Login</Link>
            </ul>
        </div>
    )
}
export default NavBar