import React from "react";
import Navbar from "../component/navbar";
import SearchBox from "../component/searchbox";
import HeadBox from "../component/headbox";
import ResultBox from "../component/resultbox";
import { useForm } from "react-hook-form";

function Search() {
    const { register, handleSubmit } = useForm();
    const books = [{bookName:"test"},{bookName:"test"}];

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <React.Fragment>
            <Navbar/>
            <HeadBox />
            <SearchBox handleSubmit={handleSubmit(onSubmit)} register={register} />
            <ResultBox books={books}/>
        </React.Fragment>
    )
};

export default Search;