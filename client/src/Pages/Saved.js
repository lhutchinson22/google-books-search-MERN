import React, { useState, useEffect } from "react";
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

    const indexValue = event.currentTarget.getAttribute("data-value");
    const formObject = books[indexValue];
    console.log(formObject);

    API.deleteBook(formObject._id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  };

  return (
    <table
      className="table table-light table-hover"
      style={{ margin: "auto", width: "90%" }}
    >
      <tbody>
        {books.length ? (
          books.map((book, index) => (
            <tr className="table-active" key={index}>
              <td>
                <a target="blank" href={book.link}>
                  <img key={index} src={book.image} alt={book.title} />
                </a>
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
          <tr className="no-books">
            <td style={{ textAlign: "center", padding: "65px" }}>
              <strong>You have 0 books saved.</strong>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Saved;
