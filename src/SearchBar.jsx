import React from "react";
import "./index.css"

function SearchBar(){
    return(
        <div className="searchBarDiv" >
            <input type="text" id="searchBar" placeholder="Search..."/>
        </div>
    )
}
export default SearchBar