import React from "react";
import "./index.css"

function NavBar(){
    return(
        <div id="navBar">
            <ul>
                <a className="navButton" href="#Post">Post</a>
                <a className="navButton" href="#Login">Login</a>
            </ul>
        </div>
    )
}
export default NavBar