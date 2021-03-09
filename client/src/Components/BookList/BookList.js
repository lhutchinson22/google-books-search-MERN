import React from "react";

const BookList = ({ result }) => {
  return (
    <div>
      {result.map((name, index) => (
        <img
          key={index}
          src={name.volumeInfo.imageLinks.thumbnail}
          alt={name.title}
        />
      ))}
    </div>
  );
};

export default BookList;
