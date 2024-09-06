import React from "react";
import "./index.css"
import CompanyName from "./CompanyName";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import HeaderImage from "./HeaderImage";

function Header(){
    return(
        <header id="header">
            <div id="headerTop">
                <CompanyName />
                <SearchBar />
                <NavBar />
            </div>
                {/* <HeaderImage /> */}
        </header>
    )
}
export default Header