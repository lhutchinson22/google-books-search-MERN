import React, { useEffect } from "react";
import API from "../utils/API";

const Saved = () => {
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>This is saved</h1>
      {loadBooks && loadBooks}
    </div>
  );
};

export default Saved;
