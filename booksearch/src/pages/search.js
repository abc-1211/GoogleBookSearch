import React from "react";
import Navbar from "../component/navbar";
import SearchBox from "../component/searchbox";
import HeadBox from "../component/headbox";


function Search() {
    return (
        <React.Fragment>
            <Navbar/>
            <HeadBox />
            <SearchBox />
        </React.Fragment>
    )
};

export default Search;