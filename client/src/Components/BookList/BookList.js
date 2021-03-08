import React from "react";

const BookList = ({ books }) => {
  return (
    <div
      className="row"
      style={{ margin: "auto", width: "90%", padding: "10px" }}
    >
      {books &&
        books.map((book, index) => (
          <div key={index} className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <p>{book.items.volumeInfo.title}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookList;
