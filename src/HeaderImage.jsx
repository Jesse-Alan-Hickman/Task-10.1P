import React from "react";
import "./index.css"
import headerImage from "../src/images/headerImage.jpg"

function HeaderImage(){
    return(
        <div id="headerImage">
            <img src={headerImage} alt="HeaderImage" width="100%" height="333vh"></img>
        </div>
    )
}
export default HeaderImage