import React from "react";
import { useState } from "react";
import "./../App.css";
// import useFetch from "./../utils/useFetch";
import axios from "axios";
import BookList from "../Components/BookList/BookList";

const Search = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyAQzxLvsi1_xvTY61AevxyzjZYzHiSMhZg"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("book searched: ", name);

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          name +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((data) => setResult(data.data.items));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="form-control"
          placeholder="Google Book Search"
          required
          value={name}
          onChange={(e) =>
            e.target.value ? setName(e.target.value) : "Enter Book"
          }
        />
        <button className="btn btn-outline-secondary" style={{}}>
          Search
        </button>
      </form>
      <div className="container">
        <BookList result={result} />
      </div>
    </div>
  );
};

export default Search;
