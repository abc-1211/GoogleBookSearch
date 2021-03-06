import React, { useState } from "react";
import Navbar from "../component/navbar";
import SearchBox from "../component/searchbox";
import HeadBox from "../component/headbox";
import ResultBox from "../component/resultbox";
import { useForm } from "react-hook-form";
import services from "../services";

function Search() {
  const { register, handleSubmit } = useForm();
  const [books, setBooks] = useState([]);

  const onSubmit = async (data) => {
    try {
      const api = await services.searchBook(data.searchWord);
      console.log(api);
      setBooks(api.items);
    } catch (err) {
      return err;
    }
  };

  const save = async (index) => {
    try {
      let { title, infoLink, authors, description, imageLinks } = books[index].volumeInfo;
      let data = {
        title,
        infoLink,
        authors,
        description,
        imageLinks,
      };
      console.log(data);
      const res = await services.setSaved(data);
      console.log(res.msgBody);
    } catch (err) {
      return err;
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <HeadBox />
      <SearchBox handleSubmit={handleSubmit(onSubmit)} register={register} />
      <ResultBox books={books} save={save} />
    </React.Fragment>
  );
}

export default Search;
