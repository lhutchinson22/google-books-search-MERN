import React from "react";
import { useState } from "react";
import "./../App.css";
import useFetch from "./../utils/useFetch";
import BookList from "../Components/BookList/BookList";
import axios from "axios";

const Search = () => {
  const [name, setName] = useState("");

  const APIkey = "AIzaSyAQzxLvsi1_xvTY61AevxyzjZYzHiSMhZg";
  const { error, isPending, data: books } = useFetch(
    "https://www.googleapis.com/demo/v1/324" + APIkey
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("book searched: ", name);

    axios.post("/api/books", name).then((res) => console.log(res));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <label>Search Book</label>
        <input
          type="text"
          required
          placeholder="name"
          value={name}
          onChange={(e) =>
            e.target.value ? setName(e.target.value) : "Enter name"
          }
        />
        <button onClick={handleSubmit}>Search</button>
      </form>

      {/* <div className="banner-image paraPort"> */}
      <h1 className="banner-header">All Books</h1>
      {/* </div> */}
      <div className="container">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {console.log("book results: " + books)}
        {books && <BookList books={books} />}
      </div>
    </div>
  );
};

export default Search;
