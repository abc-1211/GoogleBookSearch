import React from "react";
import Navbar from "../component/navbar";
import HeadBox from "../component/headbox";
import SavedBox from "../component/savedbox";

function Saved() {
    return (
        <React.Fragment>
            <Navbar/>
            <HeadBox />
            <SavedBox />
        </React.Fragment>
    )
};

export default Saved;