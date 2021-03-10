import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../Components/DeleteButton/DeleteButton";
import API from "../utils/API";

const Saved = () => {
  const [books, setBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  const handleClick = (event) => {
    console.log("clicked delete");
  };

  return (
    <table
      className="table table-light table-hover"
      style={{ marginTop: "20px" }}
    >
      <tbody>
        {books.length ? (
          books.map((book, index) => (
            <tr className="table-active" key={index}>
              <td>
                <Link to={book.link}>
                  <img key={index} src={book.image} alt={book.title} />
                </Link>
                <DeleteButton onClick={handleClick} data-value={index} />
              </td>
              <td>
                <strong>Book title:</strong> {book.title}
                <p>
                  <strong>Description:</strong> {book.description}
                </p>
              </td>
              <td>
                <strong>Authors:</strong> {book.authors}
              </td>
            </tr>
          ))
        ) : (
          <tr className="table-active">
            <td>
              <strong>no results</strong>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Saved;
