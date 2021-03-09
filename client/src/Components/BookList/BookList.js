import React from "react";

const BookList = ({ books }) => {
  return (
    <div>
      {books &&
        books.map((book, index) => (
          <div key={index}>
            <p>{book.items.volumeInfo.title}</p>
          </div>
        ))}
    </div>
  );
};

export default BookList;
