import React from "react";
import "./../App.css";
import useFetch from "./../utils/useFetch";
import BookList from "../Components/BookList/BookList";

const Search = () => {
  const APIkey = "AIzaSyAQzxLvsi1_xvTY61AevxyzjZYzHiSMhZg";
  const { error, isPending, data: books } = useFetch(
    "https://www.googleapis.com/books/v1/volumes?q=search-terms&key=" + APIkey
  );
  return (
    <>
      {/* <div className="banner-image paraPort"> */}
      <h1 className="banner-header">Portfolio</h1>
      {/* </div> */}
      <div className="container">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {books && <BookList books={books} />}
      </div>
    </>
  );
};

export default Search;
