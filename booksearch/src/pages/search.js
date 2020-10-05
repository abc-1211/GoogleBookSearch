import React from "react";
import Navbar from "../component/navbar";
import SearchBox from "../component/searchbox";
import HeadBox from "../component/headbox";
import ResultBox from "../component/resultbox";


function Search() {
    const books = [{bookName:"test"},{bookName:"test"}];

    return (
        <React.Fragment>
            <Navbar/>
            <HeadBox />
            <SearchBox />
            <ResultBox books={books}/>
        </React.Fragment>
    )
};

export default Search;